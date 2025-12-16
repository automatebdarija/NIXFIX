'use client';

import React, { createContext, useContext } from 'react';
import { Zap, Crown, Star, Wifi, Headset } from 'lucide-react';

export type Language = 'en' | 'fr' | 'es' | 'de' | 'ar' | 'ru' | 'pt';

export const TRANSLATIONS = {
  en: {
    meta: {
      homeTitle: 'Best IPTV Subscription 2025 | #1 Rated 4K Anti-Freeze Service - Nixiptv',
      pricingTitle: 'Premium IPTV Plans & Pricing | Starting $14.99/mo | Nixiptv',
      channelsTitle: 'Full IPTV Channel List 2025 | USA, UK, Canada & Global Sports',
      blogTitle: 'IPTV News, Tutorials & Cord-Cutting Tips | The Nixiptv Blog',
      contactTitle: '24/7 Premium Support | Contact Nixiptv Team',
      tutorialsTitle: 'Easy Setup Guides | Install IPTV on Firestick, Android & Smart TV'
    },
    nav: {
      home: 'Home',
      pricing: 'Pricing',
      features: 'Why Us',
      channels: 'Channels',
      tutorials: 'Setup',
      faq: 'FAQ',
      contact: 'SUPPORT',
    },
    hero: {
      tag: 'The Future of Streaming is Here',
      title1: 'UNLEASH',
      title2: 'LIMITLESS',
      title3: 'ENTERTAINMENT',
      desc: 'Experience the ultimate revolution in home entertainment. Stream over 35,000 live channels, blockbuster movies, and binge-worthy series in stunning 4K UHD—completely buffer-free.',
      cta1: 'START FREE TRIAL',
      cta2: 'VIEW CHANNELS',
      stats: {
        users: 'Happy Streamers',
        channels: 'Premium Channels',
        vod: 'Movies & Series',
      },
      ratings: '5-star reviews',
    },
    steps: {
      title: 'Get Started in',
      titleHighlight: 'Minutes',
      desc: 'Join thousands of cord-cutters today. Our instant setup process means you are just three simple steps away from your favorite content.',
      s1_title: 'CHOOSE YOUR PLAN',
      s1_desc: 'Select the subscription that fits your needs. Instant delivery via Email & WhatsApp upon purchase.',
      s2_title: 'INSTALL THE APP',
      s2_desc: 'Download your preferred IPTV player (IPTV Smarters, TiviMate, or XCIPTV) on any device.',
      s3_title: 'START STREAMING',
      s3_desc: 'Login with your premium credentials and unlock a world of entertainment instantly.',
    },
    pricing: {
      title: 'Premium',
      titleHighlight: 'Access',
      titleSuffix: 'Plans',
      desc: 'Unbeatable value for uncompromising quality. All plans include our full channel lineup, 4K VOD library, EPG, and 24/7 priority support.',
      standard: 'Starter',
      premium: 'Best Value',
      month: 'Month',
      months: 'Months',
      monthly: '/mo',
      yearly: '/yr',
      semi: '/6mo',
      popular: 'Most Popular',
      choose: 'Select Plan',
      device: 'Connection',
      devices: 'Connections',
      features: [
        'Anti-Freeze™ 9.8 Technology',
        'Instant Activation',
        '35,000+ Live Global Channels',
        '150,000+ VOD (Movies/Series)',
        '4K & 8K Ultra HD Quality',
        '99.9% Server Uptime',
        'Premium Sports & PPV Included',
        'Electronic Program Guide (EPG)',
        'Works on All Devices',
        '24/7 Premium Support'
      ]
    },
    features: {
      title: 'WHY CHOOSE',
      titleHighlight: 'NIXIPTV?',
      desc: 'We don’t just stream; we innovate. Our state-of-the-art infrastructure ensures you get the most reliable, high-quality viewing experience possible.',
      f1_title: 'MASSIVE LIBRARY',
      f1_desc: 'From live sports and breaking news to the latest Hollywood releases, our content library is updated daily.',
      f2_title: 'CRYSTAL CLEAR 4K',
      f2_desc: 'Powered by high-bandwidth servers to deliver true 4K and FHD quality with zero buffering or lag.',
      f3_title: 'ROCK-SOLID STABILITY',
      f3_desc: 'Our proprietary Anti-Freeze™ technology guarantees uninterrupted viewing, even during major live events.',
      device_title: 'STREAM ON',
      device_highlight: 'ANY SCREEN',
      device_desc: 'Seamless compatibility across Smart TVs, Firestick, Android, iOS, PC, and MAG devices.'
    },
    channels: {
      tag: 'Global Coverage',
      title: 'Explore Our',
      titleHighlight: 'Lineup',
      desc: 'A comprehensive collection of international networks. Filter by country to see what awaits you.',
      searchPlaceholder: 'Find your country (e.g., United Kingdom, Brazil)...',
      clear: 'Clear Search',
      results: 'Search Results',
      noResults: 'No channels found for',
      liveChannels: 'Live Channels',
      quality: 'Streaming Quality',
      popularNetworks: 'Top Networks',
      popularLocations: 'Trending Regions',
      showAll: 'View All Countries',
      showLess: 'Show Less',
      allCountries: 'Complete Country List'
    },
    tutorials: {
      title: 'Installation',
      titleHighlight: 'Center',
      desc: 'Setting up Nixiptv is effortless. Choose your device below for a step-by-step setup guide.',
      selectDevice: 'Choose Platform',
      devices: {
        firestick: {
          name: 'Amazon Firestick',
          steps: [
            'Navigate to Settings > My Fire TV > Developer Options.',
            'Enable "Apps from Unknown Sources" to allow third-party installations.',
            'Return to the home screen, search for "Downloader" and install it.',
            'Open Downloader and enter this URL: http://iptvsmarters.com/smarters.apk',
            'Download and install the application.',
            'Launch the app, select "Login with Xtream Codes API".',
            'Enter the premium credentials sent to your email.'
          ]
        },
        android: {
          name: 'Android TV / Box',
          steps: [
            'Open the Google Play Store on your device.',
            'Search for "IPTV Smarters Pro" or "TiviMate Companion".',
            'Install and launch the application.',
            'Select "Add Playlist" and choose "Xtream Codes Login".',
            'Input your Nixiptv username, password, and server URL.',
            'Click "Add User" to sync your playlist.'
          ]
        },
        smarttv: {
          name: 'Smart TV (Samsung/LG)',
          steps: [
            'Go to your TV\'s App Store.',
            'Search for "IBO Player", "SmartOne", or "Set IPTV" and install.',
            'Open the app to find your MAC Address and Device Key.',
            'Visit the app’s official activation website on your phone or PC.',
            'Enter your TV details and the M3U Playlist URL provided in your email.',
            'Restart the app on your TV to load the channel list.'
          ]
        },
        apple: {
          name: 'Apple (iOS/Apple TV)',
          steps: [
            'Open the App Store and search for "Smarters Player Lite".',
            'Download and open the application.',
            'Accept the terms and select "Login with Xtream Codes API".',
            'Enter your Nixiptv login credentials.',
            'Tap "Add User" to begin streaming.'
          ]
        },
        pc: {
          name: 'PC / MacBook',
          steps: [
            'Download "VLC Media Player" or "IPTV Smarters" for Windows/Mac.',
            'For VLC: Go to Media > Open Network Stream.',
            'Paste your M3U Playlist URL and click Play.',
            'For Smarters: Launch the app and login with your Xtream Codes API details.'
          ]
        },
        mag: {
          name: 'MAG Box',
          steps: [
            'Go to Settings > System Settings > Servers > Portals.',
            'Set "Portal 1 Name" to "Nixiptv".',
            'Enter the Portal URL provided in your activation email.',
            'Save settings and reboot your device.',
            'The portal will load automatically upon restart.'
          ]
        }
      }
    },
    faq: {
      title: 'Common',
      titleHighlight: 'Questions',
      items: [
        { q: "What distinguishes Nixiptv from other providers?", a: "Nixiptv utilizes premium, high-bandwidth servers with Anti-Freeze™ technology to ensure 99.9% uptime and true 4K quality, unlike budget providers that oversell unstable servers." },
        { q: "What internet speed is recommended?", a: "For a seamless 4K experience, we recommend a stable connection of at least 25 Mbps. For HD/FHD content, 15 Mbps is sufficient." },
        { q: "Is a VPN required?", a: "While Nixiptv works without a VPN, we support all major VPN services if you wish to bypass ISP throttling or enhance your privacy." },
        { q: "Can I test the service before buying?", a: "Absolutely. We offer a 24-hour trial so you can verify our channel list and stability firsthand before committing." },
        { q: "How quickly will I receive my login?", a: "Delivery is instant. You will receive your credentials via Email and WhatsApp immediately after payment confirmation." },
        { q: "Does the subscription support multiple screens?", a: "Our standard plans support one concurrent connection. For multi-room viewing, please contact support to upgrade your plan." },
        { q: "What if I experience buffering?", a: "Buffering is rare but usually caused by local network issues. We recommend using an Ethernet cable. If issues persist, our 24/7 support team is here to help." }
      ]
    },
    footer: {
      aboutTitle: 'ABOUT',
      aboutHighlight: 'NIXIPTV',
      aboutDesc: 'Nixiptv is the world’s leading IPTV subscription service, dedicated to providing a premium, cable-free entertainment experience with unmatched reliability and support.',
      articlesTitle: 'LATEST',
      articlesHighlight: 'INSIGHTS',
      paymentTitle: 'SECURE',
      paymentHighlight: 'PAYMENT',
      rights: 'All rights reserved.',
      links: {
        home: 'Home',
      },
      nav: { home: 'Inicio', pricing: 'Precios', features: 'Ventajas', channels: 'Canales', tutorials: 'Instalación', faq: 'FAQ', contact: 'SOPORTE' },
      hero: {
        tag: 'El Futuro del Streaming está Aquí', title1: 'DESATA', title2: 'EL ENTRETENIMIENTO', title3: 'ILIMITADO',
        desc: 'Vive la revolución del entretenimiento en casa. Más de 35,000 canales en vivo, películas y series en impresionante 4K UHD, sin cortes.',
        cta1: 'PRUEBA GRATIS', cta2: 'VER CANALES',
        stats: { users: 'Usuarios Felices', channels: 'Canales Premium', vod: 'Películas y Series' },
        ratings: 'reseñas 5 estrellas'
      },
      steps: {
        title: 'Empieza en', titleHighlight: 'Minutos', desc: 'Únete a miles de usuarios hoy. Nuestro proceso simple te da acceso a tu contenido favorito en tres pasos.',
        s1_title: 'ELIGE TU PLAN', s1_desc: 'Selecciona la suscripción ideal. Entrega instantánea por Email y WhatsApp.',
        s2_title: 'INSTALA LA APP', s2_desc: 'Descarga tu reproductor IPTV favorito (Smarters, TiviMate) en tu dispositivo.',
        s3_title: 'EMPIEZA A VER', s3_desc: 'Ingresa tus credenciales premium y desbloquea un mundo de diversión.'
      },
      pricing: {
        title: 'Planes', titleHighlight: 'Premium', titleSuffix: '',
        desc: 'Valor inigualable, calidad sin compromisos. Todos los planos incluyen todos los canales, VOD 4K, EPG y soporte prioritario.',
        standard: 'Inicial', premium: 'Mejor Valor', month: 'Mes', months: 'Meses',
        monthly: '/mes', yearly: '/año', semi: '/6meses', popular: 'Más Popular', choose: 'Elegir Plan',
        device: 'Conexión', devices: 'Conexiones',
        features: ['Tecnología Anti-Freeze™ 9.8', 'Activación Instantánea', '35,000+ Canales Globales', '150,000+ VOD (Cine/Series)', 'Calidad 4K y 8K Ultra HD', 'Servidores 99.9% Estables', 'Deportes Premium y PPV', 'Guía de Programación (EPG)', 'Funciona en Todo Dispositivo', 'Soporte Premium 24/7']
      },
      features: {
        title: '¿POR QUÉ', titleHighlight: 'NIXIPTV?', desc: 'No solo transmitimos, innovamos. Nuestra infraestructura asegura la experiencia más confiable y de alta calidad.',
        f1_title: 'LIBRERÍA MASIVA', f1_desc: 'Desde deportes en vivo hasta los últimos estrenos de Hollywood, actualizado a diario.',
        f2_title: '4K CRISTALINO', f2_desc: 'Servidores de alto ancho de banda para calidad 4K y FHD real sin lag.',
        f3_title: 'ESTABILIDAD TOTAL', f3_desc: 'Nuestra tecnología Anti-Freeze™ garantiza visualización sin interrupciones.',
        device_title: 'MIRA EN', device_highlight: 'CUALQUIER PANTALLA', device_desc: 'Compatible con Smart TV, Firestick, Android, iOS, PC y MAG.'
      },
      channels: {
        tag: 'Cobertura Global', title: 'Explora Nuestra', titleHighlight: 'Alineación', desc: 'Una colección completa de redes internacionales. Filtra por país para ver qué te espera.',
        searchPlaceholder: 'Busca tu país (ej: España, México)...', clear: 'Limpiar', results: 'Resultados', noResults: 'Sin resultados para',
        liveChannels: 'Canales en Vivo', quality: 'Calidad Stream', popularNetworks: 'Redes Top', popularLocations: 'Regiones Populares', showAll: 'Ver Todos', showLess: 'Ver Menos', allCountries: 'Lista Completa'
      },
      tutorials: {
        title: 'Centro de', titleHighlight: 'Instalación', desc: 'Configurar Nixiptv es fácil. Elige tu dispositivo para una guía paso a paso.', selectDevice: 'Elegir Plataforma',
        devices: {
          firestick: { name: 'Amazon Firestick', steps: ['Ajustes > Mi Fire TV > Opciones desarrollador.', 'Activa "Apps desconocidas".', 'Busca e instala "Downloader".', 'Ingresa URL: http://iptvsmarters.com/smarters.apk', 'Instala y abre la app.', 'Elige "Login with Xtream Codes API".', 'Ingresa tus credenciales del email.'] },
          android: { name: 'Android TV / Box', steps: ['Abre Google Play Store.', 'Busca "IPTV Smarters Pro" o "TiviMate".', 'Instala y abre la app.', 'Elige "Xtream Codes Login".', 'Ingresa usuario, contraseña y URL.', 'Haz click en "Add User".'] },
          smarttv: { name: 'Smart TV (LG/Samsung)', steps: ['Ve a la tienda de apps de tu TV.', 'Instala "IBO Player" o "Set IPTV".', 'Anota la dirección MAC.', 'Ve a la web de la app en PC/Móvil.', 'Ingresa los datos y la URL M3U recibida.', 'Reinicia la app en la TV.'] },
          apple: { name: 'Apple (iOS/Apple TV)', steps: ['App Store > "Smarters Player Lite".', 'Descarga y abre.', 'Selecciona "Login with Xtream Codes".', 'Ingresa tus credenciales.', 'Empieza a ver.'] },
          pc: { name: 'PC / Mac', steps: ['Instala VLC o IPTV Smarters.', 'VLC: Medio > Abrir red > Pegar URL M3U.', 'Smarters: Ingresa datos Xtream Codes.'] },
          mag: { name: 'Caja MAG', steps: ['Ajustes > Servidores > Portales.', 'Nombre: Nixiptv.', 'URL Portal: La URL del email.', 'Reinicia el dispositivo.'] }
        }
      },
      faq: {
        title: 'Preguntas', titleHighlight: 'Frecuentes',
        items: [
          { q: "¿Qué diferencia a Nixiptv?", a: "Usamos servidores premium con Anti-Freeze™ para asegurar 99.9% de actividad y calidad 4K real, sin sobreventa." },
          { q: "¿Qué velocidad necesito?", a: "Recomendamos 25 Mbps estables para 4K fluido. Para HD, 15 Mbps son suficientes." },
          { q: "¿Necesito VPN?", a: "No es obligatorio, pero compatible si deseas privacidad extra o evitar bloqueos de tu ISP." },
          { q: "¿Puedo probar antes de comprar?", a: "Sí, ofrececemos una prueba de 24h para verificar calidad y lista de canales." },
          { q: "¿Cuándo recibo mis datos?", a: "Es instantáneo. Recibes tus credenciales por Email y WhatsApp tras el pago." },
          { q: "¿Soporta múltiples pantallas?", a: "El plan estándar es para 1 conexión. Contacta soporte para añadir pantallas." },
          { q: "¿Qué hago si tengo buffering?", a: "Es raro, suele ser la red local. Usa cable Ethernet. Si persiste, nuestro soporte 24/7 te ayuda." }
        ]
      },
      footer: {
        aboutTitle: 'SOBRE', aboutHighlight: 'NIXIPTV', aboutDesc: 'Nixiptv es el servicio IPTV líder mundial, dedicado a ofrecer entretenimiento premium sin cables con fiabilidad inigualable.',
        articlesTitle: 'ÚLTIMOS', articlesHighlight: 'ARTÍCULOS', paymentTitle: 'PAGO', paymentHighlight: 'SEGURO', rights: 'Todos los derechos reservados.',
        links: { home: 'Inicio', blog: 'Blog', contact: 'Soporte', terms: 'Términos', privacy: 'Privacidad', refund: 'Reembolso' }
      },
      contact: { title: 'ESTAMOS', titleHighlight: 'AQUÍ', desc: '¿Necesitas ayuda? Nuestro equipo está disponible 24/7.', whatsapp: 'Chat WhatsApp', email: 'Email Soporte' },
      channelLogos: { title: 'CONTENIDO GLOBAL', titleHighlight: 'PREMIUM', desc: '"Accede a lo mejor del mundo: Deportes, Noticias, Cine..."', link: 'Ver Lista Completa' }
    },
    de: {
      meta: {
        homeTitle: 'Bestes IPTV Abo 2025 | 4K Anti-Freeze Testsieger - Nixiptv',
        pricingTitle: 'Premium IPTV Preise | Ab 14.99€/Monat | Nixiptv',
        channelsTitle: 'IPTV Senderliste 2025 | DACH, Sport & Weltweit',
        blogTitle: 'IPTV News, Anleitungen & Tipps | Nixiptv Blog',
        contactTitle: '24/7 Premium Support | Kontakt Nixiptv',
        tutorialsTitle: 'Einfache Einrichtung | IPTV auf Firestick & Smart TV'
      },
      nav: { home: 'Home', pricing: 'Preise', features: 'Vorteile', channels: 'Sender', tutorials: 'Einrichtung', faq: 'FAQ', contact: 'SUPPORT' },
      hero: {
        tag: 'Die Zukunft des Streamings', title1: 'GRENZENLOSE', title2: 'UNTERHALTUNG', title3: 'ERLEBEN',
        desc: 'Erleben Sie die Revolution im Home-Entertainment. Über 35.000 Live-Sender, Blockbuster und Serien in atemberaubendem 4K UHD – völlig pufferfrei.',
        cta1: 'KOSTENLOS TESTEN', cta2: 'SENDER ANSEHEN',
        stats: { users: 'Zufriedene Nutzer', channels: 'Premium Sender', vod: 'Filme & Serien' },
        ratings: '5-Sterne Bewertungen'
      },
      steps: {
        title: 'Starten in', titleHighlight: 'Minuten', desc: 'Schließen Sie sich Tausenden an. Unser einfacher Prozess bringt Sie in drei Schritten zu Ihren Lieblingsinhalten.',
        s1_title: 'PLAN WÄHLEN', s1_desc: 'Wählen Sie Ihr Abo. Sofortige Lieferung per E-Mail & WhatsApp.',
        s2_title: 'APP INSTALLIEREN', s2_desc: 'Laden Sie Ihren bevorzugten Player (Smarters, TiviMate) herunter.',
        s3_title: 'LOSLEGEN', s3_desc: 'Einloggen und sofort eine Welt voller Unterhaltung freischalten.'
      },
      pricing: {
        title: 'Premium', titleHighlight: 'Zugang', titleSuffix: 'Pläne',
        desc: 'Unschlagbarer Wert bei höchster Qualität. Alle Pläne inklusive aller Sender, 4K VOD und Prioritäts-Support.',
        standard: 'Starter', premium: 'Bester Wert', month: 'Monat', months: 'Monate',
        monthly: '/mtl', yearly: '/jahr', semi: '/6mon', popular: 'Beliebtest', choose: 'Plan wählen',
        device: 'Verbindung', devices: 'Verbindungen',
        features: ['Anti-Freeze™ 9.8 Technologie', 'Sofortige Aktivierung', '35.000+ Globale Sender', '150.000+ VOD (Filme/Serien)', '4K & 8K Ultra HD Qualität', '99.9% Server Uptime', 'Premium Sport & PPV', 'EPG (TV Guide)', 'Läuft auf allen Geräten', '24/7 Premium Support']
      },
      features: {
        title: 'WARUM', titleHighlight: 'NIXIPTV?', desc: 'Wir streamen nicht nur, wir innovieren. Unsere Infrastruktur garantiert das zuverlässigste Erlebnis.',
        f1_title: 'RIESIGE BIBLIOTHEK', f1_desc: 'Von Live-Sport bis zu den neuesten Hollywood-Filmen, täglich aktualisiert.',
        f2_title: 'KRISTALLKLARES 4K', f2_desc: 'High-Bandwidth Server für echtes 4K und FHD ohne Ruckeln.',
        f3_title: 'ABSOLUTE STABILITÄT', f3_desc: 'Anti-Freeze™ Technologie garantiert unterbrechungsfreies Sehen.',
        device_title: 'AUF JEDEM', device_highlight: 'BILDSCHIRM', device_desc: 'Kompatibel mit Smart TV, Firestick, Android, iOS, PC und MAG.'
      },
      channels: {
        tag: 'Weltweite Abdeckung', title: 'Entdecken Sie', titleHighlight: 'Unser Angebot', desc: 'Eine umfassende Sammlung internationaler Sender. Filtern Sie nach Land.',
        searchPlaceholder: 'Land suchen (z.B. Deutschland, Österreich)...', clear: 'Löschen', results: 'Ergebnisse', noResults: 'Nichts gefunden für',
        liveChannels: 'Live Sender', quality: 'Stream Qualität', popularNetworks: 'Top Sender', popularLocations: 'Beliebte Regionen', showAll: 'Alle Länder', showLess: 'Weniger', allCountries: 'Komplette Liste'
      },
      tutorials: {
        title: 'Installations', titleHighlight: 'Center', desc: 'Die Einrichtung ist mühelos. Wählen Sie Ihr Gerät für eine Anleitung.', selectDevice: 'Plattform wählen',
        devices: {
          firestick: { name: 'Amazon Firestick', steps: ['Einstellungen > Mein Fire TV > Entwickleroptionen.', '"Apps unbekannter Herkunft" aktivieren.', '"Downloader" App installieren.', 'URL eingeben: http://iptvsmarters.com/smarters.apk', 'Installieren & Öffnen.', '"Login with Xtream Codes API" wählen.', 'Zugangsdaten aus der E-Mail eingeben.'] },
          android: { name: 'Android TV / Box', steps: ['Google Play Store öffnen.', '"IPTV Smarters Pro" oder "TiviMate" suchen.', 'Installieren & Öffnen.', '"Xtream Codes Login" wählen.', 'Benutzer, Passwort & URL eingeben.', '"User hinzufügen" klicken.'] },
          smarttv: { name: 'Smart TV', steps: ['TV App Store öffnen.', '"IBO Player" oder "Set IPTV" installieren.', 'MAC-Adresse notieren.', 'Webseite der App am PC/Handy öffnen.', 'Daten & M3U URL eingeben.', 'App am TV neu starten.'] },
          apple: { name: 'Apple (iOS/TV)', steps: ['App Store > "Smarters Player Lite".', 'Laden & Öffnen.', '"Login with Xtream Codes" wählen.', 'Daten eingeben.', 'Loslegen.'] },
          pc: { name: 'PC / Mac', steps: ['VLC oder IPTV Smarters installieren.', 'VLC: Medien > Netzwerkstream > M3U URL.', 'Smarters: Xtream Codes Daten eingeben.'] },
          mag: { name: 'MAG Box', steps: ['Settings > Servers > Portals.', 'Portal Name: Nixiptv.', 'Portal URL: Aus der E-Mail.', 'Gerät neu starten.'] }
        }
      },
      faq: {
        title: 'Häufige', titleHighlight: 'Fragen',
        items: [
          { q: "Was unterscheidet Nixiptv?", a: "Premium-Server mit Anti-Freeze™ für 99.9% Uptime und echtes 4K, keine überbuchten Billig-Server." },
          { q: "Welche Internetgeschwindigkeit?", a: "Für 4K empfehlen wir stabile 25 Mbps. Für HD reichen 15 Mbps." },
          { q: "Brauche ich VPN?", a: "Nicht zwingend, aber unterstützt für mehr Privatsphäre." },
          { q: "Kann ich testen?", a: "Ja, mit unserem 24h-Test können Sie Qualität und Senderliste prüfen." },
          { q: "Wann bekomme ich den Zugang?", a: "Sofort per E-Mail und WhatsApp nach Zahlungseingang." },
          { q: "Mehrere Bildschirme?", a: "Standard ist 1 Verbindung. Kontaktieren Sie uns für Upgrades." },
          { q: "Was tun bei Pufferung?", a: "Meist lokales Netzwerkproblem. Nutzen Sie LAN-Kabel. Unser 24/7 Support hilft." }
        ]
      },
      footer: {
        aboutTitle: 'ÜBER', aboutHighlight: 'NIXIPTV', aboutDesc: 'Nixiptv ist der weltweit führende IPTV-Dienst für Premium-Unterhaltung ohne Kabel, mit unübertroffener Zuverlässigkeit.',
        articlesTitle: 'NEUESTE', articlesHighlight: 'INFOS', paymentTitle: 'SICHERE', paymentHighlight: 'ZAHLUNG', rights: 'Alle Rechte vorbehalten.',
        links: { home: 'Home', blog: 'Blog', contact: 'Support', terms: 'AGB', privacy: 'Datenschutz', refund: 'Rückerstattung' }
      },
      contact: { title: 'WIR SIND', titleHighlight: 'FÜR SIE DA', desc: 'Hilfe benötigt? Unser Team ist 24/7 erreichbar.', whatsapp: 'WhatsApp Chat', email: 'E-Mail Support' },
      channelLogos: { title: 'PREMIUM', titleHighlight: 'INHALTE', desc: '"Das Beste der Welt: Sport, News, Filme..."', link: 'Ganze Liste ansehen' }
    },
    ar: {
      meta: {
        homeTitle: 'أفضل اشتراك IPTV 2025 | خدمة 4K بدون تقطيع - Nixiptv',
        pricingTitle: 'أسعار باقات IPTV المميزة | تبدأ من 14.99$ | Nixiptv',
        channelsTitle: 'قائمة قنوات IPTV 2025 | قنوات عربية ورياضية عالمية',
        blogTitle: 'أخبار وشروحات IPTV | مدونة Nixiptv',
        contactTitle: 'دعم فني 24/7 | تواصل مع فريق Nixiptv',
        tutorialsTitle: 'شرح تثبيت IPTV | تشغيل على Firestick وشاشات سمارت'
      },
      nav: { home: 'الرئيسية', pricing: 'الأسعار', features: 'المميزات', channels: 'القنوات', tutorials: 'الشروحات', faq: 'الأسئلة', contact: 'الدعم' },
      hero: {
        tag: 'مستقبل البث الرقمي هنا', title1: 'أطلق العنان', title2: 'لترفيه', title3: 'بلا حدود',
        desc: 'عش ثورة الترفيه المنزلي. أكثر من 35,000 قناة مباشرة، وأحدث الأفلام والمسلسلات بجودة 4K UHD خيالية، وبدون أي تقطيع.',
        cta1: 'تجربة مجانية', cta2: 'تصفح القنوات',
        stats: { users: 'مشترك سعيد', channels: 'قناة بريميوم', vod: 'مكتبة أفلام' },
        ratings: 'تقييم 5 نجوم'
      },
      steps: {
        title: 'ابدأ في', titleHighlight: 'دقائق', desc: 'انضم للآلاف اليوم. عملية بسيطة تمنحك الوصول لمحتواك المفضل في 3 خطوات.',
        s1_title: 'اختر باقتك', s1_desc: 'اختر الاشتراك المناسب. تسليم فوري عبر البريد وواتساب.',
        s2_title: 'حمل التطبيق', s2_desc: 'حمل مشغل IPTV المفضل لديك (Smarters, TiviMate) على جهازك.',
        s3_title: 'ابدأ المشاهدة', s3_desc: 'سجل الدخول ببياناتك واستمتع بعالم من الترفيه فوراً.'
      },
      pricing: {
        title: 'باقات', titleHighlight: 'بريميوم', titleSuffix: '',
        desc: 'قيمة لا تضاهى وجودة لا تساوم. جميع الباقات تشمل كل القنوات ومكتبة 4K ودعم فني خاص.',
        standard: 'بداية', premium: 'الأفضل قيمة', month: 'شهر', months: 'أشهر',
        monthly: '/شهر', yearly: '/سنة', semi: '/6أشهر', popular: 'الأكثر طلباً', choose: 'اختر الباقة',
        device: 'جهاز', devices: 'أجهزة',
        features: ['تكنولوجيا Anti-Freeze™ 9.8', 'تفعيل فوري', '35,000+ قناة عالمية', '150,000+ VOD (أفلام/مسلسلات)', 'جودة 4K و 8K حقيقية', 'سيرفرات مستقرة 99.9%', 'رياضة و PPV شاملة', 'دليل برامج (EPG)', 'يعمل على كل الأجهزة', 'دعم فني 24/7']
      },
      features: {
        title: 'لماذا', titleHighlight: 'NIXIPTV؟', desc: 'نحن لا نبث فقط، نحن نبتكر. بنيتنا التحتية المتطورة تضمن لك تجربة مشاهدة هي الأكثر موثوقية.',
        f1_title: 'مكتبة ضخمة', f1_desc: 'من الرياضة المباشرة إلى أحدث أفلام هوليوود، تحديث يومي.',
        f2_title: 'جودة 4K نقية', f2_desc: 'سيرفرات عالية السرعة لجودة 4K و FHD حقيقية بدون تأخير.',
        f3_title: 'ثبات تام', f3_desc: 'تقنية Anti-Freeze™ تضمن مشاهدة متواصلة حتى في المباريات الكبرى.',
        device_title: 'شاهد على', device_highlight: 'أي شاشة', device_desc: 'توافق تام مع الشاشات الذكية، جوال، كمبيوتر وأجهزة الاستقبال.'
      },
      channels: {
        tag: 'تغطية عالمية', title: 'استكشف', titleHighlight: 'قائمتنا', desc: 'مجموعة شاملة من الشبكات العالمية. اختر الدولة لترى ما ينتظرك.',
        searchPlaceholder: 'ابحث عن دولتك (مثال: السعودية، مصر)...', clear: 'مسح', results: 'النتائج', noResults: 'لا نتائج لـ',
        liveChannels: 'قنوات مباشرة', quality: 'جودة البث', popularNetworks: 'أشهر الشبكات', popularLocations: 'أشهر المناطق', showAll: 'عرض كل الدول', showLess: 'عرض أقل', allCountries: 'القائمة الكاملة'
      },
      tutorials: {
        title: 'مركز', titleHighlight: 'التثبيت', desc: 'إعداد Nixiptv سهل للغاية. اختر جهازك لترى الدليل خطوة بخطوة.', selectDevice: 'اختر المنصة',
        devices: {
          firestick: { name: 'Amazon Firestick', steps: ['الإعدادات > My Fire TV > خيارات المطور.', 'فعل "تطبيقات غير معروفة".', 'حمل تطبيق "Downloader".', 'ادخل الرابط: http://iptvsmarters.com/smarters.apk', 'ثبت وافتح التطبيق.', 'اختر "Login with Xtream Codes API".', 'ادخل بياناتك المستلمة.'] },
          android: { name: 'Android TV / Box', steps: ['متجر جوجل بلاي.', 'ابحث عن "IPTV Smarters Pro" أو "TiviMate".', 'ثبت وافتح التطبيق.', 'اختر "Xtream Codes Login".', 'ادخل بيانات Nixiptv.', 'اضغط إضافة مستخدم.'] },
          smarttv: { name: 'Smart TV', steps: ['متجر تطبيقات التلفاز.', 'ثبت "IBO Player" أو "Set IPTV".', 'سجل عنوان MAC.', 'اذهب لموقع التطبيق من الجوال.', 'ادخل البيانات ورابط M3U.', 'أعد تشغيل التطبيق.'] },
          apple: { name: 'Apple (iOS/TV)', steps: ['App Store > "Smarters Player Lite".', 'حمل وافتح.', 'اختر "Login with Xtream Codes".', 'ادخل بياناتك.', 'ابدأ المشاهدة.'] },
          pc: { name: 'كمبيوتر', steps: ['ثبت VLC أو IPTV Smarters.', 'VLC: وسائط > دفق شبكة > الصق رابط M3U.', 'Smarters: ادخل بيانات Xtream.'] },
          mag: { name: 'جهاز MAG', steps: ['الإعدادات > السيرفرات > Portals.', 'اسم البوابة: Nixiptv.', 'رابط البوابة: من الايميل.', 'أعد التشغيل.'] }
        }
      },
      faq: {
        title: 'أسئلة', titleHighlight: 'شائعة',
        items: [
          { q: "ما الذي يميز Nixiptv؟", a: "نستخدم سيرفرات بريميوم مع تقنية Anti-Freeze™ لضمان ثبات 99.9% وجودة 4K حقيقية." },
          { q: "ما السرعة المطلوبة؟", a: "لجودة 4K ننصح بـ 25 ميجا ثابتة. للـ HD تكفي 15 ميجا." },
          { q: "هل أحتاج VPN؟", a: "ليس ضرورياً، لكننا ندعمه لخصوصية أكبر أو تجاوز حجب المزود." },
          { q: "هل يمكنني التجربة؟", a: "بالتأكيد. نقدم تجربة 24 ساعة لتتأكد من الجودة والقنوات." },
          { q: "متى أستلم الاشتراك؟", a: "فورياً. تصلك البيانات عبر البريد وواتساب بعد الدفع مباشرة." },
          { q: "هل يعمل على شاشتين؟", a: "الخطة القياسية لجهاز واحد. تواصل معنا للترقية لعدة أجهزة." },
          { q: "ماذا عن التقطيع؟", a: "نادر جداً، وغالباً بسبب الشبكة المحلية. استخدم كيبل. دعمنا موجود 24/7 للمساعدة." }
        ]
      },
      footer: {
        aboutTitle: 'عن', aboutHighlight: 'NIXIPTV', aboutDesc: 'Nixiptv هي الخدمة الرائدة عالمياً في IPTV، مكرسة لتقديم ترفيه بريميوم بلا كوابل مع موثوقية ودعم لا يضاهى.',
        articlesTitle: 'أحدث', articlesHighlight: 'المقالات', paymentTitle: 'دفع', paymentHighlight: 'آمن', rights: 'جميع الحقوق محفوظة.',
        links: { home: 'الرئيسية', blog: 'المدونة', contact: 'الدعم', terms: 'الشروط', privacy: 'الخصوصية', refund: 'الاسترجاع' }
      },
      contact: { title: 'نحن هنا', titleHighlight: 'للمساعدة', desc: 'تحتاج مساعدة؟ فريقنا متاح 24/7.', whatsapp: 'واتساب مباشر', email: 'ايميل الدعم' },
      channelLogos: { title: 'محتوى عالمي', titleHighlight: 'فاخر', desc: '"وصول لأفضل ترفيه في العالم: رياضة، أخبار، أفلام..."', link: 'عرض القائمة الكاملة' }
    },
    ru: {
      meta: {
        homeTitle: 'Лучшая IPTV Подписка 2025 | 4K Анти-Фриз Сервис - Nixiptv',
        pricingTitle: 'Цены на Premium IPTV | От $14.99/мес | Nixiptv',
        channelsTitle: 'Список IPTV Каналов 2025 | Спорт, Кино и Весь Мир',
        blogTitle: 'IPTV Новости и Инструкции | Блог Nixiptv',
        contactTitle: 'Поддержка 24/7 | Связаться с Nixiptv',
        tutorialsTitle: 'Гайд по Настройке | IPTV на Firestick и Smart TV'
      },
      nav: { home: 'Главная', pricing: 'Цены', features: 'Преимущества', channels: 'Каналы', tutorials: 'Настройка', faq: 'FAQ', contact: 'САППОРТ' },
      hero: {
        tag: 'Будущее ТВ уже здесь', title1: 'ОТКРОЙТЕ', title2: 'БЕЗГРАНИЧНЫЕ', title3: 'РАЗВЛЕЧЕНИЯ',
        desc: 'Революция домашнего досуга. Более 35,000 каналов, блокбастеры и сериалы в потрясающем 4K UHD — без буферизации.',
        cta1: 'БЕСПЛАТНЫЙ ТЕСТ', cta2: 'СМОТРЕТЬ КАНАЛЫ',
        stats: { users: 'Довольных клиентов', channels: 'Премиум Каналов', vod: 'Фильмов и Сериалов' },
        ratings: '5 звёзд отзывы'
      },
      steps: {
        title: 'Начните за', titleHighlight: 'Минуты', desc: 'Присоединяйтесь к тысячам пользователей. Три простых шага отделяют вас от любимого контента.',
        s1_title: 'ВЫБЕРИТЕ ПЛАН', s1_desc: 'Выберите подписку. Мгновенная доставка на Email и WhatsApp.',
        s2_title: 'УСТАНОВИТЕ ПРИЛОЖЕНИЕ', s2_desc: 'Скачайте плеер (IPTV Smarters, TiviMate) на ваше устройство.',
        s3_title: 'СМОТРИТЕ', s3_desc: 'Войдите с премиум данными и наслаждайтесь просмотром.'
      },
      pricing: {
        title: 'Премиум', titleHighlight: 'Планы', titleSuffix: '',
        desc: 'Лучшая цена за бескомпромиссное качество. Все планы включают все каналы, 4K VOD и приоритетную поддержку.',
        standard: 'Старт', premium: 'Лучший Выбор', month: 'Месяц', months: 'Месяцев',
        monthly: '/мес', yearly: '/год', semi: '/6мес', popular: 'Популярный', choose: 'Выбрать',
        device: 'Устройство', devices: 'Устройства',
        features: ['Технология Anti-Freeze™ 9.8', 'Мгновенная Активация', '35,000+ Мировых Каналов', '150,000+ VOD (Кино/Сериалы)', 'Качество 4K и 8K Ultra HD', '99.9% Аптайм Серверов', 'Спорт и PPV Включены', 'Телегид (EPG)', 'Работает на всем', '24/7 Премиум Саппорт']
      },
      features: {
        title: 'ПОЧЕМУ', titleHighlight: 'NIXIPTV?', desc: 'Мы не просто стримим, мы внедряем инновации. Наша инфраструктура гарантирует надежность.',
        f1_title: 'ОГРОМНАЯ БИБЛИОТЕКА', f1_desc: 'От прямого эфира спорта до новинок Голливуда, обновления ежедневно.',
        f2_title: 'КРИСТАЛЬНЫЙ 4K', f2_desc: 'Мощные серверы для настоящего 4K и FHD без лагов.',
        f3_title: 'СТАБИЛЬНОСТЬ', f3_desc: 'Технология Anti-Freeze™ гарантирует просмотр без прерываний.',
        device_title: 'СМОТРИТЕ НА', device_highlight: 'ЛЮБОМ ЭКРАНЕ', device_desc: 'Совместимость со Smart TV, Firestick, Android, iOS, PC и MAG.'
      },
      channels: {
        tag: 'Глобальное Покрытие', title: 'Изучите', titleHighlight: 'Наш Список', desc: 'Полная коллекция международных сетей. Фильтруйте по стране.',
        searchPlaceholder: 'Найти страну (напр. Россия, Германия)...', clear: 'Очистить', results: 'Результаты', noResults: 'Нет результатов:',
        liveChannels: 'Live Каналы', quality: 'Качество', popularNetworks: 'Топ Сети', popularLocations: 'Попул. Регионы', showAll: 'Все Страны', showLess: 'Скрыть', allCountries: 'Полный Список'
      },
      tutorials: {
        title: 'Центр', titleHighlight: 'Установки', desc: 'Настройка Nixiptv элементарна. Выберите устройство для инструкции.', selectDevice: 'Платформа',
        devices: {
          firestick: { name: 'Amazon Firestick', steps: ['Настройки > My Fire TV > Разработчикам.', 'Вкл "Неизвестные источники".', 'Установить "Downloader".', 'URL: http://iptvsmarters.com/smarters.apk', 'Установить и открыть.', 'Выбрать "Login with Xtream Codes API".', 'Ввести данные из письма.'] },
          android: { name: 'Android TV / Box', steps: ['Google Play Store.', 'Найти "IPTV Smarters Pro" или "TiviMate".', 'Установить и открыть.', 'Выбрать "Xtream Codes Login".', 'Ввести данные Nixiptv.', 'Войти.'] },
          smarttv: { name: 'Smart TV', steps: ['Магазин приложений ТВ.', 'Установить "IBO Player" или "Set IPTV".', 'Записать MAC.', 'Зайти на сайт приложения.', 'Ввести данные и M3U URL.', 'Перезапустить приложение.'] },
          apple: { name: 'Apple (iOS/TV)', steps: ['App Store > "Smarters Player Lite".', 'Скачать и открыть.', 'Выбрать "Login with Xtream Codes".', 'Ввести данные.', 'Смотреть.'] },
          pc: { name: 'ПК / Mac', steps: ['Установить VLC или IPTV Smarters.', 'VLC: Медиа > Открыть URL > Вставить M3U.', 'Smarters: Ввести данные Xtream.'] },
          mag: { name: 'MAG Приставка', steps: ['Settings > Servers > Portals.', 'Portal Name: Nixiptv.', 'Portal URL: Из письма.', 'Перезагрузить.'] }
        }
      },
      faq: {
        title: 'Частые', titleHighlight: 'Вопросы',
        items: [
          { q: "В чем отличие Nixiptv?", a: "Мы используем премиум серверы с Anti-Freeze™ для 99.9% аптайма и честного 4K." },
          { q: "Какая скорость нужна?", a: "Для 4K рекомендуем стабильные 25 Мбит/с. Для HD хватит 15 Мбит/с." },
          { q: "Нужен VPN?", a: "Не обязательно, но поддерживается для приватности." },
          { q: "Можно протестировать?", a: "Да, 24 часа теста бесплатно для проверки качества." },
          { q: "Как быстро придут данные?", a: "Мгновенно. На Email и WhatsApp сразу после оплаты." },
          { q: "Можно на нескольких ТВ?", a: "Стандарт - 1 устройство. Пишите в саппорт для апгрейда." },
          { q: "Что если зависает?", a: "Редкость, обычно проблема в Wi-Fi. Используйте кабель. Саппорт 24/7 поможет." }
        ]
      },
      footer: {
        aboutTitle: 'О', aboutHighlight: 'NIXIPTV', aboutDesc: 'Nixiptv — мировой лидер IPTV, предлагающий премиум развлечения без кабеля с непревзойденной надежностью.',
        articlesTitle: 'СВЕЖИЕ', articlesHighlight: 'СТАТЬИ', paymentTitle: 'БЕЗОПАСНАЯ', paymentHighlight: 'ОПЛАТА', rights: 'Все права защищены.',
        links: { home: 'Главная', blog: 'Блог', contact: 'Саппорт', terms: 'Условия', privacy: 'Приватность', refund: 'Возврат' }
      },
      contact: { title: 'МЫ', titleHighlight: 'РЯДОМ', desc: 'Нужна помощь? Наша команда доступна 24/7.', whatsapp: 'WhatsApp Чат', email: 'Email Саппорт' },
      channelLogos: { title: 'ПРЕМИУМ', titleHighlight: 'КОНТЕНТ', desc: '"Лучшее со всего мира: Спорт, Новости, Кино..."', link: 'Полный список' }
    },
    pt: {
      meta: {
        homeTitle: 'Melhor Assinatura IPTV 2025 | Serviço 4K Anti-Travamento - Nixiptv',
        pricingTitle: 'Preços Planos IPTV | A partir de R$75/mês | Nixiptv',
        channelsTitle: 'Lista de Canais IPTV 2025 | Brasil, Esportes e Global',
        blogTitle: 'Notícias e Tutoriais IPTV | Blog Nixiptv',
        contactTitle: 'Suporte Premium 24/7 | Contato Nixiptv',
        tutorialsTitle: 'Guia de Instalação | IPTV no Firestick e Smart TV'
      },
      nav: { home: 'Início', pricing: 'Preços', features: 'Vantagens', channels: 'Canais', tutorials: 'Instalação', faq: 'FAQ', contact: 'SUPORTE' },
      hero: {
        tag: 'O Futuro do Streaming Chegou', title1: 'LIBERE', title2: 'ENTRETENIMENTO', title3: 'SEM LIMITES',
        desc: 'Viva a revolução do entretenimento em casa. Mais de 35.000 canais ao vivo, filmes e séries em impressionante 4K UHD, sem travamentos.',
        cta1: 'TESTE GRÁTIS', cta2: 'VER CANAIS',
        stats: { users: 'Usuários Felizes', channels: 'Canais Premium', vod: 'Filmes e Séries' },
        ratings: 'avaliações 5 estrelas'
      },
      steps: {
        title: 'Comece em', titleHighlight: 'Minutos', desc: 'Junte-se a milhares hoje. Nosso processo simples dá acesso ao seu conteúdo favorito em três passos.',
        s1_title: 'ESCOLHA SEU PLANO', s1_desc: 'Selecione a assinatura ideal. Entrega instantânea por E-mail e WhatsApp.',
        s2_title: 'INSTALE O APP', s2_desc: 'Baixe seu player IPTV favorito (Smarters, TiviMate) no seu dispositivo.',
        s3_title: 'COMECE A ASSISTIR', s3_desc: 'Entre com suas credenciais premium e desbloqueie a diversão.'
      },
      pricing: {
        title: 'Planos', titleHighlight: 'Premium', titleSuffix: '',
        desc: 'Valor imbatível, qualidade sem compromisso. Todos os planos incluem todos os canais, VOD 4K e suporte prioritário.',
        standard: 'Inicial', premium: 'Melhor Valor', month: 'Mês', months: 'Meses',
        monthly: '/mês', yearly: '/ano', semi: '/6meses', popular: 'Mais Popular', choose: 'Escolher Plano',
        device: 'Conexão', devices: 'Conexões',
        features: ['Tecnologia Anti-Freeze™ 9.8', 'Ativação Imediata', '35.000+ Canais Globais', '150.000+ VOD (Filmes/Séries)', 'Qualidade 4K e 8K Ultra HD', 'Servidores 99.9% Estáveis', 'Esportes Premium e PPV', 'Guia de Programação (EPG)', 'Funciona em Todo Dispositivo', 'Suporte Premium 24/7']
      },
      features: {
        title: 'POR QUE', titleHighlight: 'NIXIPTV?', desc: 'Não apenas transmitimos, inovamos. Nossa infraestrutura garante a experiência mais confiável.',
        f1_title: 'BIBLIOTECA MASSIVA', f1_desc: 'De esportes ao vivo aos últimos lançamentos de Hollywood, atualizado diariamente.',
        f2_title: '4K CRISTALINO', f2_desc: 'Servidores de alta banda para qualidade 4K e FHD real sem lag.',
        f3_title: 'ESTABILIDADE TOTAL', f3_desc: 'Nossa tecnologia Anti-Freeze™ garante visualização ininterrupta.',
        device_title: 'ASSISTA EM', device_highlight: 'QUALQUER TELA', device_desc: 'Compatível com Smart TV, Firestick, Android, iOS, PC e MAG.'
      },
      channels: {
        tag: 'Cobertura Global', title: 'Explore Nossa', titleHighlight: 'Grade', desc: 'Uma coleção completa de redes internacionais. Filtre por país para ver o que te espera.',
        searchPlaceholder: 'Busque seu país (ex: Brasil, Portugal)...', clear: 'Limpar', results: 'Resultados', noResults: 'Sem resultados para',
        liveChannels: 'Canais Ao Vivo', quality: 'Qualidade Stream', popularNetworks: 'Redes Top', popularLocations: 'Regiões Populares', showAll: 'Ver Tudo', showLess: 'Ver Menos', allCountries: 'Lista Completa'
      },
      tutorials: {
        title: 'Centro de', titleHighlight: 'Instalação', desc: 'Configurar Nixiptv é fácil. Escolha seu dispositivo para um guia passo a passo.', selectDevice: 'Escolher Plataforma',
        devices: {
          firestick: { name: 'Amazon Firestick', steps: ['Configurações > Meu Fire TV > Opções de desenvolvedor.', 'Ativar "Apps desconhecidos".', 'Baixar e instalar "Downloader".', 'Inserir URL: http://iptvsmarters.com/smarters.apk', 'Instalar e abrir.', 'Escolher "Login with Xtream Codes API".', 'Inserir credenciais do e-mail.'] },
          android: { name: 'Android TV / Box', steps: ['Abrir Google Play Store.', 'Buscar "IPTV Smarters Pro" ou "TiviMate".', 'Instalar e abrir.', 'Escolher "Xtream Codes Login".', 'Inserir dados Nixiptv.', 'Clicar em "Add User".'] },
          smarttv: { name: 'Smart TV', steps: ['Loja de apps da TV.', 'Instalar "IBO Player" ou "Set IPTV".', 'Anotar endereço MAC.', 'Ir ao site do app no PC/Celular.', 'Inserir dados e URL M3U.', 'Reiniciar app na TV.'] },
          apple: { name: 'Apple (iOS/TV)', steps: ['App Store > "Smarters Player Lite".', 'Baixar e abrir.', 'Selecionar "Login with Xtream Codes".', 'Inserir credenciais.', 'Assistir.'] },
          pc: { name: 'PC / Mac', steps: ['Instalar VLC ou IPTV Smarters.', 'VLC: Mídia > Abrir Rede > Colar URL M3U.', 'Smarters: Inserir dados Xtream.'] },
          mag: { name: 'Box MAG', steps: ['Settings > Servers > Portals.', 'Nome: Nixiptv.', 'URL Portal: Do e-mail.', 'Reiniciar.'] }
        }
      },
      faq: {
        title: 'Perguntas', titleHighlight: 'Frequentes',
        items: [
          { q: "O que diferencia a Nixiptv?", a: "Usamos servidores premium com Anti-Freeze™ para garantir 99.9% de uptime e 4K real, sem sobrecarga." },
          { q: "Qual velocidade preciso?", a: "Recomendamos 25 Mbps estáveis para 4K fluido. Para HD, 15 Mbps bastam." },
          { q: "Preciso de VPN?", a: "Não é obrigatório, mas compatível se desejar privacidade extra." },
          { q: "Posso testar antes?", a: "Sim, oferecemos teste de 24h para verificar qualidade e canais." },
          { q: "Quando recebo os dados?", a: "É instantâneo. Recebe por E-mail e WhatsApp após pagamento." },
          { q: "Suporta múltiplas telas?", a: "Plano padrão é 1 conexão. Contate suporte para adicionar telas." },
          { q: "O que fazer se travar?", a: "Raro, geralmente é rede local. Use cabo Ethernet. Se persistir, nosso suporte 24/7 ajuda." }
        ]
      },
      footer: {
        aboutTitle: 'SOBRE', aboutHighlight: 'NIXIPTV', aboutDesc: 'Nixiptv é o serviço IPTV líder mundial, dedicado a oferecer entretenimento premium sem cabos com confiabilidade inigualável.',
        articlesTitle: 'ÚLTIMOS', articlesHighlight: 'ARTIGOS', paymentTitle: 'PAGAMENTO', paymentHighlight: 'SEGURO', rights: 'Todos os direitos reservados.',
        links: { home: 'Início', blog: 'Blog', contact: 'Suporte', terms: 'Termos', privacy: 'Privacidade', refund: 'Reembolso' }
      },
      contact: { title: 'ESTAMOS', titleHighlight: 'AQUI', desc: 'Precisa de ajuda? Nossa equipe está disponível 24/7.', whatsapp: 'Chat WhatsApp', email: 'E-mail Suporte' },
      channelLogos: { title: 'CONTEÚDO GLOBAL', titleHighlight: 'PREMIUM', desc: '"Acesse o melhor do mundo: Esportes, Notícias, Filmes..."', link: 'Ver Lista Completa' }
    }
  }
};

export const PRICING_MATRIX: Record<number, Record<number, string>> = {
  1: { 1: '14.99', 6: '39.99', 12: '69.99' },
  2: { 1: '22.99', 6: '54.99', 12: '94.99' },
  3: { 1: '34.99', 6: '81.99', 12: '125.99' },
  4: { 1: '44.99', 6: '119.99', 12: '169.99' }
};

export const PLANS_STRUCT = [
  {
    icon: 'Zap',
    duration: 1, // 1 Month
    popular: false,
  },
  {
    icon: 'Crown',
    duration: 12, // 12 Months
    popular: true,
  },
  {
    icon: 'Star',
    duration: 6, // 6 Months
    popular: false,
  }
];

export const FEATURES_STRUCT = [
  { icon: <Zap className="w-10 h-10 text-brand-gold" /> },
  { icon: <Wifi className="w-10 h-10 text-brand-gold" /> },
  { icon: <Headset className="w-10 h-10 text-brand-gold" /> }
];

export const getPlans = (lang: Language) => {
  const t = TRANSLATIONS[lang].pricing;
  return PLANS_STRUCT.map((plan, i) => {
    let name = '';
    let period = '';
    if (plan.duration === 1) { name = `1 ${t.month}`; period = t.monthly; }
    else if (plan.duration === 12) { name = `12 ${t.months}`; period = t.yearly; }
    else { name = `6 ${t.months}`; period = t.semi; }

    return { ...plan, name, period, features: t.features };
  });
};

// --- CONTEXT ---
interface LangContextType {
  lang: Language;
  setLang: (l: Language) => void;
  navigate: (url: string) => void;
  t: typeof TRANSLATIONS['en'];
}
export const LanguageContext = createContext<LangContextType>({
  lang: 'en',
  setLang: () => { },
  navigate: () => { },
  t: TRANSLATIONS['en']
});
export const useLanguage = () => useContext(LanguageContext);