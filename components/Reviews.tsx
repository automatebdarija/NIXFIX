'use client';

import React, { useEffect, useRef } from 'react';

const POSTERS = [
  "https://i.ibb.co/5Xhzvxfr/yi-N5-E3v-GNIGZFPVb6kwl-PFfd-UCA-1-scaled-jpg-scaled.webp",
  "https://i.ibb.co/qYDXphVV/yf-Dl-Owi-FFy-KUvwm-Igutqs-HLBF4o-1-scaled-jpg-scaled.webp",
  "https://i.ibb.co/VYNVR6PT/qg-HE7t-Tr-DLkn-Culdxp-Rjn-Bu-Gc5-J-1-scaled-jpg-scaled.webp",
  "https://i.ibb.co/XkyrsCYK/p9pd-Xj-NEPUs3-Tmgz-Opa-WTNPFIWP-1-scaled-jpg-scaled.webp",
  "https://i.ibb.co/8DpTdpXX/c7tasf-JHao2hjoi-R81x-W2-Aq-Dlh-S-1-jpg.webp",
  "https://i.ibb.co/kVhqNJ6V/j-Kyb0-MKin-NDb-HF7-Wl-BP4-CE4-KPAM-1-scaled-jpg-scaled.webp",
  "https://i.ibb.co/Tqd3JMYF/atzu3q-KX14-Dpwob-GLb-Zjs-Lsq-RKE-2-jpg.webp",
  "https://i.ibb.co/vxK7Wyvv/ar-TBe-E8z-Oq3-KESQCRq-QNtc-VV69h-1-scaled-jpg-scaled.webp",
  "https://i.ibb.co/fV5NGz8T/1y1u-Layrfq-Lcywp-Cg-HPe-Tw-NCIoy-2-scaled-jpg-scaled.webp"
];

const Reviews: React.FC = () => {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Optimization: Do not run JS spotlight effect on mobile
    if (window.innerWidth < 768) return;

    let animationFrameId: number;

    const updateStyles = () => {
      const windowCenter = window.innerWidth / 2;
      const threshold = 400; 

      itemsRef.current.forEach((item) => {
        if (!item) return;
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const distance = Math.abs(windowCenter - itemCenter);

        let intensity = 1 - Math.min(distance / threshold, 1);
        // Ease the intensity for smoother drop-off
        intensity = Math.pow(intensity, 1.5);

        const scale = 0.85 + (0.35 * intensity); 
        const opacity = 0.3 + (0.7 * intensity); 
        const grayscale = 1 - intensity; 
        
        // Z-Index based on intensity to ensure center item overlaps neighbors
        const zIndex = Math.round(intensity * 100);

        item.style.transform = `scale(${scale})`;
        item.style.filter = `grayscale(${grayscale})`;
        item.style.opacity = `${opacity}`;
        item.style.zIndex = `${zIndex}`;
      });

      animationFrameId = requestAnimationFrame(updateStyles);
    };

    updateStyles();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none';
  };

  return (
    <section className="bg-black py-16 border-b border-zinc-900 relative z-20 overflow-hidden">
      <div className="relative w-full">
        {/* Gradients - adjust height/position if needed, though default usually works well enough */}
        <div className="absolute left-0 top-0 z-20 h-full w-24 md:w-48 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 z-20 h-full w-24 md:w-48 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none"></div>

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
             
             {/* Set 1 */}
             <div className="flex gap-4 px-2 items-center">
                 {POSTERS.map((src, i) => (
                    <div 
                      key={`s1-${i}`} 
                      ref={(el) => { itemsRef.current[i] = el; }}
                      className="w-32 md:w-48 aspect-[2/3] rounded-xl overflow-hidden shadow-2xl bg-zinc-900 border border-zinc-800 will-change-transform flex items-center justify-center relative md:transition-none transition-all"
                      style={{ 
                        // Default styles for mobile where JS loop is disabled
                        transform: 'scale(1)', 
                        filter: 'grayscale(0)', 
                        opacity: 1 
                      }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 z-0"></div>
                        <img 
                          src={src} 
                          className="w-full h-full object-cover relative z-10" 
                          alt="Movie Poster" 
                          onError={handleImageError}
                          loading="lazy"
                          decoding="async"
                          width="192"
                          height="288"
                        />
                    </div>
                 ))}
             </div>

             {/* Set 2 */}
             <div className="flex gap-4 px-2 items-center">
                 {POSTERS.map((src, i) => (
                    <div 
                      key={`s2-${i}`} 
                      ref={(el) => { itemsRef.current[i + POSTERS.length] = el; }}
                      className="w-32 md:w-48 aspect-[2/3] rounded-xl overflow-hidden shadow-2xl bg-zinc-900 border border-zinc-800 will-change-transform flex items-center justify-center relative md:transition-none transition-all"
                      style={{ 
                         transform: 'scale(1)', 
                         filter: 'grayscale(0)', 
                         opacity: 1 
                      }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 z-0"></div>
                        <img 
                          src={src} 
                          className="w-full h-full object-cover relative z-10" 
                          alt="Movie Poster" 
                          onError={handleImageError}
                          loading="lazy"
                          decoding="async"
                          width="192"
                          height="288"
                        />
                    </div>
                 ))}
             </div>

        </div>
      </div>
    </section>
  );
}

export default Reviews;