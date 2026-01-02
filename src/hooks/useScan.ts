import { useState, useEffect, useRef } from 'react';

export type ScanStatus = 'idle' | 'scanning' | 'complete' | 'cancelled';

const LOG_MESSAGES = [
    '> Initializing OSINT modules...',
    '> Handshaking with secure relays...',
    '> Encrypting outgoing traffic (AES-256)...',
    '> Establishing tunnel to EU-Central node...',
    '> Normalizing input... OK',
    '> Querying public endpoints...',
    '> Analyzing social graph...',
    '> [Trusted Service] Response received: 200 OK',
    '> Match found: Instagram (public trace)',
    '> Decrypting payload from archive node...',
    '> Checking: Google Cache...',
    '> Checking: WhatsApp Activity...',
    '> Checking: Telegram Bio...',
    '> [Secure] Cross-referencing dating databases...',
    '> Dating services... potential match found',
    '> Building evidence map...',
    '> Finalizing report encryption...',
    '> Done'
];

export function useScan() {
    const [status, setStatus] = useState<ScanStatus>('idle');
    const [progress, setProgress] = useState(0);
    const [logs, setLogs] = useState<string[]>([]);

    // Use refs to handle cleanup safely
    const progressInterval = useRef<NodeJS.Timeout | null>(null);
    const logsInterval = useRef<NodeJS.Timeout | null>(null);

    const startScan = () => {
        setStatus('scanning');
        setProgress(0);
        setLogs([]);

        // Progress logic: 15-20s total. 
        // Non-linear: Fast 0-30, Slow 30-80, Fast 80-100.
        let currentProgress = 0;
        const totalTime = 16000; // ~16s
        const tickRate = 100; // update every 100ms
        const totalTicks = totalTime / tickRate;
        let ticks = 0;

        progressInterval.current = setInterval(() => {
            ticks++;

            if (currentProgress >= 100) {
                completeScan();
                return;
            }

            // Non-linear logic
            let increment = 0;
            if (currentProgress < 30) {
                increment = 1.5; // Fast
            } else if (currentProgress < 80) {
                increment = 0.3; // Slow
            } else {
                increment = 2.0; // Fast finish
            }

            // Randomize slightly
            increment *= (0.8 + Math.random() * 0.4);

            currentProgress = Math.min(100, currentProgress + increment);
            setProgress(currentProgress);

        }, tickRate);

        // Logs logic
        let logIndex = 0;
        logsInterval.current = setInterval(() => {
            if (logIndex < LOG_MESSAGES.length) {
                setLogs(prev => [...prev, LOG_MESSAGES[logIndex]]);
                logIndex++;
            }
        }, totalTime / LOG_MESSAGES.length);
    };

    const completeScan = () => {
        if (progressInterval.current) clearInterval(progressInterval.current);
        if (logsInterval.current) clearInterval(logsInterval.current);
        setProgress(100);
        setStatus('complete');
    };

    const cancelScan = () => {
        if (progressInterval.current) clearInterval(progressInterval.current);
        if (logsInterval.current) clearInterval(logsInterval.current);
        setStatus('cancelled');
        setProgress(0);
        setLogs([]);
    };

    const resetScan = () => {
        setStatus('idle');
        setProgress(0);
        setLogs([]);
    };

    useEffect(() => {
        return () => {
            if (progressInterval.current) clearInterval(progressInterval.current);
            if (logsInterval.current) clearInterval(logsInterval.current);
        };
    }, []);

    return { status, progress, logs, startScan, cancelScan, resetScan };
}
