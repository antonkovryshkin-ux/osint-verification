'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import EvidenceTicker from '@/components/EvidenceTicker';
import ScanModal from '@/components/ScanModal';
import PartialResults from '@/components/PartialResults';
import ValueProposition from '@/components/ValueProposition';
import LanguageSelector from '@/components/LanguageSelector';
import { translations, type Language } from '@/lib/i18n';
import { HowItWorksVertical } from '@/components/HowItWorksVertical'; // Added this import

export default function Home() {
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'results'>('idle');
  const [target, setTarget] = useState('');
  const [lang, setLang] = useState<Language>('en'); // Default to English as per new global focus

  const t = translations[lang];

  const handleStartScan = (query: string) => {
    setTarget(query);
    setScanState('scanning');
  };

  const handleScanComplete = () => {
    setScanState('results');
  };

  const handleScanCancel = () => {
    setScanState('idle');
    setTarget('');
  };

  return (
    <main className="flex min-h-screen flex-col relative bg-slate-950 overflow-x-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="absolute top-4 right-4 z-50">
        <LanguageSelector currentLang={lang} onSelect={setLang} />
      </div>

      <div className="relative z-10 flex-1 flex flex-col">
        {scanState === 'results' ? (
          <PartialResults t={t.results} lang={lang} />
        ) : (
          <>
            <Hero onStartScan={handleStartScan} isScanning={scanState === 'scanning'} t={t.hero} />
            <HowItWorksVertical t={t.how_it_works} />
            <ValueProposition t={t.value_prop} bentoTexts={t.bento} />
          </>
        )}
      </div>

      <EvidenceTicker lang={lang} />

      <ScanModal
        isOpen={scanState === 'scanning'}
        onClose={handleScanCancel}
        onComplete={handleScanComplete}
        target={target}
        t={t.modal}
      />

      <footer className="relative z-10 py-6 text-center text-xs text-muted-foreground/30 border-t border-slate-900 bg-slate-950">
        <p>© 2026 OSINT Verification. All rights reserved.</p>
        <p className="mt-1">
          {lang === 'de' ? 'Haftungsausschluss: Wir verwenden nur öffentlich zugängliche Daten.' :
            lang === 'ru' ? 'Дисклеймер: Мы используем данные только из открытых источников.' :
              'Disclaimer: We use only publicly available data (OSINT). We do not hack accounts.'}
        </p>
      </footer>
    </main>
  );
}
