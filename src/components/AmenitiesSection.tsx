import React, { useState } from 'react';
import { Waves, Dumbbell, UtensilsCrossed, Briefcase, Sparkles, Smile, CheckCircle2 } from 'lucide-react';
import { AMENITIES } from '../data/mockData';
import { InterestButton } from './InterestButton';

export const AmenitiesSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'lazer' | 'esporte' | 'bem-estar' | 'facilidade'>('all');

  const filteredAmenities = filter === 'all'
    ? AMENITIES
    : AMENITIES.filter((item) => item.category === filter);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Waves':
        return <Waves className="w-5 h-5 text-amber-500" />;
      case 'Dumbbell':
        return <Dumbbell className="w-5 h-5 text-amber-500" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-amber-500" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-amber-500" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'Smile':
        return <Smile className="w-5 h-5 text-amber-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section id="lazer" className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-400 mb-2 block">
            Resort Urbano Privativo
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Mais de 25 opções de lazer e bem-estar entregues equipadas e decoradas
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            Um clube particular aos seus pés, proporcionando momentos memoráveis para toda a família sem sair de casa.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'Todos os Ambientes' },
            { id: 'lazer', label: 'Lazer & Entretenimento' },
            { id: 'esporte', label: 'Saúde & Esportes' },
            { id: 'bem-estar', label: 'Relaxamento & Spa' },
            { id: 'facilidade', label: 'Facilidades & Coworking' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === cat.id
                  ? 'bg-amber-400 text-stone-950 shadow-md font-bold'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid of Amenities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredAmenities.map((amenity) => (
            <div
              key={amenity.id}
              className="rounded-2xl overflow-hidden bg-stone-950/80 border border-stone-800/80 hover:border-amber-400/50 transition-all duration-300 group flex flex-col justify-between shadow-lg"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-stone-950/80 backdrop-blur-md border border-stone-700/60 shadow">
                  {getIcon(amenity.iconName)}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {amenity.title}
                  </h3>
                  <p className="text-stone-400 text-sm leading-relaxed mb-4">
                    {amenity.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-400">
                  <span className="flex items-center gap-1.5 text-amber-400/90 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Entregue Decorado
                  </span>
                  <span className="uppercase text-[10px] tracking-wider text-stone-500">
                    {amenity.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Interest Button */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
              Quer ver o projeto de interiores e o tour virtual do lazer?
            </h3>
            <p className="text-stone-300 text-sm">
              Clique no botão e solicite o memorial descritivo com todas as especificações e plantas das áreas comuns.
            </p>
          </div>
          <InterestButton
            id="amenities-cta-button"
            size="lg"
            variant="primary"
            label="Tenho Interesse"
            subtext="Receba o tour virtual 360°"
            className="w-full sm:w-auto shrink-0 px-8 py-3.5"
          />
        </div>
      </div>
    </section>
  );
};
