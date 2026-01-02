"use client";

// SVG Logos as components for cleaner usage
const TinderLogo = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
        <path d="M12.87 2.05c-1.39.26-2.58 1.15-3.66 2.11C7.8 5.51 7.24 7.24 7.63 9.09c.14.7.45 1.48.33 2.19-.11.66-.54 1.25-1.12 1.57-1.25.68-2.61-.43-2.68-1.77-.04-.66.19-1.29.19-1.94 0-1.89-1.1-3.63-2.81-4.32-.47-.19-1.14-.14-1.25.43-.09.47.26.87.52 1.25 1.63 2.45 1.5 5.86-.33 8.35-1.4 1.9-1.42 4.41-.05 6.32 1.62 2.26 4.67 3.39 7.37 2.72 2.76-.69 4.93-3 5.37-5.81.25-1.63-.12-3.32-1.07-4.68-.45-.65-.79-1.43-.52-2.22.25-.74.96-1.19 1.69-1.36 1.45-.33 2.58.94 2.87 2.3.17.81.04 1.69.45 2.42.4.72 1.27 1.07 2.07 1.14 1.45.13 2.84-.79 3.23-2.18.57-2.02-.14-4.27-1.61-5.74C18.66 6.09 17.5 4.3 15.68 3.1c-1.09-.72-2.65-.96-3.88-.1l1.07-.95z" />
    </svg>
);

const BumbleLogo = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
);

const InstagramLogo = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
    </svg>
);

const FacebookLogo = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
        <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
    </svg>
);

const WhatsAppLogo = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2z" />
    </svg>
);

const TelegramLogo = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
        <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.75-.33 1.42.15 1.16 1.39l-2.71 12.8c-.19.89-.69.97-1.43.59l-3.94-2.93-1.9 1.83c-.21.21-.4.4-.82.4z" />
    </svg>
);

const BadooLogo = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
        <path d="M11.98 2C6.47 2 2.02 6.47 2.02 11.99c0 5.51 4.45 9.99 9.96 9.99 5.5 0 9.97-4.48 9.97-9.99 0-5.52-4.47-9.99-9.97-9.99zm5.74 13.1c-.88 1.2-2.14 1.89-3.66 1.89-1.28 0-2.32-.47-3.08-1.29-.76.82-1.8 1.29-3.08 1.29-1.52 0-2.77-.69-3.66-1.89-.64-.86-.88-1.89-.69-2.92.29-1.58 1.53-2.7 2.92-2.7.99 0 1.85.5 2.4 1.27.56.78.69 1.76.35 2.65-.18.47-.46.88-.81 1.2-.5.46-1.12.67-1.74.67-1.13 0-2.07-.84-2.22-1.99 0-.05-.01-.1-.01-.15 0-.09.01-.18.02-.27.05-.28.16-.54.32-.77.16-.23.36-.42.6-.57.24-.15.51-.23.8-.23.46 0 .89.2.94.21.36-.49.56-1.07.56-1.7 0-1.66-1.34-3-3-3s-3 1.34-3 3c0 1.32.86 2.43 2.05 2.84 0 0 .01 0 .01 0 .61.21 1.05.79 1.05 1.47 0 .86-.71 1.56-1.57 1.56-.47 0-.9-.21-1.2-.55-.3-.34-.47-.8-.47-1.29 0-.5.17-.96.47-1.3.31-.35.74-.56 1.21-.56.45 0 .86.19 1.15.51.3.32.48.75.48 1.23 0 .15-.02.29-.06.43-.13.43-.53.74-.99.74-.3 0-.57-.14-.73-.39-.16-.25-.2-.55-.12-.83.05-.18.15-.33.28-.45.13-.12.29-.18.47-.18s.35.07.48.2c.13.13.2.3.2.49 0 .19-.07.36-.2.49-.13.13-.31.2-.5.2s-.37-.08-.49-.22c-.12-.13-.19-.31-.19-.49 0-.19.07-.36.19-.49.13-.13.31-.2.49-.2s.37.08.49.22c.12.13.19.31.19.49 0 .19-.07.36-.19.49-.13.13-.31.2-.49.2z" />
    </svg>
);

const PLATFORMS = [
    { name: "Tinder", Logo: TinderLogo, color: "hover:text-pink-500" },
    { name: "Instagram", Logo: InstagramLogo, color: "hover:text-purple-500" },
    { name: "WhatsApp", Logo: WhatsAppLogo, color: "hover:text-green-500" },
    { name: "Telegram", Logo: TelegramLogo, color: "hover:text-blue-400" },
    { name: "Badoo", Logo: BadooLogo, color: "hover:text-orange-500" },
    { name: "Facebook", Logo: FacebookLogo, color: "hover:text-blue-600" },
    { name: "Bumble", Logo: BumbleLogo, color: "hover:text-yellow-400" }
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function SupportedPlatforms({ t }: { t: any }) {
    return (
        <section className="py-12 relative overflow-hidden bg-slate-950 border-t border-slate-900 border-b">
            <div className="container mx-auto px-4 mb-8 text-center">
                <h2 className="text-xl md:text-2xl font-bold text-slate-400">
                    {t?.title}
                </h2>
            </div>

            <div className="relative flex overflow-hidden group">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>

                {/* Marquee Animation */}
                <div className="flex animate-marquee gap-16 whitespace-nowrap py-4">
                    {/* Duplicate 3 times to ensure smooth loop on wide screens */}
                    {[...PLATFORMS, ...PLATFORMS, ...PLATFORMS].map((p, i) => (
                        <div
                            key={i}
                            className={`flex flex-col items-center gap-2 text-slate-600 transition-colors duration-300 transform hover:scale-110 cursor-pointer ${p.color}`}
                        >
                            <p.Logo />
                            <span className="text-xs font-mono opacity-50">{p.name}</span>
                        </div>
                    ))}
                </div>

                {/* Second layer for seamless loop (Tailwind animate-marquee handles this usually, keeping it simple for now) */}
            </div>

            <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
            animation-play-state: paused;
        }
      `}</style>
        </section>
    );
}
