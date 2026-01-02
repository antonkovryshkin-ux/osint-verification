import { motion } from "framer-motion";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Testimonials({ t }: { t: any }) {
    const reviews = [
        {
            text: t?.t1_text,
            author: t?.t1_author,
            icon: User,
            color: "text-blue-400",
            bg: "bg-blue-500/10"
        },
        {
            text: t?.t2_text,
            author: t?.t2_author,
            icon: User,
            color: "text-purple-400",
            bg: "bg-purple-500/10"
        },
        {
            text: t?.t3_text,
            author: t?.t3_author,
            icon: User,
            color: "text-green-400",
            bg: "bg-green-500/10"
        },
        {
            text: t?.t4_text,
            author: t?.t4_author,
            icon: User,
            color: "text-amber-400",
            bg: "bg-amber-500/10"
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {t?.testimonials_title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:border-white/20 transition-all"
                        >
                            <div className="flex items-start gap-4">
                                <div className={cn("p-3 rounded-full shrink-0", review.bg)}>
                                    <review.icon className={cn("w-6 h-6", review.color)} />
                                </div>
                                <div>
                                    <p className="text-slate-300 italic mb-4 leading-relaxed">&quot;{review.text}&quot;</p>
                                    <p className="text-white font-bold text-sm tracking-wide">{review.author}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
