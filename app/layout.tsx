import React from 'react';
import type { Metadata } from 'next';
import { Montserrat, Alexandria } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', weight: ['400', '500', '700', '900'] });
const alexandria = Alexandria({ subsets: ['latin'], variable: '--font-alexandria', weight: ['400', '700', '900'] });

export const metadata: Metadata = {
  title: 'Best IPTV Subscription 2025 | #1 Rated 4K Anti-Freeze Service - Nixiptv',
  description: 'Unlock 35,000+ Channels & VOD in 4K UHD. The Most Reliable IPTV Provider with 99.9% Uptime, Anti-Freeze Technology & 24/7 Support. Instant Setup on Firestick, Android & Smart TV. Try Free!',
  keywords: 'best iptv subscription, premium iptv 2025, buy iptv, 4k iptv provider, anti-freeze iptv, firestick iptv, smart tv iptv, usa iptv, uk iptv service, canada iptv, sports iptv, m3u playlist, iptv smarters, xtream codes, no buffering iptv',
  authors: [{ name: 'Nixiptv Premium Media' }],
  metadataBase: new URL('https://nixiptv.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://nixiptv.com/',
    title: 'Best IPTV Subscription 2025 | #1 Rated 4K Anti-Freeze Service - Nixiptv',
    description: 'Stop Buffering. Start Streaming. Get 35,000+ Channels & VOD in 4K. Instant delivery, 24/7 Support, and a 100% Satisfaction Guarantee.',
    images: ['https://i.ibb.co/Kxb94hd9/4kiv-iptv-logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best IPTV Subscription 2025 | #1 Rated 4K Anti-Freeze Service - Nixiptv',
    description: 'Stop Buffering. Start Streaming. Get 35,000+ Channels & VOD in 4K. Instant delivery.',
    images: ['https://i.ibb.co/Kxb94hd9/4kiv-iptv-logo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${alexandria.variable}`}>
      <head>
        <link rel="preload" as="image" href="https://i.ibb.co/1Jf7BwTb/HD-wallpaper-black-banner-1-1.jpg" fetchPriority="high" />
        <link rel="icon" type="image/png" href="https://i.ibb.co/pv1ZLhJk/4kiv-fav.png" />
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LY1K9PCMRZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LY1K9PCMRZ');
          `}
        </Script>
        <Script id="clarity-analytics" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "umnvgunn1d");
          `}
        </Script>

        {/* Schema.org Structured Data */}
        <Script id="schema-website" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Nixiptv",
              "url": "https://nixiptv.com/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://nixiptv.com/channels?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </Script>
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Nixiptv",
              "url": "https://nixiptv.com/",
              "logo": "https://i.ibb.co/Kxb94hd9/4kiv-iptv-logo.png",
              "sameAs": [
                "https://twitter.com/nixiptv",
                "https://www.facebook.com/nixiptv"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+44 7411 576834",
                "contactType": "customer service",
                "areaServed": "World",
                "availableLanguage": ["English", "French", "Spanish", "German", "Arabic"]
              }
            }
          `}
        </Script>
        <Script id="schema-product" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Nixiptv Premium IPTV Subscription",
              "image": "https://i.ibb.co/5gdNzH3M/devices-1.webp",
              "description": "Premium IPTV subscription service offering 35,000+ live channels and 150,000+ VODs in 4K/FHD. Compatible with Firestick, Android, and Smart TVs.",
              "brand": {
                "@type": "Brand",
                "name": "Nixiptv"
              },
              "sku": "NIXIPTV-SUB-12M",
              "offers": {
                "@type": "AggregateOffer",
                "url": "https://nixiptv.com/#pricing",
                "priceCurrency": "USD",
                "lowPrice": "14.99",
                "highPrice": "69.99",
                "offerCount": "3",
                "availability": "https://schema.org/InStock"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "5240",
                "bestRating": "5",
                "worstRating": "1"
              }
            }
          `}
        </Script>
        <Script id="schema-faq" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is Nixiptv?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nixiptv is a premium streaming service that allows you to watch live TV channels, movies, and series directly over the internet without the need for traditional cable or satellite."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What Internet speed do I need for IPTV?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We recommend a minimum of 25 Mbps for 4K streaming and 15 Mbps for HD content to ensure a smooth, buffer-free experience."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need a VPN for Nixiptv?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A VPN is not mandatory, but we recommend it if your ISP throttles IPTV traffic or if you want extra privacy. Our service works with all major VPN providers."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer a free IPTV trial?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer a 24-hour free trial so you can test our service stability and channel list before committing to a subscription."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I activate my IPTV subscription?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Once you purchase a plan, you will receive an activation code or M3U link via email or WhatsApp. Simply enter this into your IPTV player of choice to start watching."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I use my subscription on multiple devices?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Standard plans are for one active connection at a time. However, you can set it up on multiple devices. For simultaneous streaming, please contact support for a multi-room plan."
                  }
                }
              ]
            }
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}