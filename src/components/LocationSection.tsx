import React from 'react';
import { MapPin, Navigation, Trees, ShoppingBag, Train, GraduationCap, HeartPulse } from 'lucide-react';
import { LOCATION_HIGHLIGHTS, PROJECT_INFO } from '../data/mockData';
import { InterestButton } from './InterestButton';

export const LocationSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'parque':
        return <Trees className="w-5 h-5 text-emerald-600" />;
      case 'shopping':
        return <ShoppingBag className="w-5 h-5 text-purple-600" />;
      case 'transporte':
        return <Train className="w-5 h-5 text-blue-600" />;
      case 'educacao':
        return <GraduationCap className="w-5 h-5 text-amber-600" />;
      case 'saude':
        return <HeartPulse className="w-5 h-5 text-rose-600" />;
      default:
        return <MapPin className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <section id="localizacao" className="py-20 bg-[#fafaf8] border-b border-stone-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#9c6a1f] mb-2 block">
            Localização Privilegiada
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-4">
            No centro de tudo o que você mais valoriza
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Viva cercado por parques arborizados, alta gastronomia, escolas conceituadas e fácil mobilidade urbana.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Proximities List */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <div className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-amber-100 text-[#9c6a1f]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-900">
                    {PROJECT_INFO.address}
                  </h3>
                  <p className="text-xs text-stone-500">
                    {PROJECT_INFO.city} • Região nobre com segurança e infraestrutura completa
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {LOCATION_HIGHLIGHTS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-stone-200/70 hover:border-amber-400/50 shadow-sm transition-all flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2 rounded-lg bg-stone-100 group-hover:scale-105 transition-transform">
                      {getCategoryIcon(item.category)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-stone-800">
                        {item.place}
                      </h4>
                      <p className="text-xs text-stone-500 line-clamp-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 px-3 py-1 rounded-full bg-amber-50 text-[#8b6528] text-xs font-extrabold border border-amber-200/60">
                    {item.distance}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 flex items-center justify-between gap-4 shadow-md">
              <div>
                <span className="text-xs text-amber-400 font-semibold block">
                  Quer conhecer a vizinhança?
                </span>
                <p className="text-sm text-stone-200 font-medium">
                  Agende um tour guiado pela região e pelo estande.
                </p>
              </div>
              <InterestButton
                id="location-cta-button"
                size="md"
                variant="primary"
                label="Tenho Interesse"
                className="shrink-0"
              />
            </div>
          </div>

          {/* Map & Neighborhood Visual */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden bg-stone-900 border border-stone-200 shadow-xl relative min-h-[380px] flex flex-col justify-end p-6">
            <img
              src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80"
              alt="Vista aérea da região privilegiada do empreendimento"
              className="absolute inset-0 w-full h-full object-cover filter brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

            <div className="relative z-10 bg-stone-950/85 backdrop-blur-md p-5 rounded-2xl border border-stone-800 text-stone-200">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
                <Navigation className="w-4 h-4" /> Bairro Jardins Nobres
              </div>
              <p className="text-xs sm:text-sm text-stone-300 mb-3">
                Excelente índice de caminhabilidade (Walk Score 96). Farmácias, empórios gastronômicos, padarias artesanais e ciclofaixas conectadas.
              </p>
              <div className="flex items-center justify-between text-xs pt-2 border-t border-stone-800 text-stone-400">
                <span>Rua tranquila e arborizada</span>
                <span className="text-emerald-400 font-medium">Fácil acesso às avenidas principais</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
