import React, { useState } from 'react';
import { useLanguage } from '../i18n';
import { Tv, Smartphone, Monitor, Laptop, Box, Terminal, CheckCircle } from 'lucide-react';

const Tutorials: React.FC = () => {
  const { t } = useLanguage();
  const [selectedDevice, setSelectedDevice] = useState<string>('firestick');

  // Mapping keys to Icons
  const ICONS: Record<string, React.ReactNode> = {
    firestick: <Tv size={24} />,
    android: <Smartphone size={24} />,
    smarttv: <Monitor size={24} />,
    apple: <Laptop size={24} />,
    pc: <Monitor size={24} />,
    mag: <Box size={24} />
  };

  const devicesList = Object.keys(t.tutorials.devices);

  return (
    <section className="pt-32 pb-16 bg-black min-h-screen relative overflow-hidden">
        {/* Ambient Background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-black italic text-white uppercase mb-6 tracking-tight">
                    {t.tutorials.title} <span className="text-brand-gold">{t.tutorials.titleHighlight}</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg font-medium">
                    {t.tutorials.desc}
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
                
                {/* Device Selector Sidebar */}
                <div className="lg:w-1/3">
                    <h3 className="text-gray-400 font-bold uppercase tracking-widest text-sm mb-4 pl-2">{t.tutorials.selectDevice}</h3>
                    <div className="space-y-3">
                        {devicesList.map((key) => {
                            // @ts-ignore
                            const deviceName = t.tutorials.devices[key].name;
                            const isSelected = selectedDevice === key;
                            return (
                                <button
                                    key={key}
                                    onClick={() => setSelectedDevice(key)}
                                    className={`w-full text-left p-4 rounded-xl flex items-center gap-4 transition-all duration-300 border ${
                                        isSelected 
                                        ? 'bg-zinc-900 border-brand-gold text-white shadow-[0_0_15px_rgba(252,163,17,0.1)]' 
                                        : 'bg-zinc-900/40 border-zinc-800 text-gray-400 hover:bg-zinc-900 hover:text-white'
                                    }`}
                                >
                                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-brand-gold text-black' : 'bg-zinc-800 text-gray-400'}`}>
                                        {ICONS[key] || <Terminal size={24}/>}
                                    </div>
                                    <span className="font-bold text-sm md:text-base uppercase tracking-wide">{deviceName}</span>
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Content Area */}
                <div className="lg:w-2/3">
                    <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 md:p-10 backdrop-blur-sm h-full">
                        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-zinc-800">
                             <div className="w-16 h-16 rounded-2xl bg-brand-gold flex items-center justify-center text-black shadow-lg">
                                {ICONS[selectedDevice]}
                             </div>
                             <div>
                                 <h2 className="text-2xl md:text-3xl font-black text-white italic uppercase">
                                     {(t.tutorials.devices as any)[selectedDevice]?.name}
                                 </h2>
                                 <span className="text-brand-gold font-bold text-sm uppercase tracking-widest">Step-by-Step Guide</span>
                             </div>
                        </div>

                        <div className="space-y-6">
                            {/* @ts-ignore */}
                            {(t.tutorials.devices as any)[selectedDevice]?.steps.map((step: string, index: number) => (
                                <div key={index} className="flex gap-4 group">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-brand-gold font-black text-sm group-hover:border-brand-gold transition-colors">
                                        {index + 1}
                                    </div>
                                    <p className="text-gray-300 font-medium leading-relaxed pt-1 border-l-2 border-zinc-800 pl-6 group-hover:border-zinc-700 transition-colors">
                                        {step}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 pt-8 border-t border-zinc-800 flex items-start gap-4 bg-blue-900/10 p-4 rounded-xl">
                            <CheckCircle className="text-brand-gold shrink-0 mt-1" size={20} />
                            <div>
                                <h4 className="text-white font-bold mb-1">Need extra help?</h4>
                                <p className="text-sm text-gray-400">If you are facing issues setting up {(t.tutorials.devices as any)[selectedDevice]?.name}, contact our 24/7 support team on WhatsApp.</p>
                                <a href="https://wa.me/447411576834" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-brand-gold text-sm font-bold hover:text-white transition-colors border-b border-brand-gold pb-0.5">
                                    Contact Support &rarr;
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};

export default Tutorials;