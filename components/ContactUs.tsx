import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '../i18n';

const ContactUs: React.FC = () => {
   const { t } = useLanguage();

   return (
      <section className="pt-32 pb-16 bg-black min-h-screen relative overflow-hidden flex flex-col justify-center">
         <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none"></div>
         <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

         <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
               <h1 className="text-4xl md:text-6xl font-black italic text-white uppercase mb-6 tracking-tight">
                  {t.contact.title} <span className="text-brand-gold">{t.contact.titleHighlight}</span>
               </h1>
               <p className="text-gray-400 max-w-2xl mx-auto text-lg font-medium">{t.contact.desc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
               <a href="https://wa.me/447735029723" target="_blank" rel="noopener noreferrer" className="block bg-zinc-900/50 border border-zinc-800 p-10 rounded-2xl hover:border-green-500/50 hover:bg-zinc-900 transition-all group cursor-pointer">
                  <div className="flex flex-col items-center text-center gap-6">
                     <div className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors text-green-500 shrink-0 mb-2">
                        <MessageCircle size={48} />
                     </div>
                     <div>
                        <h3 className="text-3xl font-black italic text-white mb-2">WHATSAPP</h3>
                        <p className="text-gray-400 text-sm mb-4 font-medium">{t.contact.whatsapp}</p>
                        <span className="text-green-500 font-bold text-xl group-hover:text-green-400 transition-colors bg-green-500/10 px-4 py-2 rounded-lg group-hover:bg-black/30" dir="ltr">+44 7735 029723</span>
                     </div>
                  </div>
               </a>

               <a href="mailto:Contact@nixiptv.com" className="block bg-zinc-900/50 border border-zinc-800 p-10 rounded-2xl hover:border-brand-gold/50 hover:bg-zinc-900 transition-all group cursor-pointer">
                  <div className="flex flex-col items-center text-center gap-6">
                     <div className="w-24 h-24 rounded-full bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold group-hover:text-black transition-colors text-brand-gold shrink-0 mb-2">
                        <Mail size={48} />
                     </div>
                     <div>
                        <h3 className="text-3xl font-black italic text-white mb-2">EMAIL</h3>
                        <p className="text-gray-400 text-sm mb-4 font-medium">{t.contact.email}</p>
                        <span className="text-brand-gold font-bold text-xl group-hover:text-white transition-colors bg-brand-gold/10 px-4 py-2 rounded-lg group-hover:bg-black/30">Contact@nixiptv.com</span>
                     </div>
                  </div>
               </a>
            </div>
         </div>
      </section>
   );
};

export default ContactUs;