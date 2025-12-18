
'use client';

import React, { useState } from 'react';
import { getPlans, useLanguage, PRICING_MATRIX } from '../i18n';
import { usePayment } from './PaymentContext';
import { Check, Crown, Zap, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  const { lang, t } = useLanguage();
  const { openModal } = usePayment();
  const [deviceCount, setDeviceCount] = useState(1);

  const PLANS = getPlans(lang);

  return (
    <section id="pricing" className="py-24 bg-black scroll-mt-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[140px] animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[140px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/5 backdrop-blur-md mb-6">
            <span className="text-xs font-bold text-brand-gold tracking-[0.2em] uppercase">Premium Access</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black italic text-white uppercase mb-6 tracking-tighter">
            {t.pricing.title} <span className="text-gradient-gold">{t.pricing.titleHighlight}</span> {t.pricing.titleSuffix}
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
            {t.pricing.desc}
          </p>
        </div>

        {/* Responsive Device Selector */}
        <div className="flex justify-center items-center mb-20 px-4">
          <div className="glass-panel p-2 rounded-full flex flex-wrap md:flex-nowrap items-center justify-center w-full max-w-3xl mx-auto gap-2">
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                onClick={() => setDeviceCount(num)}
                className={`
                    flex-1
                    py-3 px-6
                    rounded-full 
                    text-sm md:text-base font-bold uppercase tracking-wide
                    transition-all duration-300 
                    whitespace-nowrap flex justify-center items-center gap-2
                    ${deviceCount === num
                    ? 'bg-brand-gold text-black shadow-[0_0_20px_rgba(255,215,0,0.3)] scale-105'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }
                  `}
              >
                {num} {num === 1 ? t.pricing.device : t.pricing.devices}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch px-2">
          {PLANS.map((plan, index) => {
            const isCenter = index === 1; // 12 Months plan is popular and centered
            const price = PRICING_MATRIX[deviceCount][plan.duration];
            const [priceWhole, priceCents] = price.split('.');

            return (
              <div
                key={index}
                className={`relative rounded-[2.5rem] p-8 md:p-10 flex flex-col transition-all duration-500 group h-full ${isCenter
                  ? 'bg-zinc-900/80 border-2 border-brand-gold shadow-[0_0_60px_rgba(255,215,0,0.15)] z-10 transform md:-translate-y-8 backdrop-blur-xl'
                  : 'glass-card hover:-translate-y-3'
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#FFD700] to-[#FF8C00] text-black text-xs font-black px-8 py-2.5 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(255,215,0,0.4)] uppercase tracking-widest z-20">
                    <Star size={12} fill="black" /> {t.pricing.popular}
                  </div>
                )}

                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-2xl font-black text-white italic uppercase tracking-wide">{plan.name}</h3>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">Full Access</p>
                  </div>
                  <div className={`p-4 rounded-2xl ${isCenter ? 'bg-brand-gold text-black shadow-lg shadow-brand-gold/20' : 'bg-white/5 text-gray-400'}`}>
                    {plan.icon === 'Zap' && <Zap size={24} />}
                    {plan.icon === 'Crown' && <Crown size={24} />}
                    {plan.icon === 'Star' && <Star size={24} />}
                  </div>
                </div>

                <div className="mb-8 pb-8 border-b border-white/10">
                  <div className="flex items-start text-white" dir="ltr">
                    <span className="text-2xl font-bold mt-2 text-brand-gold">$</span>
                    <span className="text-7xl font-black tracking-tighter text-white">{priceWhole}</span>
                    <div className="flex flex-col items-start mt-3 ml-1">
                      <span className="text-2xl font-bold text-gray-400">.{priceCents}</span>
                      <span className="text-xs font-black text-gray-500 uppercase tracking-wide">{plan.period}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features?.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 group/item">
                      <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${isCenter ? 'bg-brand-gold text-black' : 'bg-zinc-800 text-brand-gold'}`}>
                        <Check size={10} strokeWidth={4} />
                      </div>
                      <span className="text-gray-300 text-sm font-bold leading-tight group-hover/item:text-white transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => openModal({ deviceCount, duration: plan.duration })}
                  className={`block text-center w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all mb-4 border ${isCenter
                    ? 'bg-brand-gold text-black border-brand-gold hover:bg-white hover:border-white shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]'
                    : 'bg-white/5 text-white border-white/10 hover:bg-white hover:text-black hover:border-white'
                    }`}
                >
                  {t.pricing.choose}
                </button>

                <div className="flex justify-center items-center gap-2 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
                  <img src="/images/secure-checkout.avif" className="h-6 w-auto object-contain" alt="Secure Checkout" />
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Secure Payment</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
