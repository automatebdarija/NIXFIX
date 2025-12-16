import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n';

const BLOG_POSTS = [
  {
    id: 'best-streaming-device-for-iptv',
    title: "The Ultimate Guide: Best Streaming Devices for IPTV in 2025",
    excerpt: "Choosing the right hardware is crucial for a buffer-free experience. We rank the top streaming devices including Firestick, Shield, and Apple TV.",
    date: "June 02, 2025",
    author: "Hardware Specialist",
    image: "https://i.ibb.co/5gdNzH3M/devices-1.webp",
    link: "/best-streaming-device-for-iptv"
  },
  {
    id: 'nixiptv-iptv-review',
    title: "Unlock a World of Entertainment with Nixiptv.com IPTV: A Comprehensive Review",
    excerpt: "In this comprehensive review, we dive deep into what makes Nixiptv a top contender for your entertainment needs in 2025.",
    date: "May 25, 2025",
    author: "Digital Trends",
    image: "https://i.ibb.co/m54khXDj/Screenshot-2025-12-13-at-18-48-03.png",
    link: "/nixiptv-iptv-review"
  },
  {
    id: 'firestick-iptv',
    title: "The Best IPTV Subscription Service Provider for Amazon Firestick",
    excerpt: "Discover why Nixiptv is the ultimate choice for your Amazon Firestick. Unlock thousands of channels in 4K quality with our easy setup guide.",
    date: "May 15, 2025",
    author: "Tech Editor",
    image: "https://i.ibb.co/9Hv1z5VJ/The-Best-IPTV-Subscription-Service-Provider-for-Amazon-Firestick-scaled-1.webp",
    link: "/the-best-iptv-subscription-service-provider-for-amazon-firestick"
  },
  {
    id: 'best-iptv-2025-review',
    title: "Best IPTV Service in 2025: Nixiptv Honest Review",
    excerpt: "Is Nixiptv really the best IPTV service in 2025? We break down the features, stability, channel list, and VOD library in this comprehensive review.",
    date: "May 10, 2025",
    author: "Streaming Expert",
    image: "https://i.ibb.co/NcrqxK8/Best-IPTV-Service-in-2025-4kiv-Honest-Review-scaled-1.webp",
    link: "/best-iptv-service-in-2025-nixiptv-honest-review"
  }
];

const Blog: React.FC = () => {
  const { navigate } = useLanguage();

  const handleArticleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigate(href);
  };

  return (
    <section className="pt-32 pb-16 bg-black min-h-screen relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-black italic text-white uppercase mb-6 tracking-tight">
                    LATEST <span className="text-brand-gold">NEWS</span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg font-medium">
                    Stay updated with the latest trends in streaming, IPTV technology, and Nixiptv announcements.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {BLOG_POSTS.map((post) => (
                    <article key={post.id} className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-brand-gold/50 transition-all duration-300 group flex flex-col">
                        <div className="relative h-56 overflow-hidden">
                            <img 
                                src={post.image} 
                                alt={post.title} 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60"></div>
                        </div>
                        
                        <div className="p-8 flex-1 flex flex-col">
                            <div className="flex items-center gap-4 text-xs font-bold text-gray-500 mb-4 uppercase tracking-wider">
                                <span className="flex items-center gap-1"><Calendar size={14} className="text-brand-gold" /> {post.date}</span>
                                <span className="flex items-center gap-1"><User size={14} className="text-brand-gold" /> {post.author}</span>
                            </div>
                            
                            <h2 className="text-xl font-black text-white italic mb-4 leading-tight group-hover:text-brand-gold transition-colors line-clamp-2">
                                {post.title}
                            </h2>
                            
                            <p className="text-gray-400 mb-6 font-medium leading-relaxed line-clamp-3 text-sm">
                                {post.excerpt}
                            </p>
                            
                            <div className="mt-auto">
                                <a 
                                    href={post.link} 
                                    onClick={(e) => handleArticleClick(e, post.link)}
                                    className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs hover:text-brand-gold transition-colors"
                                >
                                    Read Article <ArrowRight size={14} />
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Blog;