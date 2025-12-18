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
    nav: { home: 'Home', pricing: 'Pricing', features: 'Why Us', channels: 'Channels', tutorials: 'Setup', faq: 'FAQ', contact: 'SUPPORT' },
    hero: {
      tag: 'The Future of Streaming is Here', title1: 'UNLEASH', title2: 'LIMITLESS', title3: 'ENTERTAINMENT',
      desc: 'Experience the ultimate revolution in home entertainment. Stream over 35,000 live channels, blockbuster movies, and binge-worthy series in stunning 4K UHD—completely buffer-free.',
      cta1: 'GET STARTED', cta2: 'VIEW CHANNELS',
      stats: { users: 'Happy Streamers', channels: 'Premium Channels', vod: 'Movies & Series' },
      ratings: '5-star reviews'
    },
    steps: {
      title: 'Get Started in', titleHighlight: 'Minutes', desc: 'Join thousands of cord-cutters today. Our instant setup process means you are just three simple steps away from your favorite content.',
      s1_title: 'CHOOSE YOUR PLAN', s1_desc: 'Select the subscription that fits your needs. Instant delivery via Email & WhatsApp upon purchase.',
      s2_title: 'INSTALL THE APP', s2_desc: 'Download your preferred IPTV player (IPTV Smarters, TiviMate, or XCIPTV) on any device.',
      s3_title: 'START STREAMING', s3_desc: 'Login with your premium credentials and unlock a world of entertainment instantly.'
    },
    pricing: {
      title: 'Premium', titleHighlight: 'Access', titleSuffix: 'Plans',
      desc: 'Unbeatable value for uncompromising quality. All plans include our full channel lineup, 4K VOD library, EPG, and 24/7 priority support.',
      standard: 'Starter', premium: 'Best Value', month: 'Month', months: 'Months',
      monthly: '/mo', yearly: '/yr', semi: '/6mo', popular: 'Most Popular', choose: 'Select Plan',
      device: 'Connection', devices: 'Connections',
      features: ['Anti-Freeze™ 9.8 Technology', 'Instant Activation', '35,000+ Live Global Channels', '150,000+ VOD (Movies/Series)', '4K & 8K Ultra HD Quality', '99.9% Server Uptime', 'Premium Sports & PPV Included', 'Electronic Program Guide (EPG)', 'Works on All Devices', '24/7 Premium Support']
    },
    features: {
      title: 'WHY CHOOSE', titleHighlight: 'NIXIPTV?', desc: 'We don’t just stream; we innovate. Our state-of-the-art infrastructure ensures you get the most reliable, high-quality viewing experience possible.',
      f1_title: 'MASSIVE LIBRARY', f1_desc: 'From live sports and breaking news to the latest Hollywood releases, our content library is updated daily.',
      f2_title: 'CRYSTAL CLEAR 4K', f2_desc: 'Powered by high-bandwidth servers to deliver true 4K and FHD quality with zero buffering or lag.',
      f3_title: 'ROCK-SOLID STABILITY', f3_desc: 'Our proprietary Anti-Freeze™ technology guarantees uninterrupted viewing, even during major live events.',
      device_title: 'STREAM ON', device_highlight: 'ANY SCREEN', device_desc: 'Seamless compatibility across Smart TVs, Firestick, Android, iOS, PC, and MAG devices.'
    },
    channels: {
      tag: 'Global Coverage', title: 'Explore Our', titleHighlight: 'Lineup', desc: 'A comprehensive collection of international networks. Filter by country to see what awaits you.',
      searchPlaceholder: 'Find your country (e.g., United Kingdom, Brazil)...', clear: 'Clear Search', results: 'Search Results', noResults: 'No channels found for',
      liveChannels: 'Live Channels', quality: 'Streaming Quality', popularNetworks: 'Top Networks', popularLocations: 'Trending Regions', showAll: 'View All Countries', showLess: 'Show Less', allCountries: 'Complete Country List'
    },
    tutorials: {
      title: 'Installation', titleHighlight: 'Center', desc: 'Setting up Nixiptv is effortless. Choose your device below for a step-by-step setup guide.', selectDevice: 'Choose Platform',
      devices: {
        firestick: { name: 'Amazon Firestick', steps: ['Navigate to Settings > My Fire TV > Developer Options.', 'Enable "Apps from Unknown Sources".', 'Install "Downloader" app.', 'Enter URL: http://iptvsmarters.com/smarters.apk', 'Install app.', 'Login with Xtream Codes API.', 'Enter credentials from email.'] },
        android: { name: 'Android TV / Box', steps: ['Open Google Play Store.', 'Search "IPTV Smarters Pro" or "TiviMate".', 'Install app.', 'Select Xtream Codes Login.', 'Enter Nixiptv credentials.', 'Add User.'] },
        smarttv: { name: 'Smart TV (Samsung/LG)', steps: ['Go to App Store.', 'Install "IBO Player" or "Set IPTV".', 'Note MAC Address.', 'Go to app website on PC.', 'Enter MAC and M3U URL.', 'Restart TV app.'] },
        apple: { name: 'Apple (iOS/Apple TV)', steps: ['App Store > "Smarters Player Lite".', 'Install.', 'Login with Xtream Codes API.', 'Enter credentials.', 'Watch.'] },
        pc: { name: 'PC / MacBook', steps: ['Install VLC or IPTV Smarters.', 'VLC: Media > Open Network Stream > Paste M3U.', 'Smarters: Login with Xtream Codes.'] },
        mag: { name: 'MAG Box', steps: ['Settings > System > Servers > Portals.', 'Portal 1: Nixiptv.', 'URL: Provided in email.', 'Restart portal.'] }
      }
    },
    faq: {
      title: 'Common', titleHighlight: 'Questions',
      items: [
        { q: "What distinguishes Nixiptv?", a: "Premium servers, Anti-Freeze tech, 99.9% uptime, true 4K." },
        { q: "Recommended speed?", a: "25 Mbps for 4K. 15 Mbps for HD." },
        { q: "VPN required?", a: "Not required, but supported." },

        { q: "Delivery time?", a: "Instant via Email & WhatsApp." },
        { q: "Multiple screens?", a: "Standard is 1 connection. Contact support for more." },
        { q: "Buffering?", a: "Rare. Check internet or use Ethernet." }
      ]
    },
    footer: {
      aboutTitle: 'ABOUT', aboutHighlight: 'NIXIPTV', aboutDesc: 'World’s leading IPTV service. Premium entertainment, no buffering.',
      articlesTitle: 'LATEST', articlesHighlight: 'INSIGHTS', paymentTitle: 'SECURE', paymentHighlight: 'PAYMENT', rights: 'All rights reserved.',
      links: { home: 'Home', blog: 'Blog', contact: 'Contact', terms: 'Terms', privacy: 'Privacy', refund: 'Refund' }
    },
    contact: { title: 'WE ARE HERE', titleHighlight: 'TO HELP', desc: 'Need help? Available 24/7.', whatsapp: 'Live Chat', email: 'Email Support' },
    channelLogos: { title: 'PREMIUM GLOBAL', titleHighlight: 'CONTENT', desc: 'World’s best entertainment.', link: 'View Channel List' }
  },
  fr: {
    meta: {
      homeTitle: 'Meilleur Abonnement IPTV 2025 | Service 4K Anti-Coupure - Nixiptv',
      pricingTitle: 'Tarifs IPTV Premium | À partir de 14.99€/mois | Nixiptv',
      channelsTitle: 'Liste des Chaînes IPTV | France, Belgique, Canada & Sport Mondial',
      blogTitle: 'Actualités & Tutoriels IPTV | Le Blog Expert Nixiptv',
      contactTitle: 'Support Client 24/7 | Contactez l\'Équipe Nixiptv',
      tutorialsTitle: 'Guides d\'Installation Faciles | IPTV sur Firestick, Android & Smart TV'
    },
    nav: { home: 'Accueil', pricing: 'Tarifs', features: 'Avantages', channels: 'Chaînes', tutorials: 'Installation', faq: 'FAQ', contact: 'SUPPORT' },
    hero: {
      tag: 'Le Futur du Streaming est Ici', title1: 'DÉBLOQUEZ', title2: 'LE DIVERTISSEMENT', title3: 'SANS LIMITES',
      desc: 'Vivez la révolution du divertissement à domicile. Plus de 35 000 chaînes en direct, films et séries en 4K UHD époustouflante, sans aucune coupure.',
      cta1: 'COMMENCER', cta2: 'VOIR LES CHAÎNES',
      stats: { users: 'Clients Satisfaits', channels: 'Chaînes Premium', vod: 'Films & Séries' },
      ratings: 'avis 5 étoiles'
    },
    steps: {
      title: 'Commencez en', titleHighlight: 'Minutes', desc: 'Rejoignez des milliers d\'utilisateurs. Notre processus simple vous permet d\'accéder à vos contenus préférés en trois étapes.',
      s1_title: 'CHOISISSEZ VOTRE PLAN', s1_desc: 'Sélectionnez l\'abonnement adapté. Livraison instantanée par Email & WhatsApp.',
      s2_title: 'INSTALLEZ L\'APPLI', s2_desc: 'Téléchargez votre lecteur IPTV favori (IPTV Smarters, TiviMate) sur votre appareil.',
      s3_title: 'LANCEZ LE STREAM', s3_desc: 'Connectez-vous avec vos identifiants premium et profitez instantanément.'
    },
    pricing: {
      title: 'Nos Plans', titleHighlight: 'Premium', titleSuffix: '',
      desc: 'Une valeur imbattable pour une qualité sans compromis. Tous les plans incluent toutes les chaînes, la VOD 4K et le support prioritaire.',
      standard: 'Découverte', premium: 'Meilleur Choix', month: 'Mois', months: 'Mois',
      monthly: '/mois', yearly: '/an', semi: '/6mois', popular: 'Plus Populaire', choose: 'Choisir ce plan',
      device: 'Connexion', devices: 'Connexions',
      features: ['Technologie Anti-Freeze™ 9.8', 'Activation Instantanée', '35,000+ Chaînes Mondiales', '150,000+ VOD (Films/Séries)', 'Qualité 4K & 8K Ultra HD', 'Serveurs Stables à 99.9%', 'Sports Premium & PPV Inclus', 'Guide des Programmes (EPG)', 'Compatible Tous Appareils', 'Support Premium 24/7']
    },
    features: {
      title: 'POURQUOI', titleHighlight: 'NIXIPTV ?', desc: 'Nous ne faisons pas que diffuser, nous innovons. Notre infrastructure de pointe garantit l\'expérience la plus fiable.',
      f1_title: 'BIBLIOTHÈQUE MASSIVE', f1_desc: 'Du sport en direct aux dernières sorties cinéma, notre contenu est mis à jour quotidiennement.',
      f2_title: '4K CRISTALLINE', f2_desc: 'Serveurs haut débit pour une véritable qualité 4K et FHD sans latence.',
      f3_title: 'STABILITÉ TOTALE', f3_desc: 'Notre technologie Anti-Freeze™ garantit un visionnage ininterrompu, même lors des grands événements.',
      device_title: 'REGARDEZ SUR', device_highlight: 'TOUT ÉCRAN', device_desc: 'Compatibilité totale avec Smart TV, Firestick, Android, iOS, PC et MAG.'
    },
    channels: {
      tag: 'Couverture Mondiale', title: 'Explorez Notre', titleHighlight: 'Catalogue', desc: 'Une collection complète de réseaux internationaux. Filtrez par pays pour découvrir ce qui vous attend.',
      searchPlaceholder: 'Trouvez votre pays (ex: France, Belgique)...', clear: 'Effacer', results: 'Résultats', noResults: 'Aucun résultat pour',
      liveChannels: 'Chaînes Live', quality: 'Qualité Stream', popularNetworks: 'Réseaux Top', popularLocations: 'Régions Populaires', showAll: 'Voir Tous Les Pays', showLess: 'Voir Moins', allCountries: 'Liste Complète'
    },
    tutorials: {
      title: 'Centre', titleHighlight: 'd\'Installation', desc: 'Configurer Nixiptv est un jeu d\'enfant. Choisissez votre appareil pour un guide étape par étape.', selectDevice: 'Choisir Plateforme',
      devices: {
        firestick: { name: 'Amazon Firestick', steps: ['Menu > Paramètres > Ma Fire TV > Options développeurs.', 'Activez "Apps de sources inconnues".', 'Cherchez et installez l\'app "Downloader".', 'Entrez l\'URL : http://iptvsmarters.com/smarters.apk', 'Installez et ouvrez l\'application.', 'Choisissez "Login with Xtream Codes API".', 'Entrez vos identifiants reçus par email.'] },
        android: { name: 'Android TV / Box', steps: ['Ouvrez Google Play Store.', 'Cherchez "IPTV Smarters Pro" ou "TiviMate".', 'Installez et ouvrez l\'application.', 'Choisissez "Login with Xtream Codes".', 'Entrez vos identifiants Nixiptv.', 'Validez pour synchroniser.'] },
        smarttv: { name: 'Smart TV (LG/Samsung)', steps: ['Allez sur le Store de votre TV.', 'Installez "IBO Player" ou "Set IPTV".', 'Notez l\'adresse MAC.', 'Allez sur le site de l\'app via PC/Mobile.', 'Entrez les détails et l\'URL M3U fournie.', 'Redémarrez l\'app sur la TV.'] },
        apple: { name: 'Apple (iOS/Apple TV)', steps: ['App Store > Cherchez "Smarters Player Lite".', 'Installez et ouvrez.', 'Sélectionnez "Login with Xtream Codes API".', 'Entrez vos identifiants.', 'Commencez à regarder.'] },
        pc: { name: 'PC / Mac', steps: ['Installez VLC ou IPTV Smarters.', 'VLC : Média > Ouvrir flux réseau > Coller URL M3U.', 'Smarters : Entrez vos identifiants Xtream Codes.'] },
        mag: { name: 'Boîtier MAG', steps: ['Paramètres > Serveurs > Portals.', 'Nom Portal : Nixiptv.', 'URL Portal : Entrez l\'URL fournie.', 'Redémarrez le boîtier.'] }
      }
    },
    faq: {
      title: 'Questions', titleHighlight: 'Fréquentes',
      items: [
        { q: "Pourquoi choisir Nixiptv ?", a: "Nixiptv utilise des serveurs premium avec technologie Anti-Freeze™ pour garantir une disponibilité de 99,9% et une vraie qualité 4K." },
        { q: "Quelle vitesse internet faut-il ?", a: "Pour la 4K fluide, nous recommandons 25 Mbps stable. Pour la HD, 15 Mbps suffisent." },
        { q: "Faut-il un VPN ?", a: "Ce n'est pas obligatoire, mais supporté si vous souhaitez contourner les blocages FAI ou améliorer votre confidentialité." },

        { q: "Quand recevrai-je mes codes ?", a: "C'est instantané. Vous recevez vos accès par Email et WhatsApp dès le paiement validé." },
        { q: "Peut-on utiliser plusieurs écrans ?", a: "Le plan standard est pour une connexion. Contactez le support pour ajouter des écrans." },
        { q: "Que faire en cas de buffering ?", a: "C'est rare, souvent lié au réseau local. Utilisez un câble Ethernet. Si ça persiste, notre support 24/7 est là." }
      ]
    },
    footer: {
      aboutTitle: 'À PROPOS DE', aboutHighlight: 'NIXIPTV', aboutDesc: 'Nixiptv est le leader mondial de l\'IPTV, offrant une expérience de divertissement premium sans câble, fiable et complète.',
      articlesTitle: 'DERNIERS', articlesHighlight: 'ARTICLES', paymentTitle: 'PAIEMENT', paymentHighlight: 'SÉCURISÉ', rights: 'Tous droits réservés.',
      links: { home: 'Accueil', blog: 'Blog', contact: 'Support', terms: 'Conditions', privacy: 'Confidentialité', refund: 'Remboursement' }
    },
    contact: { title: 'NOUS SOMMES', titleHighlight: 'LÀ', desc: 'Besoin d\'aide ? Notre équipe dédiée est disponible 24/7.', whatsapp: 'Chat WhatsApp', email: 'Support Email' },
    channelLogos: { title: 'CONTENU GLOBAL', titleHighlight: 'PREMIUM', desc: '"Accédez au meilleur du monde : Sport, Infos, Cinéma, Jeunesse..."', link: 'Voir Liste Complète' }
  },
  es: {
    meta: {
      homeTitle: 'Mejor Suscripción IPTV 2025 | Servicio 4K Anti-Freeze N°1 - Nixiptv',
      pricingTitle: 'Planes y Precios IPTV | Desde 14.99€/mes | Nixiptv',
      channelsTitle: 'Lista de Canales IPTV 2025 | España, México, Fútbol y Deportes',
      blogTitle: 'Noticias y Tutoriales IPTV | El Blog de Nixiptv',
      contactTitle: 'Soporte Premium 24/7 | Contactar a Nixiptv',
      tutorialsTitle: 'Guías de Instalación | Instalar IPTV en Firestick y Smart TV'
    },
    nav: { home: 'Inicio', pricing: 'Precios', features: 'Ventajas', channels: 'Canales', tutorials: 'Instalación', faq: 'FAQ', contact: 'SOPORTE' },
    hero: {
      tag: 'El Futuro del Streaming está Aquí', title1: 'DESATA', title2: 'EL ENTRETENIMIENTO', title3: 'ILIMITADO',
      desc: 'Vive la revolución del entretenimiento en casa. Más de 35,000 canales en vivo, películas y series en impresionante 4K UHD, sin cortes.',
      cta1: 'EMPEZAR', cta2: 'VER CANALES',
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
      liveChannels: 'Canales en Vivo', quality: 'Calidad de Streaming', popularNetworks: 'Redes Top', popularLocations: 'Regiones Populares', showAll: 'Ver Todos los Países', showLess: 'Ver Menos', allCountries: 'Lista Completa'
    },
    tutorials: {
      title: 'Centro de', titleHighlight: 'Instalación', desc: 'Configurar Nixiptv es fácil. Elige tu dispositivo para ver la guía.', selectDevice: 'Elige Plataforma',
      devices: {
        firestick: { name: 'Amazon Firestick', steps: ['Configuración > Mi Fire TV > Opciones de desarrollador.', 'Activar "Apps de origen desconocido".', 'Instalar "Downloader".', 'URL: http://iptvsmarters.com/smarters.apk', 'Instalar app.', 'Login con Xtream Codes API.', 'Ingresar credenciales.'] },
        android: { name: 'Android TV / Box', steps: ['Google Play Store.', 'Buscar "IPTV Smarters Pro".', 'Instalar.', 'Login con Xtream Codes.', 'Ingresar datos Nixiptv.', 'Añadir Usuario.'] },
        smarttv: { name: 'Smart TV', steps: ['Tienda de Apps.', 'Instalar "IBO Player" o "Set IPTV".', 'Anotar MAC.', 'Ir a web de app.', 'Ingresar MAC y URL M3U.', 'Reiniciar app.'] },
        apple: { name: 'Apple (iOS)', steps: ['App Store.', 'Instalar "Smarters Player Lite".', 'Login Xtream Codes.', 'Ingresar datos.', 'Ver.'] },
        pc: { name: 'PC', steps: ['Instalar VLC o Smarters.', 'VLC: Abrir red > Pegar M3U.', 'Smarters: Xtream Codes.'] },
        mag: { name: 'MAG Box', steps: ['Ajustes > Servidores > Portales.', 'Portal: Nixiptv.', 'URL: La del email.', 'Reiniciar.'] }
      }
    },
    faq: {
      title: 'Preguntas', titleHighlight: 'Frecuentes',
      items: [
        { q: "¿Por qué Nixiptv?", a: "Servidores premium, Anti-Freeze, 99.9% uptime, 4K real." },
        { q: "¿Velocidad recomendada?", a: "25 Mbps para 4K. 15 Mbps para HD." },
        { q: "¿Necesito VPN?", a: "No es obligatorio, pero es compatible." },

        { q: "¿Tiempo de entrega?", a: "Inmediato por Email y WhatsApp." },
        { q: "¿Múltiples pantallas?", a: "Plan estándar es 1 conexión. Contactar soporte para más." },
        { q: "¿Buffering?", a: "Raro. Usar cable Ethernet. Contactar soporte." }
      ]
    },
    footer: {
      aboutTitle: 'SOBRE', aboutHighlight: 'NIXIPTV', aboutDesc: 'Líder en IPTV. Entretenimiento premium sin cables.',
      articlesTitle: 'ÚLTIMOS', articlesHighlight: 'ARTÍCULOS', paymentTitle: 'PAGO', paymentHighlight: 'SEGURO', rights: 'Todos los derechos reservados.',
      links: { home: 'Inicio', blog: 'Blog', contact: 'Contacto', terms: 'Términos', privacy: 'Privacidad', refund: 'Reembolso' }
    },
    contact: { title: 'ESTAMOS', titleHighlight: 'AQUÍ', desc: '¿Necesitas ayuda? 24/7.', whatsapp: 'Chat WhatsApp', email: 'Email Soporte' },
    channelLogos: { title: 'CONTENIDO', titleHighlight: 'GLOBAL', desc: 'Lo mejor del mundo.', link: 'Ver Lista Completa' }
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
      desc: 'Erleben Sie die ultimative Revolution im Home Entertainment. Über 35.000 Live-Sender, Filme und Serien in atemberaubendem 4K UHD – völlig pufferfrei.',
      cta1: 'LOSLEGEN', cta2: 'SENDER ANSEHEN',
      stats: { users: 'Glückliche Kunden', channels: 'Premium Sender', vod: 'Filme & Serien' },
      ratings: '5-Sterne Bewertungen'
    },
    steps: {
      title: 'Starten in', titleHighlight: 'Minuten', desc: 'Schließen Sie sich Tausenden an. In drei Schritten zum Ziel.',
      s1_title: 'PLAN WÄHLEN', s1_desc: 'Wählen Sie Ihr Abo. Sofortige Lieferung.',
      s2_title: 'APP INSTALLIEREN', s2_desc: 'Laden Sie Ihren Player herunter.',
      s3_title: 'LOSLEGEN', s3_desc: 'Einloggen und genießen.'
    },
    pricing: {
      title: 'Premium', titleHighlight: 'Zugang', titleSuffix: 'Pläne',
      desc: 'Top Qualität. Alle Sender, 4K VOD und Support inklusive.',
      standard: 'Starter', premium: 'Bester Wert', month: 'Monat', months: 'Monate',
      monthly: '/mtl', yearly: '/jahr', semi: '/6mon', popular: 'Beliebtest', choose: 'Wählen',
      device: 'Verbindung', devices: 'Verbindungen',
      features: ['Anti-Freeze™ 9.8', 'Sofort-Aktivierung', '35.000+ Sender', '150.000+ VOD', '4K & 8K UHD', '99.9% Uptime', 'Sport & PPV', 'EPG', 'Alle Geräte', '24/7 Support']
    },
    features: {
      title: 'WARUM', titleHighlight: 'NIXIPTV?', desc: 'Wir innovieren. Zuverlässigstes Erlebnis.',
      f1_title: 'RIESIGE BIBLIOTHEK', f1_desc: 'Live-Sport, Filme, täglich aktuell.',
      f2_title: 'KRISTALLKLARES 4K', f2_desc: 'High-Speed Server, echtes 4K.',
      f3_title: 'STABILITÄT', f3_desc: 'Anti-Freeze™ Technologie.',
      device_title: 'AUF JEDEM', device_highlight: 'GERÄT', device_desc: 'Smart TV, Firestick, Android, iOS, PC, MAG.'
    },
    channels: {
      tag: 'Weltweit', title: 'Entdecken Sie', titleHighlight: 'Unser Angebot', desc: 'Internationale Sender.',
      searchPlaceholder: 'Land suchen...', clear: 'Löschen', results: 'Ergebnisse', noResults: 'Nichts gefunden',
      liveChannels: 'Live Sender', quality: 'Qualität', popularNetworks: 'Top Sender', popularLocations: 'Regionen', showAll: 'Alle Länder', showLess: 'Weniger', allCountries: 'Alle Länder'
    },
    tutorials: {
      title: 'Installation', titleHighlight: 'Hilfe', desc: 'Einfache Einrichtung.', selectDevice: 'Gerät wählen',
      devices: {
        firestick: { name: 'Firestick', steps: ['Einstellungen > Mein Fire TV.', 'Apps unbekannter Herkunft an.', 'Downloader installieren.', 'URL: http://iptvsmarters.com/smarters.apk', 'Installieren.', 'Login Xtream Codes.'] },
        android: { name: 'Android', steps: ['Play Store > IPTV Smarters.', 'Installieren.', 'Login Xtream Codes.'] },
        smarttv: { name: 'Smart TV', steps: ['App Store > IBO Player.', 'MAC notieren.', 'Webseite besuchen.', 'M3U hochladen.'] },
        apple: { name: 'Apple', steps: ['App Store > Smarters.', 'Login Xtream Codes.'] },
        pc: { name: 'PC', steps: ['VLC oder Smarters installieren.'] },
        mag: { name: 'MAG', steps: ['Portal URL eintragen.'] }
      }
    },
    faq: {
      title: 'Häufige', titleHighlight: 'Fragen',
      items: [
        { q: "Warum Nixiptv?", a: "Premium Server, Anti-Freeze, 4K." },
        { q: "Internetgeschwindigkeit?", a: "25 Mbps für 4K." },
        { q: "VPN?", a: "Nicht nötig, aber möglich." },

        { q: "Lieferung?", a: "Sofort per Mail." },
        { q: "Multi-Screen?", a: "Standard 1 Connection." },
        { q: "Buffering?", a: "LAN Kabel nutzen." }
      ]
    },
    footer: {
      aboutTitle: 'ÜBER', aboutHighlight: 'NIXIPTV', aboutDesc: 'Führender IPTV Anbieter.',
      articlesTitle: 'NEUE', articlesHighlight: 'ARTIKEL', paymentTitle: 'SICHER', paymentHighlight: 'BEZAHLEN', rights: 'Alle Rechte vorbehalten.',
      links: { home: 'Home', blog: 'Blog', contact: 'Kontakt', terms: 'AGB', privacy: 'Datenschutz', refund: 'Erstattung' }
    },
    contact: { title: 'WIR SIND', titleHighlight: 'DA', desc: 'Hilfe nötig? 24/7.', whatsapp: 'WhatsApp', email: 'Email' },
    channelLogos: { title: 'PREMIUM', titleHighlight: 'INHALTE', desc: 'Das Beste der Welt.', link: 'Liste ansehen' }
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
      desc: 'استمتع بثورة الترفيه المنزلي. شاهد أكثر من 35,000 قناة مباشرة، وأفلام ومسلسلات بجودة 4K UHD المذهلة - بدون تقطيع نهائياً.',
      cta1: 'ابدأ الآن', cta2: 'استعرض القنوات',
      stats: { users: 'مشترك سعيد', channels: 'قناة مميزة', vod: 'فيلم ومسلسل' },
      ratings: 'تقييم 5 نجوم'
    },
    steps: {
      title: 'ابدأ في', titleHighlight: 'دقائق', desc: 'انضم للآلاف اليوم. عملية إعداد بسيطة في 3 خطوات.',
      s1_title: 'اختر باقتك', s1_desc: 'اختر الخطة المناسبة. تسليم فوري عبر الإيميل والواتساب.',
      s2_title: 'ثبت التطبيق', s2_desc: 'حمل مشغل IPTV المفضل لديك (Smarters, TiviMate).',
      s3_title: 'ابدأ المشاهدة', s3_desc: 'سجل دخولك واستمتع فوراً.'
    },
    pricing: {
      title: 'باقات', titleHighlight: 'مميزة', titleSuffix: '',
      desc: 'جودة عالية بسعر لا يضاهى. تشمل جميع القنوات ومكتبة الأفلام والدعم الفني.',
      standard: 'بداية', premium: 'أفضل قيمة', month: 'شهر', months: 'أشهر',
      monthly: '/ش', yearly: '/سنة', semi: '/6ش', popular: 'الأكثر طلباً', choose: 'اختر الباقة',
      device: 'اتصال', devices: 'اتصالات',
      features: ['تقنية منع التقطيع 9.8', 'تفعيل فوري', '35,000+ قناة عالمية', '150,000+ مكتبة أفلام', 'جودة 4K و 8K', 'ثبات سيرفرات 99.9%', 'باقات رياضية', 'دليل برامج EPG', 'يعمل على كل الأجهزة', 'دعم فني 24/7']
    },
    features: {
      title: 'لماذا', titleHighlight: 'NIXIPTV؟', desc: 'نحن نبتكر ولا نكتفي بالبث. بنية تحتية تضمن أفضل تجربة.',
      f1_title: 'مكتبة ضخمة', f1_desc: 'من الرياضة للأفلام، تحديث يومي.',
      f2_title: 'جودة 4K', f2_desc: 'سيرفرات قوية لجودة حقيقية.',
      f3_title: 'ثبات تام', f3_desc: 'تقنية Anti-Freeze™ لضمان عدم التقطيع.',
      device_title: 'شاهد على', device_highlight: 'أي شاشة', device_desc: 'يدعم جميع الشاشات والأجهزة الذكية.'
    },
    channels: {
      tag: 'تغطية عالمية', title: 'استكشف', titleHighlight: 'قنواتنا', desc: 'مجموعة شاملة من القنوات العالمية.',
      searchPlaceholder: 'ابحث عن دولتك...', clear: 'مسح', results: 'نتائج', noResults: 'لا يوجد نتائج',
      liveChannels: 'قنوات مباشرة', quality: 'الجودة', popularNetworks: 'أهم الشبكات', popularLocations: 'دول شائعة', showAll: 'كل الدول', showLess: 'أقل', allCountries: 'القائمة الكاملة'
    },
    tutorials: {
      title: 'مركز', titleHighlight: 'الشروحات', desc: 'الإعداد سهل جداً. اختر جهازك.', selectDevice: 'اختر الجهاز',
      devices: {
        firestick: { name: 'Firestick', steps: ['الإعدادات > خيارات المطور.', 'تفعيل تطبيقات غير معروفة.', 'تثبيت Downloader.', 'الرابط: http://iptvsmarters.com/smarters.apk', 'تثبيت.', 'دخول Xtream Codes.'] },
        android: { name: 'Android', steps: ['متجر بلاي > IPTV Smarters.', 'تثبيت.', 'دخول Xtream Codes.'] },
        smarttv: { name: 'Smart TV', steps: ['متجر التطبيقات > IBO Player.', 'سجل MAC.', 'ارفع الملف بموقع التطبيق.'] },
        apple: { name: 'Apple', steps: ['Smarters Player Lite.', 'دخول Xtream Codes.'] },
        pc: { name: 'PC', steps: ['VLC أو Smarters.'] },
        mag: { name: 'MAG', steps: ['أدخل رابط البورتال.'] }
      }
    },
    faq: {
      title: 'أسئلة', titleHighlight: 'شائعة',
      items: [
        { q: "لماذا Nixiptv؟", a: "سيرفرات قوية، بدون تقطيع، 4K." },
        { q: "السرعة المطلوبة؟", a: "25 ميجا للـ 4K." },
        { q: "هل أحتاج VPN؟", a: "ليس ضرورياً." },

        { q: "التسليم؟", a: "فوري." },
        { q: "شاشات متعددة؟", a: "الباقة الأساسية شاشة واحدة." },
        { q: "التقطيع؟", a: "نادر. استخدم كيبل." }
      ]
    },
    footer: {
      aboutTitle: 'عن', aboutHighlight: 'الشركة', aboutDesc: 'أفضل مزود IPTV في العالم.',
      articlesTitle: 'أحدث', articlesHighlight: 'المقالات', paymentTitle: 'دفع', paymentHighlight: 'آمن', rights: 'جميع الحقوق محفوظة.',
      links: { home: 'الرئيسية', blog: 'المدونة', contact: 'اتصل بنا', terms: 'الشروط', privacy: 'الخصوصية', refund: 'الاسترجاع' }
    },
    contact: { title: 'نحن', titleHighlight: 'هنا', desc: 'مساعدة؟ 24/7.', whatsapp: 'واتساب', email: 'إيميل' },
    channelLogos: { title: 'محتوى', titleHighlight: 'عالمي', desc: 'الأفضل في العالم.', link: 'القائمة الكاملة' }
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
      desc: 'Испытайте революцию в домашних развлечениях. Более 35 000 каналов, фильмы и сериалы в 4K UHD — без буферизации.',
      cta1: 'НАЧАТЬ', cta2: 'КАНАЛЫ',
      stats: { users: 'Подписчиков', channels: 'Каналов', vod: 'Фильмов' },
      ratings: '5 звезд'
    },
    steps: {
      title: 'Начните за', titleHighlight: 'Минуты', desc: 'Простая настройка в 3 шага.',
      s1_title: 'ВЫБЕРИТЕ ПЛАН', s1_desc: 'Моментальная доставка на Email.',
      s2_title: 'УСТАНОВИТЕ ПРИЛОЖЕНИЕ', s2_desc: 'Скачайте плеер (Smarters, TiviMate).',
      s3_title: 'СМОТРИТЕ', s3_desc: 'Войдите и наслаждайтесь.'
    },
    pricing: {
      title: 'Наши', titleHighlight: 'Тарифы', titleSuffix: '',
      desc: 'Лучшее качество. Все каналы и 4K кинозал включены.',
      standard: 'Старт', premium: 'Выбор', month: 'Мес', months: 'Мес',
      monthly: '/мес', yearly: '/год', semi: '/6мес', popular: 'Популярный', choose: 'Выбрать',
      device: 'Устройство', devices: 'Устройства',
      features: ['Anti-Freeze™ 9.8', 'Моментальная активация', '35,000+ Каналов', '150,000+ VOD', '4K & 8K Ultra HD', '99.9% Аптайм', 'Спорт и PPV', 'Телегид (EPG)', 'Любые устройства', '24/7 Поддержка']
    },
    features: {
      title: 'ПОЧЕМУ', titleHighlight: 'NIXIPTV?', desc: 'Надежность и качество.',
      f1_title: 'ОГРОМНАЯ БИБЛИОТЕКА', f1_desc: 'Спорт, кино, обновления ежедневно.',
      f2_title: 'ЧИСТЫЙ 4K', f2_desc: 'Мощные серверы, настоящий 4K.',
      f3_title: 'СТАБИЛЬНОСТЬ', f3_desc: 'Технология Anti-Freeze™.',
      device_title: 'СМОТРИТЕ', device_highlight: 'ВЕЗДЕ', device_desc: 'Smart TV, Firestick, Android, iOS, PC, MAG.'
    },
    channels: {
      tag: 'Весь Мир', title: 'Наши', titleHighlight: 'Каналы', desc: 'Глобальное покрытие.',
      searchPlaceholder: 'Поиск страны...', clear: 'Очистить', results: 'Результаты', noResults: 'Нет результатов',
      liveChannels: 'Live Каналы', quality: 'Качество', popularNetworks: 'Топ Сети', popularLocations: 'Регионы', showAll: 'Все Страны', showLess: 'Меньше', allCountries: 'Полный Список'
    },
    tutorials: {
      title: 'Центр', titleHighlight: 'Установки', desc: 'Легкая настройка.', selectDevice: 'Выберите устройство',
      devices: {
        firestick: { name: 'Firestick', steps: ['Настройки > Fire TV > Разработчик.', 'Включить неизвестные источники.', 'Скачать Downloader.', 'URL: http://iptvsmarters.com/smarters.apk', 'Установить.', 'Вход Xtream Codes.'] },
        android: { name: 'Android', steps: ['Play Store > IPTV Smarters.', 'Установить.', 'Вход Xtream Codes.'] },
        smarttv: { name: 'Smart TV', steps: ['App Store > IBO Player.', 'Записать MAC.', 'На сайт приложения.', 'Загрузить M3U.'] },
        apple: { name: 'Apple', steps: ['App Store > Smarters.', 'Вход Xtream Codes.'] },
        pc: { name: 'PC', steps: ['VLC или Smarters.'] },
        mag: { name: 'MAG', steps: ['Вписать Portal URL.'] }
      }
    },
    faq: {
      title: 'Частые', titleHighlight: 'Вопросы',
      items: [
        { q: "Почему Nixiptv?", a: "Премиум серверы, 4K, без лагов." },
        { q: "Скорость?", a: "25 Мбит для 4K." },
        { q: "VPN?", a: "Не обязательно." },

        { q: "Доставка?", a: "Сразу на Email." },
        { q: "Мультирум?", a: "Базовый - 1 экран." },
        { q: "Буферизация?", a: "Редко. Проверьте интернет." }
      ]
    },
    footer: {
      aboutTitle: 'О', aboutHighlight: 'НАС', aboutDesc: 'Лидер IPTV рынка.',
      articlesTitle: 'СТАТЬИ', articlesHighlight: 'БЛОГ', paymentTitle: 'ОПЛАТА', paymentHighlight: 'БЕЗОПАСНО', rights: 'Все права защищены.',
      links: { home: 'Главная', blog: 'Блог', contact: 'Контакты', terms: 'Условия', privacy: 'Конфиденциальность', refund: 'Возврат' }
    },
    contact: { title: 'МЫ', titleHighlight: 'РЯДОМ', desc: 'Помощь 24/7.', whatsapp: 'WhatsApp', email: 'Email' },
    channelLogos: { title: 'КОНТЕНТ', titleHighlight: 'МИРА', desc: 'Всё лучшее.', link: 'Список Каналов' }
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
      desc: 'Experimente a revolução. Mais de 35.000 canais ao vivo, filmes e séries em 4K UHD.',
      cta1: 'COMEÇAR', cta2: 'VER CANAIS',
      stats: { users: 'Clientes Felizes', channels: 'Canais Premium', vod: 'Filmes & Séries' },
      ratings: 'avaliações 5 estrelas'
    },
    steps: {
      title: 'Comece em', titleHighlight: 'Minutos', desc: 'Junte-se a nós em 3 passos simples.',
      s1_title: 'ESCOLHA SEU PLANO', s1_desc: 'Entrega imediata por Email.',
      s2_title: 'INSTALE O APP', s2_desc: 'Baixe seu player (Smarters, TiviMate).',
      s3_title: 'COMECE A ASSISTIR', s3_desc: 'Faça login e aproveite.'
    },
    pricing: {
      title: 'Planos', titleHighlight: 'Premium', titleSuffix: '',
      desc: 'Melhor custo-benefício. Todos os canais e 4K inclusos.',
      standard: 'Inicial', premium: 'Melhor Valor', month: 'Mês', months: 'Meses',
      monthly: '/mês', yearly: '/ano', semi: '/6meses', popular: 'Mais Popular', choose: 'Escolher',
      device: 'Tela', devices: 'Telas',
      features: ['Tecnologia Anti-Freeze™ 9.8', 'Ativação Imediata', '35.000+ Canais', '150.000+ VOD', 'Qualidade 4K & 8K', '99.9% Uptime', 'Esportes Premium', 'Guia EPG', 'Todos Dispositivos', 'Suporte 24/7']
    },
    features: {
      title: 'POR QUE', titleHighlight: 'NIXIPTV?', desc: 'Inovação e qualidade.',
      f1_title: 'BIBLIOTECA MASSIVA', f1_desc: 'Esportes, filmes, atualizado.',
      f2_title: '4K CRISTALINO', f2_desc: 'Servidores potentes, zero lag.',
      f3_title: 'ESTABILIDADE', f3_desc: 'Anti-Freeze™ garantido.',
      device_title: 'ASSISTA EM', device_highlight: 'QUALQUER TELA', device_desc: 'Smart TV, celular, PC, TV Box.'
    },
    channels: {
      tag: 'Cobertura', title: 'Explorar', titleHighlight: 'Canais', desc: 'Canais do mundo todo.',
      searchPlaceholder: 'Buscar país...', clear: 'Limpar', results: 'Resultados', noResults: 'Nada encontrado',
      liveChannels: 'Canais Ao Vivo', quality: 'Qualidade', popularNetworks: 'Top Redes', popularLocations: 'Regiões', showAll: 'Todos', showLess: 'Menos', allCountries: 'Lista Completa'
    },
    tutorials: {
      title: 'Instalação', titleHighlight: 'Fácil', desc: 'Guia passo a passo.', selectDevice: 'Escolha',
      devices: {
        firestick: { name: 'Firestick', steps: ['Config > Fire TV > Desenvolvedor.', 'Apps desconhecidos ON.', 'Baixar Downloader.', 'URL: http://iptvsmarters.com/smarters.apk', 'Instalar.', 'Login Xtream Codes.'] },
        android: { name: 'Android', steps: ['Play Store > Smarters.', 'Instalar.', 'Login Xtream Codes.'] },
        smarttv: { name: 'Smart TV', steps: ['Loja de Apps > IBO Player.', 'Anotar MAC.', 'Site do App.', 'Enviar M3U.'] },
        apple: { name: 'Apple', steps: ['App Store > Smarters.', 'Login Xtream Codes.'] },
        pc: { name: 'PC', steps: ['VLC ou Smarters.'] },
        mag: { name: 'MAG', steps: ['Colocar URL Portal.'] }
      }
    },
    faq: {
      title: 'Perguntas', titleHighlight: 'Frequentes',
      items: [
        { q: "Por que Nixiptv?", a: "Servidores estáveis, 4K, suporte." },
        { q: "Velocidade?", a: "25 Mega para 4K." },
        { q: "VPN?", a: "Opcional." },

        { q: "Entrega?", a: "Imediata." },
        { q: "Telas?", a: "1 tela padrão." },
        { q: "Travando?", a: "Use cabo de rede." }
      ]
    },
    footer: {
      aboutTitle: 'SOBRE', aboutHighlight: 'NIXIPTV', aboutDesc: 'Líder em IPTV.',
      articlesTitle: 'ARTIGOS', articlesHighlight: 'BLOG', paymentTitle: 'PAGAMENTO', paymentHighlight: 'SEGURO', rights: 'Todos os direitos reservados.',
      links: { home: 'Início', blog: 'Blog', contact: 'Contato', terms: 'Termos', privacy: 'Privacidade', refund: 'Reembolso' }
    },
    contact: { title: 'FALE', titleHighlight: 'CONSCO', desc: 'Suporte 24/7.', whatsapp: 'WhatsApp', email: 'Email' },
    channelLogos: { title: 'CONTEÚDO', titleHighlight: 'GLOBAL', desc: 'O melhor do mundo.', link: 'Ver Lista' }
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