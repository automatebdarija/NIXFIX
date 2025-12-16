import React, { useState } from 'react';

const TermsConditions: React.FC = () => {
    return (
        <section className="pt-32 pb-16 bg-black min-h-screen relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-black italic text-white uppercase mb-6 tracking-tight">
                        TERMS & <span className="text-brand-gold">CONDITIONS</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-medium">
                        Please read these terms and conditions carefully before using our service.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 md:p-12 backdrop-blur-sm">

                    <div className="space-y-10 text-gray-300 leading-relaxed font-medium">

                        <section>
                            <h2 className="text-2xl font-black italic text-white mb-4 flex items-center gap-3 uppercase">
                                <span className="w-1.5 h-6 bg-brand-gold rounded-full"></span>
                                1. Acceptance of Terms
                            </h2>
                            <p>
                                By accessing and using the services provided by Nixiptv (&quot;Service&quot;), you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our Service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black italic text-white mb-4 flex items-center gap-3 uppercase">
                                <span className="w-1.5 h-6 bg-brand-gold rounded-full"></span>
                                2. Description of Service
                            </h2>
                            <p>
                                Nixiptv provides IPTV subscription services that allow users to access live TV channels, video on demand (movies and series), and other content via the internet. We do not host any content ourselves but provide access to streams available on the internet.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black italic text-white mb-4 flex items-center gap-3 uppercase">
                                <span className="w-1.5 h-6 bg-brand-gold rounded-full"></span>
                                3. Subscription & Payment
                            </h2>
                            <ul className="list-disc pl-6 space-y-2 marker:text-brand-gold">
                                <li><strong>Billing:</strong> Subscriptions are billed in advance based on the plan selected (Monthly, Semi-Annual, Yearly).</li>
                                <li><strong>Activation:</strong> Services are typically activated within minutes of payment confirmation, but may take up to 24 hours in rare circumstances.</li>
                                <li><strong>Pricing:</strong> Prices are subject to change at any time. However, the price for an active subscription will remain unchanged until the renewal date.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black italic text-white mb-4 flex items-center gap-3 uppercase">
                                <span className="w-1.5 h-6 bg-brand-gold rounded-full"></span>
                                4. Usage & Compatible Devices
                            </h2>
                            <p className="mb-4">
                                You are responsible for ensuring that you have a compatible device and a high-speed internet connection (minimum 25 Mbps recommended) to stream content in HD/4K quality.
                            </p>
                            <p>
                                Sharing your subscription account details with others is strictly prohibited. One subscription is valid for one active connection unless a multi-room plan is purchased. We reserve the right to suspend accounts that violate this policy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black italic text-white mb-4 flex items-center gap-3 uppercase">
                                <span className="w-1.5 h-6 bg-brand-gold rounded-full"></span>
                                5. Content Availability
                            </h2>
                            <p>
                                The number of channels and VOD content is subject to change without notice. We aim to keep our library updated, but we cannot guarantee the availability of specific channels or content at all times due to technical reasons or rights issues.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black italic text-white mb-4 flex items-center gap-3 uppercase">
                                <span className="w-1.5 h-6 bg-brand-gold rounded-full"></span>
                                6. Limitation of Liability
                            </h2>
                            <p>
                                Nixiptv shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the service, including but not limited to damages for loss of profits, data, or other intangibles.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black italic text-white mb-4 flex items-center gap-3 uppercase">
                                <span className="w-1.5 h-6 bg-brand-gold rounded-full"></span>
                                7. Termination
                            </h2>
                            <p>
                                We reserve the right to terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black italic text-white mb-4 flex items-center gap-3 uppercase">
                                <span className="w-1.5 h-6 bg-brand-gold rounded-full"></span>
                                8. Contact Information
                            </h2>
                            <p>
                                If you have questions about these Terms, please contact us at:
                            </p>
                            <a href="mailto:Contact@nixiptv.com" className="inline-block mt-4 text-brand-gold font-bold text-xl hover:text-white transition-colors border-b-2 border-brand-gold/50 hover:border-white">
                                Contact@nixiptv.com
                            </a>
                        </section>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default TermsConditions;