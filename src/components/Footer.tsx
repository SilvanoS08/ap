import React from 'react';
import { Building2, MapPin, Phone, Mail, FileText, ExternalLink } from 'lucide-react';
import { GOOGLE_FORM_URL, PROJECT_INFO } from '../data/mockData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 text-xs border-t border-stone-800/80 pt-16 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-stone-800/60">
          {/* Col 1: Empreendimento */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
                <Building2 className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white font-display tracking-wider">
                {PROJECT_INFO.name}
              </span>
            </div>
            <p className="text-stone-400 text-sm max-w-md leading-relaxed">
              Venda de apartamentos de alto padrão nos Jardins. Plantas modernas de 68m² a 184m² com varanda gourmet e infraestrutura completa de lazer e segurança.
            </p>
            <div className="flex items-center gap-2 text-stone-300 text-xs">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{PROJECT_INFO.address} - {PROJECT_INFO.city}</span>
            </div>
          </div>

          {/* Col 2: Acesso Rápido */}
          <div>
            <h4 className="text-sm font-bold text-stone-200 uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#destaques" className="hover:text-amber-400 transition-colors">
                  Diferenciais Construtivos
                </a>
              </li>
              <li>
                <a href="#plantas" className="hover:text-amber-400 transition-colors">
                  Plantas & Tipologias
                </a>
              </li>
              <li>
                <a href="#lazer" className="hover:text-amber-400 transition-colors">
                  Lazer & Resort
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-amber-400 transition-colors">
                  Simulador de Parcelas
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-amber-400 transition-colors">
                  Localização & Acessos
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Formulário & Atendimento */}
          <div>
            <h4 className="text-sm font-bold text-stone-200 uppercase tracking-wider mb-4">
              Manifeste seu Interesse
            </h4>
            <p className="text-stone-400 text-xs mb-3">
              Preencha o formulário oficial para receber a tabela de valores atualizada e agendar uma visita.
            </p>
            <a
              id="footer-google-form-link"
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-semibold transition-colors"
            >
              <span>Abrir Formulário de Interesse</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Legal Disclaimers */}
        <div className="pt-8 space-y-3 text-[11px] text-stone-400 leading-relaxed">
          <p>
            <strong>Informações Legais:</strong> Empreendimento imobiliário comercializado em conformidade com a Lei Federal nº 4.591/64. Memorial de Incorporação registrado sob o R.04 da matrícula nº 128.490 no Cartório de Registro de Imóveis competente. Todas as perspectivas artísticas e fotos do apartamento decorado são ilustrativas, podendo sofrer variações de tonalidade, textura e acabamento de acordo com o memorial descritivo da obra.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-4 border-t border-stone-800/40 text-stone-400">
            <span>© 2026 {PROJECT_INFO.name} • Todos os direitos reservados.</span>
            <span>Intermediação imobiliária credenciada • CRECI Jurídico nº 29.841-J</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
