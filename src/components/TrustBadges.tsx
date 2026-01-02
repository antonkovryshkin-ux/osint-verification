import { ShieldCheck, Lock, EyeOff } from 'lucide-react';

export default function TrustBadges({ t }: { t?: any }) {
    // Fallback to default English if t is missing
    const text = t || {
        badge_enc: "256-bit Encryption",
        badge_anon: "100% Anonymous",
        badge_nologs: "No Logs Policy"
    };

    return (
        <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs text-muted-foreground/60">
            <div className="flex items-center gap-1.5">
                <Lock className="w-3 h-3" />
                <span>{text.badge_enc}</span>
            </div>
            <div className="flex items-center gap-1.5">
                <EyeOff className="w-3 h-3" />
                <span>{text.badge_anon}</span>
            </div>
            <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3" />
                <span>{text.badge_nologs}</span>
            </div>
        </div>
    );
}
