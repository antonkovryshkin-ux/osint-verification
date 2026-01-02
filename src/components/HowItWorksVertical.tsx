import { motion } from "framer-motion";
import { Search, Globe, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function HowItWorksVertical({ t }: { t: any }) {
    const steps = [
        {
            icon: Search,
            title: t?.step1_title || "Enter Target Info",
            description: t?.step1_desc || "Provide username, email, or phone number",
            color: "blue",
            time: null
        },
        {
            icon: Globe,
            title: t?.step2_title || "Global Scan",
            description: t?.step2_desc || "AI scans 50+ networks in real-time",
            color: "purple",
            time: t?.step2_time
        },
        {
            icon: FileText,
            title: t?.step3_title || "Receive Report",
            description: t?.step3_desc || "Get a detailed PDF report instantly",
            color: "green",
            time: t?.step3_time
        }
    ];

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                        {t?.title}
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="relative">
                        <div className="space-y-12">
                            {steps.map((step, index) => {
                                // Determine gradient colors for the connecting line
                                const nextStep = steps[index + 1];
                                const currentGradient = step.color === "blue" ? "from-blue-600" : step.color === "purple" ? "from-purple-600" : "from-green-600";
                                const nextGradient = nextStep?.color === "blue" ? "to-blue-600" : nextStep?.color === "purple" ? "to-purple-600" : "to-green-600";

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 }}
                                        className={cn(
                                            "relative flex flex-row gap-8 items-start",
                                            "md:flex-row"
                                        )}
                                    >
                                        {/* Connecting Line (Per Step) */}
                                        {index !== steps.length - 1 && (
                                            <div className="absolute left-8 top-8 w-1 bg-slate-800 h-[calc(100%+3rem)] -translate-x-1/2 z-0">
                                                <motion.div
                                                    initial={{ height: 0 }}
                                                    whileInView={{ height: "100%" }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.8, delay: 0.2 }}
                                                    className={cn(
                                                        "w-full bg-gradient-to-b origin-top",
                                                        currentGradient,
                                                        nextGradient
                                                    )}
                                                />
                                            </div>
                                        )}

                                        {/* Icon Marker */}
                                        <div className={cn(
                                            "relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center border-4 border-slate-950 shadow-xl",
                                            step.color === "blue" ? "bg-blue-600" :
                                                step.color === "purple" ? "bg-purple-600" : "bg-green-600"
                                        )}>
                                            <step.icon className="w-8 h-8 text-white" />
                                        </div>

                                        {/* Card */}
                                        <div className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                                                {step.time && (
                                                    <span className={cn(
                                                        "text-xs font-mono py-1 px-2 rounded-full border",
                                                        step.color === "green"
                                                            ? "bg-green-500/20 text-green-300 border-green-500/30"
                                                            : "bg-slate-700 text-slate-300 border-slate-600"
                                                    )}>
                                                        {step.time}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-slate-400">{step.description}</p>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
