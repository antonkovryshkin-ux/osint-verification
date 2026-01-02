import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { MapPin, User, Activity, CheckCircle, Smartphone, Globe, Shield } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function BentoFeatures({ t }: { t: any }) {
    // Dynamic Location Logic
    const [locationIndex, setLocationIndex] = useState(0);

    const locations = [
        { name: "Paris, FR", top: "29%", left: "50%" },
        { name: "New York, US", top: "32%", left: "29%" },
        { name: "Tokyo, JP", top: "34%", left: "87%" },
        { name: "London, UK", top: "27%", left: "49%" },
        { name: "Sydney, AU", top: "64%", left: "86%" },
        { name: "Rio, BR", top: "59%", left: "34%" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setLocationIndex((prev) => (prev + 1) % locations.length);
        }, 7000);
        return () => clearInterval(interval);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const currentLocation = locations[locationIndex];

    return (
        <div className="w-full max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">

            {/* ... (Social Profiles Card Omitted) ... */}

            {/* Card 2: Location Data (Vertical) */}
            <div className="md:col-span-1 row-span-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-500">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent" />

                <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div className="p-2 bg-emerald-500/20 rounded-xl">
                        <MapPin className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{t?.location_data}</h3>
                </div>

                <div className="relative h-64 w-full bg-slate-900/50 rounded-2xl border border-white/10 overflow-hidden">
                    {/* Abstract Map UI - Changed to bg-contain to ensure accurate coordinates */}
                    <div className="absolute inset-0 opacity-30 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-contain bg-center bg-no-repeat" />

                    <motion.div
                        // Animate position changes
                        animate={{ top: currentLocation.top, left: currentLocation.left }}
                        transition={{ type: "spring", stiffness: 50, damping: 20 }}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                    >
                        <div className="relative">
                            <div className="w-4 h-4 bg-emerald-500 rounded-full z-10 relative box-content border-2 border-slate-900" />
                            <div className="absolute inset-0 bg-emerald-500/50 rounded-full animate-ping" />
                        </div>
                    </motion.div>

                    {/* Location Cards */}
                    <div className="absolute bottom-3 left-3 right-3 space-y-2">
                        <div className="bg-slate-800/90 backdrop-blur text-xs p-2 rounded-lg border border-white/10 flex justify-between items-center">
                            <span className="text-slate-300">Last Seen</span>
                            <span className="text-emerald-400 font-mono">{currentLocation.name}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card 3: Status Updates (Small) */}
            <div className="md:col-span-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col justify-center items-center group hover:border-purple-500/30 transition-all duration-500">
                <div className="relative mb-3">
                    <Activity className="w-8 h-8 text-purple-400" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-slate-900" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">{t?.status_updates}</h4>
                <span className="text-sm text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                    {t?.active_now}
                </span>
            </div>

            {/* Card 4: Device/Tech (Small) */}
            <div className="md:col-span-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col justify-center items-center group hover:border-orange-500/30 transition-all duration-500">
                <Smartphone className="w-8 h-8 text-orange-400 mb-3" />
                <h4 className="text-lg font-bold text-white mb-1">Device Info</h4>
                <span className="text-sm text-slate-400">iOS • iPhone 14 Pro</span>
            </div>

            {/* Card 5: Security (Wide) */}
            <div className="md:col-span-1 bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex items-center justify-between group hover:border-white/30 transition-all duration-500">
                <div>
                    <h4 className="text-lg font-bold text-white mb-1">100% Anonymous</h4>
                    <p className="text-xs text-slate-300 max-w-[150px]">No logs. No traces. Private.</p>
                </div>
                <Shield className="w-10 h-10 text-white opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>

        </div>
    );
}
