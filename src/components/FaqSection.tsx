import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQ_LIST } from '../data/mockData';
import { InterestButton } from './InterestButton';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-stone-200 scroll-mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#9c6a1f] mb-2 block">
            Tire Suas Dúvidas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Transparência e segurança em todas as etapas da aquisição do seu imóvel.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 mb-12">
          {FAQ_LIST.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-stone-200/80 overflow-hidden transition-all bg-[#fafaf8]"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full text-left px-6 py-4 sm:py-5 flex items-center justify-between gap-4 font-semibold text-stone-900 hover:text-[#9c6a1f] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base pr-2">{item.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-stone-200/70 text-stone-700 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-amber-200 text-amber-900' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200/70 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="p-3 rounded-xl bg-amber-100 text-[#8b6528] shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-stone-900">
                Ainda tem alguma pergunta específica?
              </h4>
              <p className="text-xs text-stone-600">
                Envie seus dados de contato através do botão de interesse e tire todas as suas dúvidas.
              </p>
            </div>
          </div>
          <InterestButton
            id="faq-cta-button"
            size="md"
            variant="primary"
            label="Tenho Interesse"
            className="shrink-0 w-full sm:w-auto"
          />
        </div>
      </div>
    </section>
  );
};
