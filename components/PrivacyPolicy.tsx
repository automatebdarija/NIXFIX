import React, { useState } from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="pt-32 pb-16 bg-black min-h-screen relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-black italic text-white uppercase mb-6 tracking-tight">
                    PRIVACY <span className="text-brand-gold">POLICY</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg font-medium">
                    Your privacy is important to us. This policy explains how we handle your personal information.
                </p>
            </div>

            <div className="max-w-4xl mx-auto bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
                
                <div className="space-y-10 text-gray-300 leading-relaxed font-medium">
                    
                    <section>
                        <h2 className="text-2xl font-black italic text-white mb-4 flex items-center gap-3 uppercase">
                            <span className="w-1.5 h-6 bg-brand-gold rounded-full"></span>
                            1. Introduction
                        </h2>
                        <p>
                            Welcome to Nixiptv. We respect your privacy and are committed to protecting your personal data. 
                            This privacy policy will inform you as to how we look after your personal data when you visit our website 
                            and tell you about your privacy rights and how the law protects you.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black italic text-white mb-4 flex items-center gap-3 uppercase">
                            <span className="w-1.5 h-6 bg-brand-gold rounded-full"></span>
                            2. Information We Collect
                        </h2>
                        <p className="mb-4">
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-brand-gold">
                            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data:</strong> includes email address and telephone number.</li>
                            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, and operating system.</li>
                            <li><strong>Usage Data:</strong> includes information about how you use our website and services.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black italic text-white mb-4 flex items-center gap-3 uppercase">
                            <span className="w-1.5 h-6 bg-brand-gold rounded-full"></span>
                            3. How We Use Your Data
                        </h2>
                        <p>
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-brand-gold">
                            <li>To process and deliver your order (activation codes/lines).</li>
                            <li>To manage our relationship with you (support/notifications).</li>
                            <li>To improve our website, products/services, marketing and customer relationships.</li>
                            <li>To detect and prevent fraud or abuse of our services.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black italic text-white mb-4 flex items-center gap-3 uppercase">
                            <span className="w-1.5 h-6 bg-brand-gold rounded-full"></span>
                            4. Data Security
                        </h2>
                        <p>
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way. 
                            In addition, we limit access to your personal data to those employees and partners who have a business need to know.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black italic text-white mb-4 flex items-center gap-3 uppercase">
                            <span className="w-1.5 h-6 bg-brand-gold rounded-full"></span>
                            5. Cookies
                        </h2>
                        <p>
                            Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. You can set your browser to refuse all or some browser cookies.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black italic text-white mb-4 flex items-center gap-3 uppercase">
                            <span className="w-1.5 h-6 bg-brand-gold rounded-full"></span>
                            6. Third-Party Links
                        </h2>
                        <p>
                            This website may include links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black italic text-white mb-4 flex items-center gap-3 uppercase">
                            <span className="w-1.5 h-6 bg-brand-gold rounded-full"></span>
                            7. Contact Us
                        </h2>
                        <p>
                            If you have any questions about this privacy policy or our privacy practices, please contact us at:
                        </p>
                        <a href="mailto:contact@nixiptv.com" className="inline-block mt-4 text-brand-gold font-bold text-xl hover:text-white transition-colors border-b-2 border-brand-gold/50 hover:border-white">
                            contact@nixiptv.com
                        </a>
                    </section>

                </div>
            </div>
        </div>
    </section>
  );
};

export default PrivacyPolicy;