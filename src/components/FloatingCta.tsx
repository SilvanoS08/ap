import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { InterestButton } from './InterestButton';

export const FloatingCta: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after user scrolls past 350px
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      id="floating-interest-bar"
      aria-label="Atendimento e interesse no imóvel"
      className="fixed bottom-0 left-0 right-0 z-40 p-3 sm:p-4 bg-stone-950/95 backdrop-blur-xl border-t border-stone-800/90 shadow-2xl animate-in slide-in-from-bottom duration-300 sm:bottom-6 sm:right-6 sm:left-auto sm:max-w-md sm:rounded-2xl sm:border sm:border-stone-800 sm:p-3 sm:shadow-black/50"
    >
      <div className="flex items-center justify-between sm:justify-start gap-3">
        <div className="hidden sm:flex flex-col">
          <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> Condições de Lançamento
          </span>
          <span className="text-xs text-stone-300 font-medium">
            Últimas unidades disponíveis
          </span>
        </div>

        <InterestButton
          id="floating-tenho-interesse-button"
          size="md"
          variant="primary"
          label="Tenho Interesse"
          subtext="Preencher formulário"
          className="w-full sm:w-auto text-sm px-6 py-2.5 font-bold shadow-lg"
        />
      </div>
    </aside>
  );
};
