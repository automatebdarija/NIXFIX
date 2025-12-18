'use client';

import React, { useEffect } from 'react';
import { X, Check, ShieldCheck, CreditCard, ChevronRight } from 'lucide-react';
import { usePayment } from './PaymentContext';
import { useLanguage, PRICING_MATRIX } from '../i18n';



const PaymentModal: React.FC = () => {
    const { state, closeModal, setPaymentState } = usePayment();
    const { t } = useLanguage();
    const [isLoading, setIsLoading] = React.useState(false);

    // Prevent background scroll when open
    useEffect(() => {
        if (state.isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [state.isOpen]);

    if (!state.isOpen) return null;

    const price = PRICING_MATRIX[state.deviceCount][state.duration];
    const planName = state.duration === 1 ? '1 Month' : state.duration === 6 ? '6 Months' : '12 Months';

    const handleProceed = async (e: React.MouseEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('/api/create-checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: parseFloat(price),
                    type: 'ONE_TIME',
                    external_id: `order_${Date.now()}_${state.deviceCount}_${state.duration}`
                })
            });

            const data = await response.json();

            if (data.checkout_url) {
                window.location.href = data.checkout_url;
            } else {
                console.error('No checkout URL returned', data);
                alert('Payment initialization failed. Please try again.');
            }
        } catch (error) {
            console.error('Payment error:', error);
            alert('Something went wrong. Please check your connection.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) closeModal();
    };

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 animate-in fade-in duration-200"
            onClick={handleBackdropClick}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

            {/* Modal Content */}
            <div className="relative bg-zinc-900 border border-white/10 w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">

                {/* Header */}
                <div className="bg-zinc-800/50 p-6 flex justify-between items-center border-b border-white/5">
                    <h3 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-2">
                        <ShieldCheck className="text-brand-gold" size={20} />
                        Secure Checkout
                    </h3>
                    <button
                        onClick={closeModal}
                        className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="p-6 md:p-8 space-y-8">

                    {/* Device Selection */}
                    <div className="space-y-3">
                        <span className="text-gray-400 text-xs font-bold uppercase tracking-widest ml-1">Select Connections</span>
                        <div className="grid grid-cols-4 gap-2">
                            {[1, 2, 3, 4].map(num => (
                                <button
                                    key={num}
                                    onClick={() => setPaymentState({ deviceCount: num })}
                                    className={`
                    py-3 rounded-xl border font-bold text-sm transition-all duration-200
                    ${state.deviceCount === num
                                            ? 'bg-brand-gold text-black border-brand-gold shadow-[0_0_15px_rgba(255,215,0,0.3)]'
                                            : 'bg-zinc-800 text-gray-400 border-white/5 hover:bg-white/5 hover:border-white/20'
                                        }
                  `}
                                >
                                    {num}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Duration Selection */}
                    <div className="space-y-3">
                        <span className="text-gray-400 text-xs font-bold uppercase tracking-widest ml-1">Select Duration</span>
                        <div className="grid grid-cols-3 gap-2">
                            {[1, 6, 12].map(num => {
                                const label = num === 1 ? '1 Month' : num === 6 ? '6 Months' : '1 Year';
                                return (
                                    <button
                                        key={num}
                                        onClick={() => setPaymentState({ duration: num })}
                                        className={`
                      py-3 rounded-xl border font-bold text-xs md:text-sm transition-all duration-200
                      ${state.duration === num
                                                ? 'bg-white text-black border-white shadow-lg'
                                                : 'bg-zinc-800 text-gray-400 border-white/5 hover:bg-white/5 hover:border-white/20'
                                            }
                    `}
                                    >
                                        {label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Summary Card */}
                    <div className="bg-black/40 rounded-2xl p-6 border border-white/5">
                        <div className="flex justify-between items-end mb-2">
                            <div>
                                <p className="text-gray-400 text-sm font-medium">Total Price</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-black text-white">${price}</span>
                                    <span className="text-gray-500 text-xs font-bold">USD</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-white font-bold">{state.deviceCount} {state.deviceCount === 1 ? 'Device' : 'Devices'}</p>
                                <p className="text-brand-gold text-sm">{planName} Access</p>
                            </div>
                        </div>
                    </div>

                    {/* Action Button */}
                    <button
                        onClick={handleProceed}
                        disabled={isLoading}
                        className={`group w-full py-4 rounded-xl bg-gradient-to-r from-brand-gold to-yellow-600 text-black font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-[0_4px_20px_rgba(255,215,0,0.3)] ${isLoading ? 'opacity-70 cursor-wait' : ''}`}
                    >
                        {isLoading ? 'Processing...' : 'Proceed to Payment'}
                        {!isLoading && <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                    </button>

                    <div className="flex items-center justify-center gap-2 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                        <CreditCard size={12} />
                        <span>Secure SSL Encrypted Payment</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PaymentModal;
