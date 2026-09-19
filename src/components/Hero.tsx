import React from 'react';
import { Sparkles, MapPin, CheckCircle2, ArrowDown, ShieldCheck, Clock, Calendar } from 'lucide-react';
import { PROJECT_INFO } from '../data/mockData';
import { InterestButton } from './InterestButton';

export const Hero: React.FC = () => {
  return (
    <section id="hero-section" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-stone-950">
      {/* Background Architectural Visual with Rich Dark Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=85"
          alt="Edifício Residencial de Alto Padrão Fachada Noturna"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.42] contrast-[1.08]"
        />
        {/* Multilayer gradient for optimal contrast and warmth */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/15 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 text-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold mb-6 tracking-wide backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>ÚLTIMAS UNIDADES COM CONDIÇÕES ESPECIAIS DE PRÉ-LANÇAMENTO</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-stone-100 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6">
          Venda de Apartamentos de Alto Padrão no{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#edd08c] via-[#dfb158] to-[#c6933a]">
            Coração dos Jardins
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-base sm:text-xl text-stone-300 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
          Viva a sofisticação e o bem-estar absoluto em plantas inteligentes de{' '}
          <strong className="text-amber-200 font-semibold">68m² a 184m²</strong>, 2 a 4 dormitórios com varanda gourmet e infraestrutura de resort privativo.
        </p>

        {/* Location & Delivery Mini-Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-stone-300 mb-10">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900/80 border border-stone-800">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>{PROJECT_INFO.address}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900/80 border border-stone-800">
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>Entrega Prevista: {PROJECT_INFO.deliveryDate}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900/80 border border-stone-800">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Patrimônio de Afetação 100% Blindado</span>
          </div>
        </div>

        {/* Primary CTA Area */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-6">
          <InterestButton
            id="hero-main-cta"
            size="xl"
            variant="primary"
            label="Tenho Interesse"
            subtext="Receba tabela oficial & book completo"
            className="w-full sm:w-auto px-10 py-4 text-lg"
          />
          <a
            href="#plantas"
            className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-4 rounded-2xl bg-stone-900/90 hover:bg-stone-800 text-stone-200 border border-stone-700 hover:border-amber-400/50 font-semibold text-base transition-all duration-200 backdrop-blur-sm"
          >
            Ver Plantas & Detalhes
          </a>
        </div>

        <p className="text-xs text-stone-400 flex items-center justify-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
          <span>Sem compromisso • Atendimento personalizado via WhatsApp ou ligação</span>
        </p>

        {/* Quick Highlights Bar */}
        <div className="mt-14 pt-8 border-t border-stone-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="p-4 rounded-xl bg-stone-900/40 border border-stone-800/60 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-display">68 a 184m²</div>
            <div className="text-xs sm:text-sm text-stone-300 mt-0.5">Plantas Inteligentes</div>
          </div>
          <div className="p-4 rounded-xl bg-stone-900/40 border border-stone-800/60 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-display">2 a 4 Dorms</div>
            <div className="text-xs sm:text-sm text-stone-300 mt-0.5">1 a 3 Suítes Plenas</div>
          </div>
          <div className="p-4 rounded-xl bg-stone-900/40 border border-stone-800/60 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-display">1 a 3 Vagas</div>
            <div className="text-xs sm:text-sm text-stone-300 mt-0.5">Garagem Coberta</div>
          </div>
          <div className="p-4 rounded-xl bg-stone-900/40 border border-stone-800/60 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-display">+25 Itens</div>
            <div className="text-xs sm:text-sm text-stone-300 mt-0.5">Lazer de Resort Urbano</div>
          </div>
        </div>
      </div>

      {/* Down indicator */}
      <a
        href="#destaques"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 text-stone-400 hover:text-amber-400 transition-colors p-2 z-10 hidden sm:block animate-bounce"
        aria-label="Rolar para os destaques"
      >
        <ArrowDown className="w-5 h-5" />
      </a>
    </section>
  );
};
