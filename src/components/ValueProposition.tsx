import { BentoFeatures } from "./BentoFeatures";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ValueProposition({ t, bentoTexts }: { t: any, bentoTexts: any }) {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        {t.title} <br />
                        {t.subtitle}
                    </h2>
                    <p className="text-slate-400 text-lg">
                        {t.subtitle}
                    </p>
                </div>

                {/* New Bento Features Component */}
                <BentoFeatures t={bentoTexts} />

            </div>
        </section>
    );
}
