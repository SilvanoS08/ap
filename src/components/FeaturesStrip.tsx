import React from 'react';
import { TrendingUp, ShieldCheck, Leaf, Award, Building, Compass, Sparkles } from 'lucide-react';
import { REASONS_TO_BUY } from '../data/mockData';
import { InterestButton } from './InterestButton';

export const FeaturesStrip: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    TrendingUp: <TrendingUp className="w-6 h-6 text-amber-500" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-amber-500" />,
    Leaf: <Leaf className="w-6 h-6 text-amber-500" />,
    Award: <Award className="w-6 h-6 text-amber-500" />,
  };

  return (
    <section id="destaques" className="py-20 bg-[#fafaf8] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#9c6a1f] mb-2 block">
            Por que escolher o Lumière
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-4">
            Projetado para superar todas as suas expectativas
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Cada detalhe foi minuciosamente planejado para oferecer conforto térmico, isolamento acústico superior e um estilo de vida incomparável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {REASONS_TO_BUY.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm hover:shadow-md hover:border-amber-400/60 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {iconMap[item.icon] || <Sparkles className="w-6 h-6 text-amber-500" />}
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-[#9c6a1f] transition-colors">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Informative Banner with Direct Interest Button */}
        <div className="rounded-2xl bg-gradient-to-r from-stone-900 via-stone-950 to-stone-900 p-8 text-stone-100 border border-stone-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
              <Compass className="w-4 h-4" /> Plantas com Vistas Livres e Sol da Manhã
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Deseja conhecer as unidades disponíveis e a tabela de valores?
            </h3>
            <p className="text-stone-300 text-sm">
              Preencha o formulário e receba imediatamente o portfólio completo com plantas em alta resolução e condições de financiamento.
            </p>
          </div>
          <InterestButton
            id="destaques-cta-button"
            size="lg"
            variant="primary"
            label="Tenho Interesse"
            subtext="Acesso imediato ao material"
            className="w-full md:w-auto shrink-0 px-8 py-3.5"
          />
        </div>
      </div>
    </section>
  );
};
