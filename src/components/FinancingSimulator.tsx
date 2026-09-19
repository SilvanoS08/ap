import React, { useState } from 'react';
import { Calculator, DollarSign, Clock, HelpCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { InterestButton } from './InterestButton';

export const FinancingSimulator: React.FC = () => {
  const [propertyValue, setPropertyValue] = useState<number>(740000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [months, setMonths] = useState<number>(360);

  // Calculation logic
  const downPaymentValue = (propertyValue * downPaymentPercent) / 100;
  const financedValue = propertyValue - downPaymentValue;
  
  // Approximate annual interest rate for SFH (e.g., ~9.8% a.a. / 0.78% a.m.)
  const monthlyRate = 0.0078;
  const estimatedMonthlyPayment = Math.round(
    (financedValue * (monthlyRate * Math.pow(1 + monthlyRate, months))) /
      (Math.pow(1 + monthlyRate, months) - 1)
  );

  const formatCurrency = (val: number) => {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
  };

  return (
    <section id="simulador" className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-400 mb-2 block">
            Planejamento Financeiro
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Simulador de Condições e Financiamento
          </h2>
          <p className="text-stone-300 text-base sm:text-lg">
            Descubra como fica o fluxo facilitado durante a obra e planeje a conquista do seu novo apartamento.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-stone-950 rounded-3xl border border-stone-800 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Controls Left Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Property Value Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-stone-200">
                    Valor Estimado do Apartamento:
                  </label>
                  <span className="text-base font-extrabold text-amber-400">
                    {formatCurrency(propertyValue)}
                  </span>
                </div>
                <input
                  type="range"
                  min="549000"
                  max="1890000"
                  step="20000"
                  value={propertyValue}
                  onChange={(e) => setPropertyValue(Number(e.target.value))}
                  className="w-full h-2 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] text-stone-500 mt-1">
                  <span>R$ 549 mil (68m²)</span>
                  <span>R$ 1.89 mi (Cobertura)</span>
                </div>
              </div>

              {/* Down Payment Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-stone-200">
                    Entrada ({downPaymentPercent}%):
                  </label>
                  <span className="text-base font-extrabold text-amber-400">
                    {formatCurrency(downPaymentValue)}
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="50"
                  step="5"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full h-2 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] text-stone-500 mt-1">
                  <span>Mínimo 15%</span>
                  <span>Parcelada em até 36x na obra</span>
                  <span>50%</span>
                </div>
              </div>

              {/* Term */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-stone-200">
                    Prazo do Financiamento Bancário:
                  </label>
                  <span className="text-base font-extrabold text-stone-200">
                    {months / 12} anos ({months} meses)
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[240, 360, 420].map((term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => setMonths(term)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                        months === term
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/60'
                          : 'bg-stone-900 text-stone-400 border-stone-800 hover:text-white'
                      }`}
                    >
                      {term / 12} Anos
                    </button>
                  ))}
                </div>
              </div>

              {/* Perks list */}
              <div className="pt-2 border-t border-stone-800/80 space-y-1.5 text-xs text-stone-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Aceitamos FGTS na composição da entrada ou quitação</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Financiamento com todos os grandes bancos (Caixa, Itaú, etc.)</span>
                </div>
              </div>
            </div>

            {/* Results Right Box */}
            <div className="lg:col-span-5 bg-gradient-to-b from-stone-900 to-stone-950 p-6 sm:p-8 rounded-2xl border border-stone-800 flex flex-col justify-between text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />

              <div>
                <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block mb-1">
                  Resultado da Simulação
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-display mb-1">
                  {formatCurrency(estimatedMonthlyPayment)}
                  <span className="text-xs font-normal text-stone-400 block font-sans mt-0.5">/mês aproximado*</span>
                </div>

                <div className="my-6 space-y-2.5 text-left text-xs bg-stone-950/60 p-4 rounded-xl border border-stone-800">
                  <div className="flex justify-between text-stone-300">
                    <span>Entrada Sugerida:</span>
                    <strong className="text-white">{formatCurrency(downPaymentValue)}</strong>
                  </div>
                  <div className="flex justify-between text-stone-300">
                    <span>Saldo Financiado:</span>
                    <strong className="text-white">{formatCurrency(financedValue)}</strong>
                  </div>
                  <div className="flex justify-between text-stone-300">
                    <span>Prazo Escolhido:</span>
                    <strong className="text-white">{months} meses</strong>
                  </div>
                </div>
              </div>

              <div>
                <InterestButton
                  id="simulator-cta-button"
                  size="lg"
                  variant="primary"
                  label="Tenho Interesse nessa Condição"
                  subtext="Receba a análise de crédito personalizada"
                  className="w-full py-4 text-sm"
                />
                <span className="text-[10px] text-stone-500 block mt-2">
                  *Valores estimativos sujeitos a análise de crédito e tabela vigente.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
