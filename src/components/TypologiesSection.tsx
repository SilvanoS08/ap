import React, { useState } from 'react';
import { Bed, Bath, Car, Maximize2, Check, Sparkles, Image as ImageIcon, FileText } from 'lucide-react';
import { TYPOLOGIES } from '../data/mockData';
import { InterestButton } from './InterestButton';

export const TypologiesSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(TYPOLOGIES[0].id);
  const [viewMode, setViewMode] = useState<'render' | 'floorplan'>('render');

  const activeTypology = TYPOLOGIES.find((t) => t.id === selectedId) || TYPOLOGIES[0];

  return (
    <section id="plantas" className="py-20 bg-stone-100/70 border-b border-stone-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#9c6a1f] mb-2 block">
            Plantas & Tipologias
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-4">
            Escolha o espaço ideal para o seu estilo de vida
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Apartamentos funcionais, ventilados e iluminados, projetados com aproveitamento inteligente de cada metro quadrado.
          </p>
        </div>

        {/* Typology Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {TYPOLOGIES.map((typology) => {
            const isSelected = typology.id === selectedId;
            return (
              <button
                key={typology.id}
                id={`tab-typology-${typology.id}`}
                onClick={() => setSelectedId(typology.id)}
                className={`px-4 sm:px-6 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 cursor-pointer flex items-center gap-2 shadow-sm ${
                  isSelected
                    ? 'bg-stone-900 text-amber-300 shadow-md border border-stone-800 scale-[1.02]'
                    : 'bg-white text-stone-700 hover:bg-stone-50 border border-stone-200'
                }`}
              >
                <span className="font-display font-bold">{typology.area}</span>
                <span className="text-xs opacity-80 hidden sm:inline">({typology.bedrooms} dorms)</span>
              </button>
            );
          })}
        </div>

        {/* Active Typology Showcase Card */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Display: Image with Toggle */}
            <div className="lg:col-span-7 relative bg-stone-900 min-h-[380px] sm:min-h-[480px] flex flex-col justify-between p-6 overflow-hidden">
              <img
                src={viewMode === 'render' ? activeTypology.image : activeTypology.floorPlanImage}
                alt={activeTypology.name}
                className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/30" />

              {/* View Switcher Controls */}
              <div className="relative z-10 flex items-center gap-2 self-start bg-stone-950/80 backdrop-blur-md p-1.5 rounded-xl border border-stone-700/80">
                <button
                  type="button"
                  onClick={() => setViewMode('render')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    viewMode === 'render'
                      ? 'bg-amber-500 text-stone-950'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  Perspectiva 3D
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('floorplan')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    viewMode === 'floorplan'
                      ? 'bg-amber-500 text-stone-950'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  Planta Humanizada
                </button>
              </div>

              {/* Floating Bottom Pill Info */}
              <div className="relative z-10 bg-stone-950/80 backdrop-blur-md p-4 rounded-2xl border border-stone-800 text-stone-200">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="text-xs uppercase font-medium text-amber-400 tracking-wider">
                      Valor estimado de lançamento
                    </span>
                    <div className="text-lg sm:text-2xl font-bold text-white">
                      {activeTypology.priceFrom}
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
                    Condição Especial de Obra
                  </span>
                </div>
              </div>
            </div>

            {/* Specifications & Details */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#9c6a1f]">
                    Tipologia Selecionada
                  </span>
                  <span className="text-sm font-extrabold text-stone-900 bg-amber-100 text-amber-900 px-3 py-1 rounded-full">
                    {activeTypology.area}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
                  {activeTypology.name}
                </h3>
                <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                  {activeTypology.tagline}
                </p>

                {/* Key Room Metrics */}
                <div className="grid grid-cols-4 gap-2 sm:gap-3 p-4 rounded-2xl bg-stone-50 border border-stone-200/80 mb-6 text-center">
                  <div className="flex flex-col items-center">
                    <Maximize2 className="w-4 h-4 text-[#9c6a1f] mb-1" />
                    <span className="text-xs text-stone-500">Área</span>
                    <span className="text-sm font-bold text-stone-800">{activeTypology.area}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Bed className="w-4 h-4 text-[#9c6a1f] mb-1" />
                    <span className="text-xs text-stone-500">Dorms</span>
                    <span className="text-sm font-bold text-stone-800">{activeTypology.bedrooms}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Bath className="w-4 h-4 text-[#9c6a1f] mb-1" />
                    <span className="text-xs text-stone-500">Suítes</span>
                    <span className="text-sm font-bold text-stone-800">{activeTypology.suites}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Car className="w-4 h-4 text-[#9c6a1f] mb-1" />
                    <span className="text-xs text-stone-500">Vagas</span>
                    <span className="text-sm font-bold text-stone-800">{activeTypology.parkingSpots}</span>
                  </div>
                </div>

                {/* Feature Checklist */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                    Diferenciais desta unidade:
                  </h4>
                  <ul className="space-y-2.5">
                    {activeTypology.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                        <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button: Directly "Tenho Interesse" */}
              <div className="pt-6 border-t border-stone-200">
                <InterestButton
                  id={`cta-interest-typology-${activeTypology.id}`}
                  size="lg"
                  variant="primary"
                  label={`Tenho Interesse na Planta de ${activeTypology.area}`}
                  subtext="Receba a disponibilidade e tabela deste modelo"
                  className="w-full py-4 text-base"
                />
                <p className="text-center text-[11px] text-stone-500 mt-2">
                  Atendimento direto com os especialistas do empreendimento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
