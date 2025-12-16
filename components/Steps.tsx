
import React from 'react';
import { ShoppingCart, UserPlus, Tv, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n';

const Steps: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black italic text-white uppercase mb-6 tracking-tight">
            {t.steps.title} <span className="text-gradient-gold">{t.steps.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto font-medium text-lg">
            {t.steps.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent -translate-y-1/2 z-0"></div>

          {/* Step 1 */}
          <div className="glass-card p-10 rounded-3xl relative group hover:-translate-y-2 transition-transform duration-500">
            <div className="w-20 h-20 mx-auto bg-black border border-zinc-800 rounded-2xl flex items-center justify-center mb-8 relative z-10 shadow-2xl group-hover:border-brand-gold group-hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all">
              <ShoppingCart size={32} className="text-white group-hover:text-brand-gold transition-colors" />
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-black font-black text-sm">1</div>
            </div>
            <div className="text-center relative z-10">
              <h4 className="text-xl font-black text-white italic uppercase mb-3 group-hover:text-brand-gold transition-colors">{t.steps.s1_title}</h4>
              <p className="text-gray-400 font-medium leading-relaxed">{t.steps.s1_desc}</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="glass-card p-10 rounded-3xl relative group hover:-translate-y-2 transition-transform duration-500">
             <div className="w-20 h-20 mx-auto bg-black border border-zinc-800 rounded-2xl flex items-center justify-center mb-8 relative z-10 shadow-2xl group-hover:border-brand-gold group-hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all">
              <UserPlus size={32} className="text-white group-hover:text-brand-gold transition-colors" />
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-black font-black text-sm">2</div>
            </div>
            <div className="text-center relative z-10">
              <h4 className="text-xl font-black text-white italic uppercase mb-3 group-hover:text-brand-gold transition-colors">{t.steps.s2_title}</h4>
              <p className="text-gray-400 font-medium leading-relaxed">{t.steps.s2_desc}</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="glass-card p-10 rounded-3xl relative group hover:-translate-y-2 transition-transform duration-500">
             <div className="w-20 h-20 mx-auto bg-black border border-zinc-800 rounded-2xl flex items-center justify-center mb-8 relative z-10 shadow-2xl group-hover:border-brand-gold group-hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all">
              <Tv size={32} className="text-white group-hover:text-brand-gold transition-colors" />
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-black font-black text-sm">3</div>
            </div>
            <div className="text-center relative z-10">
              <h4 className="text-xl font-black text-white italic uppercase mb-3 group-hover:text-brand-gold transition-colors">{t.steps.s3_title}</h4>
              <p className="text-gray-400 font-medium leading-relaxed">{t.steps.s3_desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
