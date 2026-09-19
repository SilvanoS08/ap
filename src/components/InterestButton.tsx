import React from 'react';
import { ExternalLink, Sparkles, ArrowUpRight } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../data/mockData';

interface InterestButtonProps {
  id?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'dark' | 'outline';
  className?: string;
  label?: string;
  showIcon?: boolean;
  subtext?: string;
}

export const InterestButton: React.FC<InterestButtonProps> = ({
  id = 'btn-tenho-interesse',
  size = 'md',
  variant = 'primary',
  className = '',
  label = 'Tenho Interesse',
  showIcon = true,
  subtext,
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-semibold rounded-lg gap-1.5',
    md: 'px-5 py-2.5 text-sm font-semibold rounded-xl gap-2',
    lg: 'px-7 py-3.5 text-base font-bold rounded-xl gap-2.5 shadow-md',
    xl: 'px-8 py-4 text-lg font-bold rounded-2xl gap-3 shadow-lg hover:shadow-xl',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-[#d4a853] via-[#c6933a] to-[#b37e29] hover:from-[#e0b764] hover:to-[#c6933a] text-stone-950 shadow-[#c6933a]/25 active:scale-[0.98] transition-all duration-200 border border-[#f3d99d]/40',
    secondary:
      'bg-stone-900 hover:bg-stone-800 text-amber-300 border border-amber-500/30 hover:border-amber-400/60 transition-all duration-200 shadow-stone-950/20',
    dark:
      'bg-stone-950 hover:bg-stone-900 text-stone-100 border border-stone-800 hover:border-stone-700 transition-all duration-200',
    outline:
      'bg-transparent hover:bg-amber-500/10 text-amber-700 hover:text-amber-800 border-2 border-amber-600/40 hover:border-amber-600 transition-all duration-200',
  };

  return (
    <a
      id={id}
      href={GOOGLE_FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center text-center cursor-pointer select-none group transition-transform ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      title="Abrir formulário de interesse em nova aba"
    >
      <div className="flex flex-col items-center">
        <span className="flex items-center justify-center whitespace-nowrap">
          {variant === 'primary' && <Sparkles className="w-4 h-4 mr-1.5 opacity-80 text-stone-950 animate-pulse" />}
          <span>{label}</span>
          {showIcon && (
            <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 opacity-90" />
          )}
        </span>
        {subtext && (
          <span className="text-[11px] font-normal tracking-wide opacity-80 mt-0.5">
            {subtext}
          </span>
        )}
      </div>
    </a>
  );
};
