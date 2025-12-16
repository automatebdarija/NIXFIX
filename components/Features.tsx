
import React from 'react';
import { FEATURES_STRUCT, useLanguage } from '../i18n';

const Features: React.FC = () => {
  const { t } = useLanguage();

  const items = [
    { ...FEATURES_STRUCT[0], title: t.features.f1_title, desc: t.features.f1_desc },
    { ...FEATURES_STRUCT[1], title: t.features.f2_title, desc: t.features.f2_desc },
    { ...FEATURES_STRUCT[2], title: t.features.f3_title, desc: t.features.f3_desc }
  ];

  return (
    <section id="features" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent"></div>
      
      {/* Background Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black italic text-white uppercase mb-6 tracking-tight">
            {t.features.title} <span className="text-gradient-gold">{t.features.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-medium text-lg">{t.features.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {items.map((feature, idx) => (
            <div key={idx} className="group glass-card p-10 rounded-[2rem] text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-8">
                    <div className="w-20 h-20 rounded-2xl bg-black border border-zinc-800 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:border-brand-gold transition-all duration-300">
                        <div className="text-brand-gold drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]">
                            {feature.icon}
                        </div>
                    </div>
                </div>
                <h3 className="text-2xl font-black text-white italic mb-4 uppercase tracking-wide group-hover:text-brand-gold transition-colors">{feature.title}</h3>
                <p className="text-gray-400 font-medium leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-[2.5rem] bg-gradient-to-br from-zinc-900 to-black border border-white/5 p-8 md:p-16 relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>
           
           <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
               <div className="w-full md:w-1/2 text-center md:text-left rtl:md:text-right">
                    <h3 className="text-4xl md:text-6xl font-black text-white italic uppercase mb-8 leading-[0.9]">
                        {t.features.device_title} <br/> 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-orange-500">{t.features.device_highlight}</span>
                    </h3>
                    <p className="text-gray-400 font-medium text-lg mb-10 leading-relaxed">{t.features.device_desc}</p>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start rtl:md:justify-end">
                        {['Smart TV', 'Firestick', 'Android', 'iOS', 'Windows', 'MAG'].map(device => (
                            <span key={device} className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-gray-300 uppercase tracking-widest hover:bg-white/10 hover:border-brand-gold/30 transition-all cursor-default shadow-lg">
                                {device}
                            </span>
                        ))}
                    </div>
               </div>
               
               <div className="w-full md:w-1/2 flex justify-center">
                  <div className="relative">
                      <div className="absolute inset-0 bg-brand-gold/20 blur-[60px] rounded-full"></div>
                      <img src="https://i.ibb.co/5gdNzH3M/devices-1.webp" alt="Supported Devices" className="relative w-full max-w-md h-auto object-contain hover:scale-105 transition-transform duration-500 drop-shadow-2xl" />
                  </div>
               </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
