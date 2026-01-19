
'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage, Language } from '../i18n';

const Navbar: React.FC = () => {
  const { t, lang, setLang, navigate } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentHash, setCurrentHash] = useState('');

  const NAV_ITEMS = [
    { name: t.nav.home, href: '#' },
    { name: t.nav.pricing, href: '#pricing' },
    { name: t.nav.features, href: '#features' },
    { name: t.nav.channels, href: '/channels' },
    { name: t.nav.tutorials, href: '/tutorials' },
    { name: t.nav.faq, href: '#faq' },
  ];

  const LANGS: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'pt', label: 'Português', flag: '🇵🇹' },
  ];

  useEffect(() => {
    setCurrentHash(window.location.hash || '#');
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleHash = () => setCurrentHash(window.location.hash || '#');

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHash);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (href.startsWith('#')) {
      if (window.location.pathname !== '/' && window.location.pathname !== `/${lang}`) {
        navigate('/' + href);
      } else {
        if (href === '#') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const id = href.replace('#', '');
          const element = document.getElementById(id);
          element?.scrollIntoView({ behavior: 'smooth' });
        }
        window.location.hash = href;
      }
    } else {
      navigate(href);
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}>
      <div className={`mx-4 md:mx-6 lg:container lg:mx-auto px-6 rounded-2xl transition-all duration-500 ${scrolled ? 'glass-panel py-3' : 'bg-transparent py-2'}`}>
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#" onClick={(e) => handleNavClick(e, '#')} className="flex items-center gap-2 group relative">
            <img
              src="/images/navbar-logo.png"
              alt="Nixiptv Logo"
              className="h-10 md:h-12 w-auto drop-shadow-[0_0_10px_rgba(255,215,0,0.3)] transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-black/20 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
            {NAV_ITEMS.map((link) => {
              const isActive = currentHash === link.href || (link.href === '#' && currentHash === '') || (window.location.pathname.includes(link.href) && link.href !== '#');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${isActive
                      ? 'bg-brand-gold text-black shadow-lg shadow-brand-gold/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors px-3 py-2 text-xs font-bold uppercase tracking-wider hover:bg-white/5 rounded-lg"
              >
                <Globe size={16} />
                <span>{lang}</span>
              </button>

              {langMenuOpen && (
                <div className="absolute top-full right-0 mt-2 glass-panel rounded-xl py-2 min-w-[160px] flex flex-col overflow-hidden animate-in fade-in slide-in-from-top-2">
                  {LANGS.map(l => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code); setLangMenuOpen(false); }}
                      className={`px-4 py-3 text-left hover:bg-white/10 flex items-center gap-3 transition-colors ${lang === l.code ? 'text-brand-gold' : 'text-gray-300'}`}
                    >
                      <span className="text-base">{l.flag}</span>
                      <span className="text-xs font-bold uppercase tracking-wider">{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-black px-6 py-3 rounded-full border border-zinc-700 hover:border-brand-gold transition-all duration-300 uppercase tracking-widest shadow-lg"
            >
              {t.nav.contact}
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-white hover:text-brand-gold transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-2xl z-40 transition-all duration-500 lg:hidden flex flex-col items-center justify-center ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="flex flex-col items-center gap-6 w-full px-6">
          {NAV_ITEMS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-2xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 hover:to-brand-gold transition-all"
            >
              {link.name}
            </a>
          ))}

          <div className="w-20 h-px bg-white/10 my-4"></div>

          <div className="grid grid-cols-4 gap-4">
            {LANGS.map(l => (
              <button key={l.code} onClick={() => { setLang(l.code); setIsOpen(false) }} className={`text-2xl p-2 rounded-lg border ${lang === l.code ? 'border-brand-gold bg-brand-gold/10' : 'border-transparent'}`}>
                {l.flag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
