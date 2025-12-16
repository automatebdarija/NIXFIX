import React, { useState, useMemo, useEffect } from 'react';
import { CHANNEL_REGIONS } from '../constants';
import { useLanguage } from '../i18n';
import { Search, Globe, Star, Tv, Film, ChevronDown, ChevronUp } from 'lucide-react';

const ChannelsList: React.FC = () => {
    const { t } = useLanguage();
    const [searchQuery, setSearchQuery] = useState('');
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const q = params.get('q');
        if (q) setSearchQuery(q);
    }, []);

    const allCountries = useMemo(() => {
        const flattened = CHANNEL_REGIONS.flatMap(region =>
            region.countries.map(country => ({ ...country, region: region.name }))
        );
        return Array.from(new Map(flattened.map(item => [item.code, item])).values());
    }, []);

    const FEATURED_CODES = ['US', 'GB', 'CA'];
    const POPULAR_CODES = ['DE', 'FR', 'IT', 'ES', 'NL', 'TR', 'AE', 'SA', 'KW', 'LB', 'BR', 'MX', 'IN', 'AU'];

    const getCountry = (code: string) => allCountries.find(c => c.code === code);
    const featuredCountries = FEATURED_CODES.map(code => getCountry(code)).filter(Boolean);
    const popularCountries = POPULAR_CODES.map(code => getCountry(code)).filter(Boolean);

    const searchResults = useMemo(() => {
        if (!searchQuery) return [];
        return allCountries.filter(c =>
            c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.code.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery, allCountries]);

    const FEATURED_DETAILS: Record<string, { count: string; networks: string[] }> = {
        'US': { count: '6,000+', networks: ['HBO', 'ESPN', 'ABC', 'FOX'] },
        'GB': { count: '3,500+', networks: ['BBC', 'Sky', 'ITV', 'BT'] },
        'CA': { count: '2,800+', networks: ['CBC', 'TSN', 'Sportsnet'] }
    };

    return (
        <section className="min-h-screen bg-black pt-32 pb-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-zinc-900/40 to-black pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 border border-brand-gold/30 bg-brand-gold/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 shadow-gold-inner">
                        <Globe size={14} className="text-brand-gold" />
                        <span className="text-xs font-bold text-brand-gold tracking-widest uppercase">{t.channels.tag}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black italic text-white uppercase mb-4 tracking-tighter">
                        {t.channels.title} <span className="text-brand-gold">{t.channels.titleHighlight}</span>
                    </h1>
                    <p className="text-gray-400 font-medium max-w-xl mx-auto text-lg">{t.channels.desc}</p>
                </div>

                <div className="max-w-2xl mx-auto mb-20 relative z-20">
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-gold to-orange-600 rounded-2xl opacity-30 group-hover:opacity-100 transition duration-500 blur"></div>
                        <div className="relative flex items-center bg-black rounded-2xl border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                            <Search className="ml-6 text-brand-gold" size={24} />
                            <input
                                type="text"
                                placeholder={t.channels.searchPlaceholder}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-transparent text-white px-6 py-5 rounded-2xl focus:outline-none placeholder-zinc-600 font-bold text-lg"
                                aria-label="Search countries"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="mr-6 text-zinc-500 hover:text-white text-sm font-bold uppercase tracking-wider"
                                    aria-label="Clear search"
                                >
                                    {t.channels.clear}
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {searchQuery ? (
                    <div className="max-w-7xl mx-auto">
                        <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                            <Search size={20} className="text-brand-gold" /> {t.channels.results}
                        </h3>
                        {searchResults.length > 0 ? (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                {searchResults.map((country, idx) => (
                                    <div key={`${country.code}-${idx}`} className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4 flex items-center gap-4 hover:border-brand-gold/50 hover:bg-zinc-900 transition-all cursor-pointer group">
                                        <img src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`} alt={country.name} className="w-10 h-10 rounded-full object-cover shadow-lg border border-zinc-700 group-hover:border-brand-gold/50" />
                                        <div>
                                            <h4 className="font-bold text-white text-sm truncate max-w-[120px] group-hover:text-brand-gold transition-colors">{country.name}</h4>
                                            <span className="text-[10px] text-zinc-500 font-mono bg-black px-1.5 py-0.5 rounded border border-zinc-800">{country.code}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12 border border-dashed border-zinc-800 rounded-2xl bg-zinc-900/20">
                                <p className="text-gray-400">{t.channels.noResults} &quot;{searchQuery}&quot;</p>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
                            {featuredCountries.map((country) => {
                                if (!country) return null;
                                const details = FEATURED_DETAILS[country.code];
                                return (
                                    <div key={country.code} className="relative group h-full">
                                        <div className="absolute inset-0 bg-gold-gradient rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                                        <div className="relative h-full bg-zinc-950 border border-zinc-800 rounded-3xl p-8 hover:border-brand-gold/50 transition-all duration-300 flex flex-col overflow-hidden">
                                            <div className="absolute -right-12 -bottom-12 opacity-10 group-hover:opacity-30 transition-opacity grayscale group-hover:grayscale-0">
                                                <img src={`https://flagcdn.com/w320/${country.code.toLowerCase()}.png`} alt="Flag" className="w-64 h-64 object-cover rounded-full transition-all duration-500" />
                                            </div>
                                            <div className="flex items-center gap-4 mb-8 z-10">
                                                <div className="w-16 h-16 rounded-full border-4 border-zinc-900 shadow-gold overflow-hidden relative">
                                                    <img src={`https://flagcdn.com/w160/${country.code.toLowerCase()}.png`} alt={country.name} className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <h3 className="text-3xl font-black italic text-white uppercase leading-none">{country.name}</h3>
                                                    <div className="flex items-center gap-2 mt-2">
                                                        <span className="bg-brand-gold text-black text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider shadow-gold">Premium</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 mb-8 z-10">
                                                <div className="bg-zinc-900/80 rounded-xl p-4 border border-zinc-800 backdrop-blur-sm">
                                                    <Tv className="text-brand-gold mb-2" size={20} />
                                                    <p className="text-2xl font-black text-white">{details.count}</p>
                                                    <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">{t.channels.liveChannels}</p>
                                                </div>
                                                <div className="bg-zinc-900/80 rounded-xl p-4 border border-zinc-800 backdrop-blur-sm">
                                                    <Film className="text-brand-gold mb-2" size={20} />
                                                    <p className="text-2xl font-black text-white">4K UHD</p>
                                                    <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">{t.channels.quality}</p>
                                                </div>
                                            </div>
                                            <div className="mt-auto z-10">
                                                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">{t.channels.popularNetworks}</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {details.networks.map(net => <span key={net} className="text-xs font-bold text-white bg-zinc-800/80 px-3 py-1.5 rounded-full border border-zinc-700 hover:border-brand-gold hover:text-brand-gold transition-colors cursor-default">{net}</span>)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="max-w-6xl mx-auto mb-16">
                            <div className="flex items-center gap-3 mb-8 px-4">
                                <Star className="text-brand-gold" size={24} fill="currentColor" />
                                <h2 className="text-2xl font-black italic text-white uppercase">{t.channels.popularLocations}</h2>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {popularCountries.map((country, idx) => {
                                    if (!country) return null;
                                    return (
                                        <div key={`pop-${idx}`} className="bg-zinc-900/50 border border-zinc-800 hover:border-brand-gold hover:bg-zinc-900 rounded-xl p-4 flex flex-col items-center justify-center gap-3 text-center transition-all group cursor-pointer hover:shadow-gold-inner">
                                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-zinc-800 group-hover:border-brand-gold group-hover:scale-110 transition-all">
                                                <img src={`https://flagcdn.com/w160/${country.code.toLowerCase()}.png`} alt={country.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white text-sm group-hover:text-brand-gold transition-colors">{country.name}</h4>
                                                <span className="text-[10px] text-zinc-500 font-mono">{country.code}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="text-center pb-12">
                            {!showAll ? (
                                <button onClick={() => setShowAll(true)} className="inline-flex items-center gap-2 bg-zinc-900 text-white border border-zinc-800 px-8 py-3 rounded-full font-bold text-sm hover:bg-zinc-800 hover:border-brand-gold transition-colors hover:shadow-gold-inner">
                                    {t.channels.showAll} <ChevronDown size={16} />
                                </button>
                            ) : (
                                <div className="max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="flex items-center gap-3 mb-8 px-4 border-t border-zinc-800 pt-12 mt-4 justify-center">
                                        <Globe className="text-zinc-500" size={20} />
                                        <h2 className="text-xl font-black italic text-zinc-500 uppercase">{t.channels.allCountries}</h2>
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                                        {allCountries.filter(c => !FEATURED_CODES.includes(c.code) && !POPULAR_CODES.includes(c.code)).map((country, idx) => (
                                            <div key={`all-${idx}`} className="bg-zinc-950 border border-zinc-900 rounded-lg p-3 flex items-center gap-3 hover:bg-zinc-900 hover:border-zinc-700 transition-colors opacity-80 hover:opacity-100 cursor-pointer">
                                                <img src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`} alt={country.name} className="w-6 h-6 rounded-full object-cover grayscale hover:grayscale-0 transition-all" />
                                                <span className="text-xs font-bold text-gray-400 truncate group-hover:text-white">{country.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-12">
                                        <button onClick={() => setShowAll(false)} className="inline-flex items-center gap-2 text-brand-gold font-bold text-sm hover:text-white transition-colors uppercase tracking-widest border-b border-transparent hover:border-white pb-1">
                                            {t.channels.showLess} <ChevronUp size={16} />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default ChannelsList;