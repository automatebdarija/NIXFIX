
import React, { useState } from 'react';
import { useLanguage } from '../i18n';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-black border-t border-zinc-900 scroll-mt-28 relative">
       {/* Background */}
       <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-white/10 bg-zinc-900/50 backdrop-blur-md px-4 py-1.5 rounded-full mb-6">
             <HelpCircle size={14} className="text-brand-gold" />
             <span className="text-xs font-bold text-gray-300 tracking-widest uppercase">Support Center</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black italic text-white uppercase mb-4 tracking-tight">
            {t.faq.title} <span className="text-gradient-gold">{t.faq.titleHighlight}</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {t.faq.items.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  openIndex === index 
                  ? 'border-brand-gold bg-zinc-900/80 shadow-[0_0_20px_rgba(255,215,0,0.1)]' 
                  : 'glass-card border-transparent hover:border-zinc-700'
              }`}
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left rtl:text-right focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-bold text-lg md:text-xl ${openIndex === index ? 'text-brand-gold' : 'text-white'}`}>
                  {faq.q}
                </span>
                <div className={`p-2 rounded-full transition-colors ${openIndex === index ? 'bg-brand-gold text-black' : 'bg-zinc-800 text-gray-400'}`}>
                    {openIndex === index ? <Minus size={16} strokeWidth={3} /> : <Plus size={16} strokeWidth={3} />}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-gray-300 leading-relaxed text-base font-medium">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
