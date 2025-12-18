
'use client';

import React from 'react';
import { Play, List, Star, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../i18n';
import { usePayment } from './PaymentContext';

const Hero: React.FC = () => {
  const { t, navigate } = useLanguage();
  const { openModal } = usePayment();

  const handleGetStartedClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openModal({ deviceCount: 1, duration: 12 });
  };

  const handleChannelsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/channels');
  };

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-16 lg:pt-40 bg-black">

      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[140px]"></div>
        <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
        <img
          src="/images/hero-bg.jpg"
          alt="Background Texture"
          className="w-full h-full object-cover"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">

        <div className="inline-flex items-center gap-2 border border-brand-gold/20 bg-brand-gold/5 backdrop-blur-md px-5 py-2 rounded-full mb-8 shadow-[0_0_20px_rgba(255,215,0,0.1)] animate-in fade-in zoom-in duration-700">
          <ShieldCheck size={14} className="text-brand-gold" />
          <span className="text-xs font-bold text-brand-gold tracking-[0.2em] uppercase">{t.hero.tag}</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white italic tracking-tighter mb-8 drop-shadow-2xl leading-[0.9] animate-in slide-in-from-bottom-8 duration-700 delay-100">
          {t.hero.title1} <span className="text-gradient-gold text-glow">{t.hero.title2}</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">{t.hero.title3}</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 font-medium leading-relaxed animate-in slide-in-from-bottom-8 duration-700 delay-200">
          {t.hero.desc}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-5 w-full md:w-auto mb-16 animate-in slide-in-from-bottom-8 duration-700 delay-300">
          <button onClick={handleGetStartedClick} className="group relative px-8 py-4 rounded-full bg-gold-gradient text-black font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,215,0,0.4)]">
            <span className="flex items-center gap-3">
              <Play size={20} fill="currentColor" className="stroke-black" />
              {t.hero.cta1}
            </span>
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </button>

          <button onClick={handleChannelsClick} className="group px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">
            <span className="flex items-center gap-3">
              <List size={20} />
              {t.hero.cta2}
            </span>
          </button>
        </div>

        {/* Social Proof */}
        <div className="animate-in fade-in duration-1000 delay-500">
          <div className="flex flex-col md:flex-row items-center gap-6 p-4 rounded-2xl glass-panel">
            <div className="flex -space-x-4 rtl:space-x-reverse">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-10 h-10 rounded-full border-2 border-black flex items-center justify-center font-bold text-xs text-white ${i === 1 ? 'bg-purple-600' : i === 2 ? 'bg-blue-600' : i === 3 ? 'bg-green-600' : 'bg-brand-gold text-black'
                  }`}>
                  {i === 4 ? 'A' : 'U'}
                </div>
              ))}
            </div>
            <div className="text-left rtl:text-right">
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="#FFD700" className="text-brand-gold" />)}
              </div>
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wide">Trusted by <span className="text-white">10,000+</span> Users</p>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/10"></div>
            <div className="flex gap-8 text-center md:text-left">
              <div>
                <p className="text-xl font-black text-white">4K</p>
                <p className="text-[10px] text-gray-500 uppercase font-bold">Quality</p>
              </div>
              <div>
                <p className="text-xl font-black text-white">99%</p>
                <p className="text-[10px] text-gray-500 uppercase font-bold">Uptime</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
