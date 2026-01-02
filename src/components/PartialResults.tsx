'use client';

import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Lock, Download, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

import { type Language } from '@/lib/i18n';

export default function PartialResults({ t, lang }: { t: any; lang: Language }) {
    // Localized service lists if needed, but names are usually international
    const services = ['Instagram', 'Telegram', 'WhatsApp', 'LinkedIn'];

    return (
        <section className="py-20 px-4 flex flex-col items-center max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full text-center space-y-6"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-medium border border-green-500/20">
                    <CheckCircle className="w-4 h-4" />
                    {t.badge_complete}
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-white">
                    {t.title}
                </h2>
                <p className="text-muted-foreground pb-8">
                    {t.subtitle}
                </p>

                {/* Results Grid */}
                <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
                    {/* Found Services */}
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            {t.found_accounts}
                        </h3>
                        <ul className="space-y-3">
                            {services.map(service => (
                                <li key={service} className="flex items-center justify-between text-slate-300 bg-slate-800/50 px-3 py-2 rounded-lg">
                                    <span>{service}</span>
                                    <span className="text-xs bg-green-500/10 text-green-400 px-2 py-0.5 rounded">FOUND</span>
                                </li>
                            ))}
                            <li className="flex items-center justify-between text-slate-300 bg-slate-800/50 px-3 py-2 rounded-lg border border-yellow-500/20">
                                <span>Dating Service</span>
                                <span className="text-xs bg-yellow-500/10 text-yellow-400 px-2 py-0.5 rounded uppercase">Match</span>
                            </li>
                        </ul>
                    </div>

                    {/* Dating Hint (The Hook) */}
                    <div className="relative bg-slate-900 border border-slate-800 rounded-xl p-6 overflow-hidden group">
                        <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors"></div>
                        <h3 className="text-lg font-semibold text-red-400 mb-4 flex items-center gap-2">
                            <AlertCircle className="w-5 h-5" />
                            {t.private_data}
                        </h3>

                        <div className="space-y-4">
                            <div className="p-3 bg-black/40 rounded-lg border border-red-500/10">
                                <div className="flex justify-between text-sm text-slate-400 mb-1">
                                    <span>Service:</span>
                                    <span className="text-white font-medium">Tinder / Badoo</span>
                                </div>
                                <div className="flex justify-between text-sm text-slate-400">
                                    <span>Username:</span>
                                    <span className="blur-sm select-none text-white">k***_lover</span>
                                </div>
                                <div className="flex justify-between text-sm text-slate-400 mt-1">
                                    <span>Last Active:</span>
                                    <span className="blur-sm select-none text-white">2 days ago</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-xs text-red-300/60 bg-red-500/5 p-2 rounded">
                                <Lock className="w-3 h-3" />
                                {t.hidden_details}
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Paywall */}
                <div className="max-w-md mx-auto space-y-4">
                    <div className="text-center mb-2">
                        <span className="inline-block bg-blue-600/10 text-blue-400 text-xs font-semibold px-2 py-1 rounded border border-blue-500/20 mb-2">
                            {t.price_tag} {t.currency_symbol}{t.price_amount}
                        </span>
                    </div>
                    <button className="w-full h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-lg shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3 transition-transform hover:scale-105 active:scale-95">
                        <Download className="w-6 h-6" />
                        {t.cta_button}
                    </button>
                    <p className="text-xs text-muted-foreground">
                        * {t.cta_secure}
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-500 mt-4 text-left">
                        <div className="flex items-center gap-1.5"><CheckCircle className="w-3 h-3" /> Status</div>
                        <div className="flex items-center gap-1.5"><CheckCircle className="w-3 h-3" /> Photos</div>
                        <div className="flex items-center gap-1.5"><CheckCircle className="w-3 h-3" /> Reg. Date</div>
                        <div className="flex items-center gap-1.5"><CheckCircle className="w-3 h-3" /> IP Data</div>
                    </div>
                </div>

            </motion.div>
        </section>
    );
}
