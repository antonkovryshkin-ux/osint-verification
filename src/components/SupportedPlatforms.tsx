"use client";

// SVG Logos as components for cleaner usage
const TinderLogo = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
        <path d="M9.317 9.451c.045.073.123.12.212.12.06 0 .116-.021.158-.057l.015-.012c.39-.325.741-.66 1.071-1.017 3.209-3.483 1.335-7.759 1.32-7.799-.09-.21-.03-.459.15-.594.195-.135.435-.12.615.033 10.875 10.114 7.995 17.818 7.785 18.337-.87 3.141-4.335 5.414-8.444 5.53-.138.008-.242.008-.363.008-4.852 0-8.977-2.989-8.977-6.807v-.06c0-5.297 4.795-10.522 5.009-10.744.136-.149.345-.195.525-.105.18.076.297.255.291.451-.043 1.036.167 1.935.631 2.7v.015l.002.001z" />
    </svg>
);

const BumbleLogo = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
        <path d="M4.1 6.35C3.35 6.35 2.7 6.9 2.5 7.6L2 9.55L2.1 11.05L2.55 12.8L2.05 14.45L2.5 16.4C2.7 17.1 3.35 17.65 4.1 17.65H5.8L6.75 16.9H13.6L14.45 17.65H19.9C20.65 17.65 21.3 17.1 21.5 16.4L21.95 14.45L21.45 12.8L21.9 11.05L22 9.55L21.5 7.6C21.3 6.9 20.65 6.35 19.9 6.35H18.25H16.2H14.45L13.6 7.1H10.4L9.5 6.35H7.8H5.75H4.1ZM15.35 14.9H16.65L16.2 13.65L16.7 12H15.15V14.9ZM18.9 14.9H20.2V12H18.75L19.2 13.6L18.9 14.9ZM7.35 14.9H8.65L8.2 13.6L8.65 12H7.1V14.9ZM3.8 14.9H5.1V12H3.55L4 13.65L3.8 14.9ZM16.6 9.1L15.3 10.35H16.7L16.25 12H18.7L19.15 10.6L18.7 9.1H16.6ZM7.1 9.1L6.65 10.6L7.1 12H9.55L9.1 10.35L7.85 9.1H7.1ZM12 7.7C13.2 7.7 14.2 8.7 14.2 9.9V14.1C14.2 15.3 13.2 16.3 12 16.3C10.8 16.3 9.8 15.3 9.8 14.1V9.9C9.8 8.7 10.8 7.7 12 7.7Z" />
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
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
);

const TelegramLogo = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
        <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.75-.33 1.42.15 1.16 1.39l-2.71 12.8c-.19.89-.69.97-1.43.59l-3.94-2.93-1.9 1.83c-.21.21-.4.4-.82.4z" />
    </svg>
);

const BadooLogo = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
        <path d="M17.68 2.809c3.392 0 6.32 2.788 6.32 6.228 0 6.71-6.6 12.158-12 12.158S0 15.748 0 9.037c0-3.44 2.928-6.228 6.32-6.228 4.128 0 5.578 3.179 5.68 3.411a6.079 6.079 0 0 1 5.67-3.411zm1.078 6.488V9.11h-2.38v.186c0 2.352-1.97 4.276-4.378 4.276-2.417 0-4.369-1.924-4.369-4.276V9.11H5.233v.186c0 1.766.697 3.42 1.98 4.666a6.795 6.795 0 0 0 4.778 1.933 6.797 6.797 0 0 0 4.777-1.933 6.488 6.488 0 0 0 1.98-4.666Z" />
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
