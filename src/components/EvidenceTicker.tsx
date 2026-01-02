'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { type Language } from '@/lib/i18n';

// International data map
const MOCK_DATA: Record<string, string[]> = {
    default: [
        'Just checked: +1(415)***-**89 — found: Tinder',
        'Checked: a***@gmail.com — found: Instagram, WhatsApp',
        'Checked: +44 79*** — found: Facebook, LinkedIn',
    ],
    en: [
        'Just checked: +1(212)***-**02 — found: Snapchat, TikTok',
        'Checked: mike***@outlook.com — found: Twitter, Telegram',
    ],
    de: [
        'Gerade geprüft: +49 171 *** — gefunden: WhatsApp',
        'Geprüft: h***@gmx.de — gefunden: Facebook, Instagram',
        'Geprüft: +49 30 *** — gefunden: Parship',
    ],
    fr: [
        'Vérifié à l\'instant : +33 6 *** — trouvé : Snapchat',
        'Vérifié : p***@orange.fr — trouvé : Instagram, WhatsApp',
        'Vérifié : +33 7 *** — trouvé : LinkedIn',
    ],
    it: [
        'Appena controllato: +39 333 *** — trovato: WhatsApp',
        'Controllato: g***@libero.it — trovato: Facebook, Instagram',
    ],
    es: [
        'Recién verificado: +34 6*** — encontrado: Telegram',
        'Verificado: m***@hotmail.es — encontrado: TikTok, Twitter',
    ],
    ru: [
        'Только что проверено: +7926***45 — найден: Tinder',
        'Проверено: a***@gmail.com — найдены: Instagram, Telegram',
    ]
};

export default function EvidenceTicker({ lang = 'en' }: { lang?: Language }) {
    const [index, setIndex] = useState(0);

    // Combine default + lang specific data
    const data = [...MOCK_DATA.default, ...(MOCK_DATA[lang] || [])];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % data.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [data.length]);

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-slate-900/90 border-t border-slate-800 backdrop-blur-sm z-50 h-10 flex items-center justify-center overflow-hidden">
            <div className="flex items-center gap-2 text-xs md:text-sm font-mono text-blue-400/80">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="hidden md:inline text-muted-foreground mr-2">LIVE STREAM:</span>
                <AnimatePresence mode="wait">
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        {data[index]}
                    </motion.span>
                </AnimatePresence>
            </div>
        </div>
    );
}
