import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/mockData';
import { InterestButton } from './InterestButton';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [modalImageIndex, setModalImageIndex] = useState<number | null>(null);

  const categories = [
    { id: 'todos', label: 'Todas as Fotos' },
    { id: 'fachada', label: 'Fachada & Arquitetura' },
    { id: 'decorado', label: 'Apartamento Decorado' },
    { id: 'interiores', label: 'Interiores & Detalhes' },
    { id: 'lazer', label: 'Áreas de Lazer' },
  ];

  const filteredItems = activeCategory === 'todos'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleNext = () => {
    if (modalImageIndex !== null) {
      setModalImageIndex((modalImageIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const handlePrev = () => {
    if (modalImageIndex !== null) {
      setModalImageIndex((modalImageIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  return (
    <section id="galeria" className="py-20 bg-[#fafaf8] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-[#9c6a1f] mb-2 block">
            Galeria de Fotos & Perspectivas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-4">
            Conheça cada detalhe do empreendimento
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Um vislumbre da imponência arquitetônica e do acabamento refinado que aguardam você e sua família.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-stone-900 text-amber-300 shadow-md'
                  : 'bg-white text-stone-700 hover:bg-stone-50 border border-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item, idx) => {
            const originalIndex = GALLERY_ITEMS.findIndex((g) => g.id === item.id);
            return (
              <div
                key={item.id}
                onClick={() => setModalImageIndex(originalIndex)}
                className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-stone-950/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-amber-400" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <span className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-300 line-clamp-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive CTA after Gallery */}
        <div className="text-center bg-amber-500/10 border border-amber-500/30 rounded-3xl p-8 max-w-3xl mx-auto">
          <div className="inline-flex p-3 rounded-full bg-amber-500/20 text-[#9c6a1f] mb-3">
            <Eye className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-stone-900 mb-2">
            Agende uma visita ao Apartamento Decorado
          </h3>
          <p className="text-stone-600 text-sm max-w-lg mx-auto mb-6">
            Sinta na prática a amplitude dos ambientes e o requinte dos acabamentos. Reserve um horário exclusivo com nossa equipe.
          </p>
          <InterestButton
            id="gallery-schedule-cta"
            size="lg"
            variant="primary"
            label="Tenho Interesse em Visitar o Decorado"
            subtext="Entraremos em contato para confirmar o dia e horário"
            className="px-8 py-4"
          />
        </div>
      </div>

      {/* Lightbox Modal */}
      {modalImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setModalImageIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setModalImageIndex(null)}
              className="absolute -top-12 right-0 sm:right-2 p-2 rounded-full bg-stone-800/80 text-stone-300 hover:text-white hover:bg-stone-700 transition-colors"
              aria-label="Fechar visualização"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Main Image */}
            <div className="relative w-full rounded-2xl overflow-hidden max-h-[70vh] flex items-center justify-center bg-stone-950">
              <img
                src={GALLERY_ITEMS[modalImageIndex].imageUrl}
                alt={GALLERY_ITEMS[modalImageIndex].title}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl"
              />

              {/* Prev / Next buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-950/70 text-white hover:bg-stone-900 border border-stone-800 transition-colors"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-950/70 text-white hover:bg-stone-900 border border-stone-800 transition-colors"
                aria-label="Próxima foto"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Caption & Modal CTA */}
            <div className="w-full mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
              <div>
                <h4 className="text-lg font-bold text-amber-300">
                  {GALLERY_ITEMS[modalImageIndex].title}
                </h4>
                <p className="text-xs sm:text-sm text-stone-400">
                  {GALLERY_ITEMS[modalImageIndex].description}
                </p>
              </div>
              <InterestButton
                id="modal-lightbox-cta"
                size="md"
                variant="primary"
                label="Tenho Interesse"
                className="shrink-0"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
