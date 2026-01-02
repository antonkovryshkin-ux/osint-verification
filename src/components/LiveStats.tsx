"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Activity, Users } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function LiveStats({ t }: { t: any }) {
    // Base stats (starting from a high random number for social proof)
    // Logic: Base + (Seconds today * Rate)
    const [scans, setScans] = useState(14832);
    const [profiles, setProfiles] = useState(971);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setMounted(true);
        // Simulate live activity
        // Calculate seconds since start of day UTC
        const now = new Date();
        const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const secondsPassed = Math.floor((now.getTime() - startOfDay.getTime()) / 1000);

        // Dynamic base formula to ensure it always grows during the day
        // Scans rate: ~0.5 per second (approx 43k per day)
        // Profiles rate: ~0.05 per second (approx 4k per day)
        const baseScans = 12000 + Math.floor(secondsPassed * 0.4);
        const baseProfiles = 850 + Math.floor(secondsPassed * 0.04);

        setScans(baseScans);
        setProfiles(baseProfiles);

        const interval = setInterval(() => {
            // Randomly increment
            if (Math.random() > 0.3) {
                setScans((prev) => prev + 1);
            }
            if (Math.random() > 0.7) {
                setProfiles((prev) => prev + 1);
            }
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    if (!mounted) return null;

    return (
        <div className="w-full flex justify-center py-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex flex-wrap justify-center gap-4 md:gap-8 bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-full px-6 py-3 shadow-2xl"
            >
                <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-green-400 animate-pulse" />
                    <span className="text-slate-400 text-sm font-medium">{t?.scans_today}:</span>
                    <span className="text-white font-mono font-bold">{scans.toLocaleString()}</span>
                </div>
                <div className="hidden md:block w-px h-5 bg-slate-700"></div>
                <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span className="text-slate-400 text-sm font-medium">{t?.profiles_detected}:</span>
                    <span className="text-white font-mono font-bold">{profiles.toLocaleString()}</span>
                </div>
            </motion.div>
        </div>
    );
}
