'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Terminal, Loader2 } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useScan } from '@/hooks/useScan'; // Ensure correct import path

interface ScanModalProps {
    isOpen: boolean;
    onClose: () => void;
    onComplete: () => void;
    target: string;
    t: any;
}

export default function ScanModal({ isOpen, onClose, onComplete, target, t }: ScanModalProps) {
    const { status, progress, logs, startScan, cancelScan } = useScan();
    const bottomRef = useRef<HTMLDivElement>(null);

    // Auto-start scan when modal opens
    useEffect(() => {
        if (isOpen) {
            startScan();
        } else {
            cancelScan();
        }
    }, [isOpen]);

    // Handle completion
    useEffect(() => {
        if (status === 'complete') {
            // Small delay before showing results
            const timer = setTimeout(() => {
                onComplete();
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [status, onComplete]);

    // Auto-scroll logs
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [logs]);

    // Focus trap (simple version)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/50">
                        <div className="flex items-center gap-2 text-blue-400">
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span className="font-mono text-sm tracking-wider">{t.title}</span>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-muted-foreground hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-1 w-full bg-slate-800">
                        <motion.div
                            className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                            style={{ width: `${progress}%` }}
                            transition={{ ease: "linear" }}
                        />
                    </div>

                    {/* Terminal Body */}
                    <div className="p-6 h-[400px] overflow-hidden flex flex-col font-mono text-xs md:text-sm bg-[#0a0f1e]">
                        <div className="flex-1 overflow-y-auto space-y-1.5 custom-scrollbar">
                            <div className="text-slate-500 mb-4">
                                OSINT Framework v4.2.0 initialized...<br />
                                Target architecture: x86_64-linux-gnu<br />
                                Modules loaded: 124/124
                            </div>

                            {logs.map((log, i) => {
                                if (!log) return null;
                                return (
                                    <div key={i} className={cn(
                                        "text-slate-300",
                                        log.includes("Match found") ? "text-green-400 font-bold" : "",
                                        log.includes("potential match") ? "text-yellow-400" : ""
                                    )}>
                                        {log}
                                    </div>
                                );
                            })}
                            <div ref={bottomRef} />
                        </div>

                        {/* Status Footer */}
                        <div className="mt-4 pt-3 border-t border-slate-800 text-slate-400 flex justify-between items-center">
                            <span>Status: {progress < 15 ? t.status_init : progress < 100 ? t.status_processing : t.status_complete}</span>
                            <span>{Math.round(progress)}%</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
