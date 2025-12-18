import React from 'react';
import { useLanguage } from '../i18n';

const ChannelLogos: React.FC = () => {
  const { t, navigate } = useLanguage();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/channels');
  };

  return (
    <section className="py-12 bg-black border-b border-zinc-900 relative z-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-black italic text-white uppercase mb-4 tracking-tight drop-shadow-xl">
          {t.channelLogos.title} <span className="text-brand-gold">{t.channelLogos.titleHighlight}</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 italic mb-10 font-bold tracking-wide">
          {t.channelLogos.desc}
        </p>

        <div className="max-w-6xl mx-auto flex justify-center items-center px-4">
          <img
            src="/images/channels-logos.webp"
            alt="Premium Channels"
            className="w-full max-w-5xl h-auto object-contain transition-transform duration-500 hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="mt-10">
          <a
            href="/channels"
            onClick={handleLinkClick}
            className="text-sm text-brand-gold font-black hover:text-white uppercase tracking-widest border-b-2 border-brand-gold pb-1 hover:border-white transition-colors"
          >
            {t.channelLogos.link}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ChannelLogos;