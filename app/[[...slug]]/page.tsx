
'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { TRANSLATIONS, Language, LanguageContext } from '@/i18n';
import { PaymentProvider } from '@/components/PaymentContext';
import PaymentModal from '@/components/PaymentModal';

// Lazy load other heavy components
const Reviews = React.lazy(() => import('@/components/Reviews'));
const Steps = React.lazy(() => import('@/components/Steps'));
const Pricing = React.lazy(() => import('@/components/Pricing'));
const Features = React.lazy(() => import('@/components/Features'));
const ChannelsList = React.lazy(() => import('@/components/ChannelsList'));
const ChannelLogos = React.lazy(() => import('@/components/ChannelLogos'));
const FAQ = React.lazy(() => import('@/components/FAQ'));
const Footer = React.lazy(() => import('@/components/Footer'));
const PrivacyPolicy = React.lazy(() => import('@/components/PrivacyPolicy'));
const RefundPolicy = React.lazy(() => import('@/components/RefundPolicy'));
const TermsConditions = React.lazy(() => import('@/components/TermsConditions'));
const ContactUs = React.lazy(() => import('@/components/ContactUs'));
const Blog = React.lazy(() => import('@/components/Blog'));
const Article1 = React.lazy(() => import('@/components/Article1'));
const Article2 = React.lazy(() => import('@/components/Article2'));
const Article3 = React.lazy(() => import('@/components/Article3'));
const Article4 = React.lazy(() => import('@/components/Article4'));
const Tutorials = React.lazy(() => import('@/components/Tutorials'));

// Loading Spinner Component
const SectionLoader = () => (
  <div className="w-full h-96 bg-black flex flex-col items-center justify-center gap-4">
    <div className="w-12 h-12 border-4 border-zinc-800 border-t-brand-gold rounded-full animate-spin"></div>
    <p className="text-brand-gold font-bold text-sm animate-pulse uppercase tracking-widest">Loading...</p>
  </div>
);

// Full Screen Loader for Initial Load
const FullScreenLoader = () => (
  <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center gap-6">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-zinc-800 rounded-full"></div>
      <div className="absolute top-0 left-0 w-16 h-16 border-4 border-brand-gold border-t-transparent rounded-full animate-spin"></div>
    </div>
    <div className="text-white font-bold text-xl italic uppercase tracking-widest">Nixiptv</div>
  </div>
);

export default function Page() {
  const [path, setPath] = useState('');
  const [hash, setHash] = useState('');
  const [lang, setLangState] = useState<Language>('en');
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize on mount
  useEffect(() => {
    setPath(window.location.pathname);
    setHash(window.location.hash);

    const init = async () => {
      let detected: Language = 'en';
      const supportedLangs: Language[] = ['en', 'es', 'fr', 'de', 'ar', 'ru', 'pt'];

      // 1. Check URL path for language
      try {
        const pathSeg = window.location.pathname.split('/')[1] as Language;
        if (supportedLangs.includes(pathSeg)) {
          setLangState(pathSeg);
          setIsLoaded(true);
          return;
        }
      } catch (e) {
        console.warn("Path detection failed", e);
      }

      // 2. Check IP Location (with timeout fallback)
      try {
        // Set default immediately so we don't wait on API to show UI
        setLangState('en');

        // Timeout promise to prevent hanging
        const timeout = new Promise((_, reject) => setTimeout(() => reject("Timeout"), 2000));
        const fetchIp = fetch('https://ipapi.co/json/').then(res => res.json());

        const data: any = await Promise.race([fetchIp, timeout]).catch(() => null);

        if (data && data.country_code) {
          const country = data.country_code;
          if (['ES', 'MX', 'AR', 'CO', 'CL', 'PE', 'VE'].includes(country)) detected = 'es';
          else if (['FR', 'BE', 'MA', 'DZ', 'TN', 'SN'].includes(country)) detected = 'fr';
          else if (['DE', 'AT', 'CH'].includes(country)) detected = 'de';
          else if (['RU', 'UA', 'KZ', 'BY'].includes(country)) detected = 'ru';
          else if (['PT', 'BR', 'AO'].includes(country)) detected = 'pt';
          else if (['SA', 'AE', 'EG', 'QA', 'KW', 'OM', 'BH', 'IQ', 'JO'].includes(country)) detected = 'ar';

          if (detected !== 'en') {
            setLangState(detected);
          }
        }
      } catch (e) {
        // Silently fail to default
      } finally {
        setIsLoaded(true);
      }
    };

    init();
  }, []);

  // Helper to change URL without reloading
  const changeUrl = (newLang: Language) => {
    let newPath = '';
    const supportedLangs = ['en', 'fr', 'es', 'de', 'ar', 'ru', 'pt'];

    try {
      const currentPath = path;
      const segments = currentPath.split('/').filter(Boolean);

      if (segments.length === 0) {
        newPath = `/${newLang}`;
      } else if (supportedLangs.includes(segments[0])) {
        segments[0] = newLang;
        newPath = `/${segments.join('/')}`;
      } else {
        newPath = `/${newLang}${currentPath}`;
      }

      window.history.replaceState(null, '', `${newPath}${window.location.hash}`);
    } catch (e) {
      console.warn("URL update blocked by environment:", e);
    }

    if (newPath) {
      setPath(newPath);
    }
  };

  const setLang = (l: Language) => {
    setLangState(l);
    changeUrl(l);
  };

  const navigate = (href: string) => {
    if (href.startsWith('#')) {
      window.location.hash = href;
      setHash(href);
    } else {
      try {
        window.history.pushState({}, '', href);
      } catch (e) {
        console.warn("Navigation URL update blocked:", e);
      }

      const [newPath, newHash] = href.split('#');

      setPath(newPath);
      setHash(newHash ? `#${newHash}` : '');
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  // --- ROUTING LISTENERS ---
  useEffect(() => {
    const onPopState = () => {
      setPath(window.location.pathname);
      setHash(window.location.hash);
    };
    const onHashChange = () => {
      setHash(window.location.hash);
    };
    window.addEventListener('popstate', onPopState);
    window.addEventListener('hashchange', onHashChange);
    return () => {
      window.removeEventListener('popstate', onPopState);
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  // --- SEO MANAGER ---
  useEffect(() => {
    const t = TRANSLATIONS[lang];
    let title = t.meta.homeTitle;

    const segments = path.split('/').filter(Boolean);
    const slug = ['en', 'fr', 'es', 'de', 'ar', 'ru', 'pt'].includes(segments[0]) ? segments[1] : segments[0];

    if (slug === 'the-best-iptv-subscription-service-provider-for-amazon-firestick') {
      title = `Best IPTV for Firestick 2025: The Ultimate Easy Setup Guide | Nixiptv`;
    } else if (slug === 'best-iptv-service-in-2025-nixiptv-honest-review') {
      title = `Is Nixiptv the Best IPTV Service in 2025? Honest Review & Features`;
    } else if (slug === 'nixiptv-iptv-review') {
      title = `Nixiptv Review 2025: Why It's The #1 Ranked IPTV Provider`;
    } else if (slug === 'best-streaming-device-for-iptv') {
      title = 'Best Streaming Device for IPTV 2025 | Firestick vs Shield vs Apple TV | Comparison';
    } else if (slug === 'tutorials') {
      title = t.meta.tutorialsTitle;
    } else if (slug === 'channels') {
      title = t.meta.channelsTitle;
    }
    else if (hash === '#pricing') {
      title = t.meta.pricingTitle;
    } else if (hash === '#features') {
      title = `${t.nav.features} - Nixiptv Premium IPTV`;
    } else if (hash === '#faq') {
      title = `${t.nav.faq} - Nixiptv IPTV`;
    } else if (hash === '#blog' || hash.startsWith('#blog/')) {
      title = t.meta.blogTitle;
    } else if (hash === '#contact') {
      title = t.meta.contactTitle;
    } else if (hash === '#privacy-policy') {
      title = `${t.footer.links.privacy} - Nixiptv`;
    } else if (hash === '#refund-policy') {
      title = `${t.footer.links.refund} - Nixiptv`;
    } else if (hash === '#terms') {
      title = `${t.footer.links.terms} - Nixiptv`;
    } else {
      title = t.meta.homeTitle;
    }

    document.title = title;
  }, [path, hash, lang]);

  useEffect(() => {
    document.documentElement.lang = lang;
    if (lang === 'ar') {
      document.documentElement.dir = 'rtl';
      document.body.classList.add('rtl');
    } else {
      document.documentElement.dir = 'ltr';
      document.body.classList.remove('rtl');
    }
  }, [lang]);

  // Scroll Handling
  useEffect(() => {
    if (!isLoaded) return;

    const id = hash.replace('#', '');
    if (!id) return;

    if (['privacy-policy', 'refund-policy', 'terms', 'contact', 'blog'].includes(id)) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    const scrollInterval = setInterval(() => {
      const element = document.getElementById(id);
      if (element) {
        clearInterval(scrollInterval);
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);

    setTimeout(() => clearInterval(scrollInterval), 2000);
    return () => clearInterval(scrollInterval);
  }, [hash, isLoaded]);

  const renderContent = () => {
    const segments = path.split('/').filter(Boolean);
    const slug = ['en', 'fr', 'es', 'de', 'ar', 'ru', 'pt'].includes(segments[0]) ? segments[1] : segments[0];

    if (slug === 'the-best-iptv-subscription-service-provider-for-amazon-firestick') return <Suspense fallback={<SectionLoader />}><Article1 /></Suspense>;
    if (slug === 'best-iptv-service-in-2025-nixiptv-honest-review') return <Suspense fallback={<SectionLoader />}><Article2 /></Suspense>;
    if (slug === 'nixiptv-iptv-review') return <Suspense fallback={<SectionLoader />}><Article3 /></Suspense>;
    if (slug === 'best-streaming-device-for-iptv') return <Suspense fallback={<SectionLoader />}><Article4 /></Suspense>;
    if (slug === 'tutorials') return <Suspense fallback={<SectionLoader />}><Tutorials /></Suspense>;
    if (slug === 'channels') return <Suspense fallback={<SectionLoader />}><ChannelsList /></Suspense>;

    if (hash === '#privacy-policy') return <Suspense fallback={<SectionLoader />}><PrivacyPolicy /></Suspense>;
    if (hash === '#refund-policy') return <Suspense fallback={<SectionLoader />}><RefundPolicy /></Suspense>;
    if (hash === '#terms') return <Suspense fallback={<SectionLoader />}><TermsConditions /></Suspense>;
    if (hash === '#contact') return <Suspense fallback={<SectionLoader />}><ContactUs /></Suspense>;
    if (hash === '#blog') return <Suspense fallback={<SectionLoader />}><Blog /></Suspense>;

    // Legacy redirects
    if (hash === '#channels') { setTimeout(() => navigate('/channels'), 0); return <SectionLoader />; }
    if (hash === '#tutorials') { setTimeout(() => navigate('/tutorials'), 0); return <SectionLoader />; }
    if (hash === '#blog/firestick-iptv') { setTimeout(() => navigate('/the-best-iptv-subscription-service-provider-for-amazon-firestick'), 0); return <SectionLoader />; }
    if (hash === '#blog/best-iptv-2025-review') { setTimeout(() => navigate('/best-iptv-service-in-2025-nixiptv-honest-review'), 0); return <SectionLoader />; }

    return (
      <Suspense fallback={<SectionLoader />}>
        <Hero />
        <Reviews />
        <ChannelLogos />
        <Steps />
        <Pricing />
        <Features />
        <FAQ />
      </Suspense>
    );
  };

  if (!isLoaded) return <FullScreenLoader />;

  return (
    <LanguageContext.Provider value={{ lang, setLang, navigate, t: TRANSLATIONS[lang] }}>
      <PaymentProvider>
        <Navbar />
        <main className="flex-grow">
          {renderContent()}
        </main>
        <PaymentModal />
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </PaymentProvider>
    </LanguageContext.Provider>
  );
}
