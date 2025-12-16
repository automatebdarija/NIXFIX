import React from 'react';

const RefundPolicy: React.FC = () => {
  return (
    <section className="pt-32 pb-16 bg-black min-h-screen relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-black italic text-white uppercase mb-6 tracking-tight">
                    REFUND <span className="text-brand-gold">POLICY</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg font-medium">
                    Our aim is to ensure a clear understanding of our refund process and to provide customer satisfaction.
                </p>
            </div>

            <div className="max-w-4xl mx-auto bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
                
                <div className="space-y-10 text-gray-300 leading-relaxed font-medium">
                    
                    <section>
                        <h2 className="text-2xl font-black italic text-white mb-4 flex items-center gap-3 uppercase">
                            <span className="w-1.5 h-6 bg-brand-gold rounded-full"></span>
                            1. Overview
                        </h2>
                        <p>
                            This Refund Policy governs the process and conditions under which refunds are granted for the IPTV services provided by Nixiptv Media Inc. (“Nixiptv”, “we”, “us”, or “our”). Our aim is to ensure a clear understanding of our refund process and to provide customer satisfaction while maintaining fair business practices.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black italic text-white mb-4 flex items-center gap-3 uppercase">
                            <span className="w-1.5 h-6 bg-brand-gold rounded-full"></span>
                            2. Refund Eligibility Period
                        </h2>
                        <div className="bg-zinc-900/80 p-6 rounded-lg border-l-4 border-brand-gold">
                            <h3 className="text-white font-bold mb-2">7-Day Refund Policy</h3>
                            <p>
                                Customers who subscribe to our IPTV services are eligible to request a full refund within <span className="text-brand-gold font-bold">Seven (7) calendar days</span> from the date of their initial subscription purchase.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black italic text-white mb-4 flex items-center gap-3 uppercase">
                            <span className="w-1.5 h-6 bg-brand-gold rounded-full"></span>
                            3. Conditions for Refund
                        </h2>
                        <ul className="list-disc pl-6 space-y-4 marker:text-brand-gold">
                            <li>
                                <strong className="text-white">Refund Request:</strong> To initiate a refund, customers must contact our support team within the seven-day period. The request should include the customer’s name, account details, and the reason for the refund.
                            </li>
                            <li>
                                <strong className="text-white">Non-Transferable:</strong> The refund policy is applicable only to the original subscriber and is non-transferable.
                            </li>
                            <li>
                                <strong className="text-white">Payment Method:</strong> Refunds will be processed using the original payment method used at the time of purchase.
                            </li>
                            <li>
                                <strong className="text-white">Processing Time:</strong> Once a refund request is approved, the refund process may take up to 5-10 business days to be reflected in the customer’s account.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black italic text-white mb-4 flex items-center gap-3 uppercase">
                            <span className="w-1.5 h-6 bg-brand-gold rounded-full"></span>
                            4. Non-Refundable Circumstances
                        </h2>
                        <ul className="list-disc pl-6 space-y-4 marker:text-brand-gold">
                            <li>
                                <strong className="text-white">Renewals:</strong> The seven-day refund policy does not apply to subscription renewals. Only the initial subscription purchase is eligible for a refund under this policy.
                            </li>
                            <li>
                                <strong className="text-white">Partial Refunds:</strong> We do not offer partial refunds for unused portions of the subscription period once the seven-day period has elapsed.
                            </li>
                            <li>
                                <strong className="text-white">Technical Issues:</strong> If the refund request is due to technical issues, we encourage customers to contact our support team for assistance before requesting a refund. We are committed to resolving technical problems that are within our control.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black italic text-white mb-4 flex items-center gap-3 uppercase">
                            <span className="w-1.5 h-6 bg-brand-gold rounded-full"></span>
                            5. Cancellation of Service
                        </h2>
                        <p>
                            Subscribers wishing to cancel their service after the seven-day period must follow the cancellation procedures outlined in our Terms of Service. No refunds will be granted for cancellations made after the seven-day refund period.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black italic text-white mb-4 flex items-center gap-3 uppercase">
                            <span className="w-1.5 h-6 bg-brand-gold rounded-full"></span>
                            6. Contact Information
                        </h2>
                        <p>
                            For refund requests or queries regarding this Refund Policy, please contact our customer support team at:
                        </p>
                        <a href="mailto:Contact@nixiptv.com" className="inline-block mt-4 text-brand-gold font-bold text-xl hover:text-white transition-colors border-b-2 border-brand-gold/50 hover:border-white">
                            Contact@nixiptv.com
                        </a>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black italic text-white mb-4 flex items-center gap-3 uppercase">
                            <span className="w-1.5 h-6 bg-brand-gold rounded-full"></span>
                            7. Policy Amendments
                        </h2>
                        <p>
                            Nixiptv Media Inc. reserves the right to modify or amend this Refund Policy at any time. Any changes will be effective immediately upon posting on our website or notification to our users.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    </section>
  );
};

export default RefundPolicy;