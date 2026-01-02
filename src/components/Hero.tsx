'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Loader2 } from 'lucide-react';
import TrustBadges from '@/components/TrustBadges';
import { cn } from '@/lib/utils';

interface HeroProps {
    onStartScan: (query: string) => void;
    isScanning?: boolean;
    t: any;
}

export default function Hero({ onStartScan, isScanning = false, t }: HeroProps) {
    const [query, setQuery] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!query.trim() || query.length < 5) {
            setError(t.error_msg);
            return;
        }

        // Basic format check
        const isEmail = query.includes('@');
        const isPhone = /^[+\d\s-]{8,}$/.test(query);

        if (!isEmail && !isPhone) {
            setError(t.error_msg);
            return;
        }

        onStartScan(query);
    };

    return (
        <section className="w-full relative z-10 flex flex-col items-center justify-center pt-24 pb-12 px-4 text-center overflow-hidden">
            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Column: Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto space-y-6 flex flex-col items-center lg:items-start lg:text-left"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20 mb-4 self-center lg:self-start">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        {t.system_status}
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                        {t.title_start} <span className="text-blue-500">{t.title_highlight}</span>
                        <br />
                        <span className="text-lg md:text-2xl mt-4 block text-muted-foreground font-normal">
                            {t.subtitle}
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-muted-foreground text-sm md:text-base lg:mx-0">
                        {t.desc}
                    </p>

                    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto lg:mx-0 mt-10 relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <div className="relative flex items-center bg-slate-900 border border-slate-700/50 rounded-lg p-2 shadow-2xl focus-within:border-blue-500/50 focus-within:ring-1 focus-within:ring-blue-500/50 transition-all">
                            <Search className="w-5 h-5 text-muted-foreground ml-3 mr-3" />
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder={t.input_placeholder}
                                className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder:text-muted-foreground/50 h-10 px-0 outline-none"
                                autoFocus
                            />
                            <button
                                type="submit"
                                disabled={isScanning}
                                className={cn(
                                    "ml-2 px-6 h-10 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all flex items-center gap-2",
                                    isScanning && "opacity-80 cursor-not-allowed"
                                )}
                            >
                                {isScanning ? <Loader2 className="w-4 h-4 animate-spin" /> : t.btn_start}
                            </button>
                        </div>
                        {error && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-400 text-xs mt-2 text-left pl-2"
                            >
                                {error}
                            </motion.p>
                        )}
                    </form>

                    <TrustBadges t={t} />

                    <p className="text-xs text-muted-foreground/40 mt-6 md:hidden">
                        {t.footer_note}
                    </p>
                </motion.div>

                {/* Right Column: Hero Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden lg:block relative w-full max-w-lg aspect-square mx-auto"
                >
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>
                    <img
                        src="/hero-visual.png"
                        alt="Digital Footprint Scan"
                        className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                    />
                </motion.div>
            </div>

            {/* Footer Note Desktop */}
            <p className="text-xs text-muted-foreground/40 mt-12 hidden md:block relative z-10">
                {t.footer_note}
            </p>
        </section>
    );
}
