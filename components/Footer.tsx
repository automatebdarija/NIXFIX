import React from 'react';
import { MessageCircle, Mail, CreditCard } from 'lucide-react';
import { useLanguage } from '../i18n';

const Footer: React.FC = () => {
  const { t, navigate } = useLanguage();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      // Old behavior for sections
      if (window.location.hash === href) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.location.hash = href;
      }
    } else {
      // New behavior for pages
      navigate(href);
    }
  };

  return (
    <footer className="bg-black text-white pt-12 pb-6 border-t border-zinc-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">

          <div>
            <h3 className="text-xl font-black italic text-white uppercase mb-6 border-l-4 rtl:border-l-0 rtl:border-r-4 border-brand-gold pl-4 rtl:pl-0 rtl:pr-4">
              {t.footer.aboutTitle} <span className="text-brand-gold">{t.footer.aboutHighlight}</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{t.footer.aboutDesc}</p>
            <div className="flex gap-4">
              <a href="https://wa.me/447735029723" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded bg-zinc-900 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-black transition-colors" aria-label="Chat on WhatsApp">
                <MessageCircle size={18} />
              </a>
              <a href="mailto:Contact@nixiptv.com" className="w-10 h-10 rounded bg-zinc-900 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-black transition-colors" aria-label="Send Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-black italic text-white uppercase mb-6 border-l-4 rtl:border-l-0 rtl:border-r-4 border-brand-gold pl-4 rtl:pl-0 rtl:pr-4">
              {t.footer.articlesTitle} <span className="text-brand-gold">{t.footer.articlesHighlight}</span>
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-4 group cursor-pointer">
                <div className="w-16 h-12 bg-zinc-800 rounded overflow-hidden shrink-0">
                  <img src="https://i.ibb.co/9Hv1z5VJ/The-Best-IPTV-Subscription-Service-Provider-for-Amazon-Firestick-scaled-1.webp" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" alt="Article" />
                </div>
                <div className="flex flex-col justify-center">
                  <a href="/the-best-iptv-subscription-service-provider-for-amazon-firestick" onClick={(e) => handleLinkClick(e, '/the-best-iptv-subscription-service-provider-for-amazon-firestick')} className="font-bold text-sm text-gray-300 group-hover:text-brand-gold transition-colors line-clamp-2">Best IPTV for Firestick</a>
                  <span className="text-xs text-gray-400 mt-1">May 15, 2025</span>
                </div>
              </li>
              <li className="flex gap-4 group cursor-pointer">
                <div className="w-16 h-12 bg-zinc-800 rounded overflow-hidden shrink-0">
                  <img src="https://i.ibb.co/NcrqxK8/Best-IPTV-Service-in-2025-4kiv-Honest-Review-scaled-1.webp" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" alt="Review" />
                </div>
                <div className="flex flex-col justify-center">
                  <a href="/best-iptv-service-in-2025-nixiptv-honest-review" onClick={(e) => handleLinkClick(e, '/best-iptv-service-in-2025-nixiptv-honest-review')} className="font-bold text-sm text-gray-300 group-hover:text-brand-gold transition-colors line-clamp-2">Best IPTV Review 2025</a>
                  <span className="text-xs text-gray-400 mt-1">May 10, 2025</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-black italic text-white uppercase mb-6 border-l-4 rtl:border-l-0 rtl:border-r-4 border-brand-gold pl-4 rtl:pl-0 rtl:pr-4">
              {t.footer.paymentTitle} <span className="text-brand-gold">{t.footer.paymentHighlight}</span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-900 p-4 rounded flex items-center justify-center border border-zinc-800 hover:border-brand-gold transition-colors"><span className="font-bold text-sm flex items-center gap-2"><CreditCard size={16} /> PayPal</span></div>
              <div className="bg-zinc-900 p-4 rounded flex items-center justify-center border border-zinc-800 hover:border-brand-gold transition-colors"><span className="font-bold text-sm flex items-center gap-2"><CreditCard size={16} /> Crypto</span></div>
              <div className="bg-zinc-900 p-4 rounded flex items-center justify-center border border-zinc-800 hover:border-brand-gold transition-colors"><span className="font-bold text-sm flex items-center gap-2"><CreditCard size={16} /> Bank</span></div>
              <div className="bg-zinc-900 p-4 rounded flex items-center justify-center border border-zinc-800 hover:border-brand-gold transition-colors"><span className="font-bold text-sm flex items-center gap-2"><CreditCard size={16} /> Card</span></div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" onClick={(e) => handleLinkClick(e, '#')} className="cursor-pointer hover:text-white transition-colors">{t.footer.links.home}</a>
            <a href="#blog" onClick={(e) => handleLinkClick(e, '#blog')} className="cursor-pointer hover:text-white transition-colors">{t.footer.links.blog}</a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="cursor-pointer hover:text-white transition-colors">{t.footer.links.contact}</a>
            <a href="#terms" onClick={(e) => handleLinkClick(e, '#terms')} className="cursor-pointer hover:text-white transition-colors">{t.footer.links.terms}</a>
            <a href="#privacy-policy" onClick={(e) => handleLinkClick(e, '#privacy-policy')} className="cursor-pointer hover:text-white transition-colors">{t.footer.links.privacy}</a>
            <a href="#refund-policy" onClick={(e) => handleLinkClick(e, '#refund-policy')} className="cursor-pointer hover:text-white transition-colors">{t.footer.links.refund}</a>
          </div>
          <div>&copy; 2025 Nixiptv - {t.footer.rights}</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;