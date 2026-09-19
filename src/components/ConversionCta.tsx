import React from 'react';
import { Sparkles, ShieldCheck, FileCheck, PhoneCall, Clock, CheckCircle } from 'lucide-react';
import { InterestButton } from './InterestButton';

export const ConversionCta: React.FC = () => {
  return (
    <section id="conversao-final" className="py-24 bg-stone-950 text-stone-100 relative overflow-hidden">
      {/* Background visual glow */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          alt="Edifício Residencial"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-950/90" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>GARANTA SUA UNIDADE NA MELHOR POSIÇÃO SOLAR</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
          Pronto para viver o melhor capítulo da sua vida?
        </h2>

        <p className="text-stone-300 text-base sm:text-xl max-w-2xl mx-auto mb-10 font-light">
          Clique no botão abaixo, preencha o formulário rápido de interesse e receba a tabela exclusiva com condições facilitadas de aquisição.
        </p>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12 text-left">
          <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-800 flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-white">Tabela de Preços Oficial</h4>
              <p className="text-xs text-stone-400">Valores atualizados e fluxo de parcelamento na obra.</p>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-800 flex items-start gap-3">
            <FileCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-white">Book Digital de Plantas</h4>
              <p className="text-xs text-stone-400">Dimensões completas de cada ambiente em alta resolução.</p>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-800 flex items-start gap-3">
            <PhoneCall className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-white">Consultor Especialista</h4>
              <p className="text-xs text-stone-400">Atendimento personalizado sem pressão de vendas.</p>
            </div>
          </div>
        </div>

        {/* Huge CTA Button */}
        <div className="max-w-md mx-auto mb-6">
          <InterestButton
            id="final-conversion-cta-button"
            size="xl"
            variant="primary"
            label="Tenho Interesse"
            subtext="Clique para abrir o formulário oficial do Google"
            className="w-full py-5 text-xl font-black shadow-2xl shadow-amber-500/20"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-stone-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Dados 100% seguros e protegidos
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-amber-400" />
            Retorno em menos de 1 hora
          </span>
        </div>
      </div>
    </section>
  );
};
