import React, { useState, useEffect } from 'react';
import { Menu, X, Building2, Phone, Sparkles } from 'lucide-react';
import { PROJECT_INFO } from '../data/mockData';
import { InterestButton } from './InterestButton';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Destaques', href: '#destaques' },
    { label: 'Plantas & Tipologias', href: '#plantas' },
    { label: 'Lazer & Resort', href: '#lazer' },
    { label: 'Simulador', href: '#simulador' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-stone-950/90 backdrop-blur-md border-b border-stone-800/80 py-3 shadow-lg shadow-black/20'
          : 'bg-gradient-to-b from-stone-950/80 via-stone-950/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#d4a853] to-[#9c6a1f] flex items-center justify-center text-stone-950 shadow-md shadow-[#9c6a1f]/30 group-hover:scale-105 transition-transform">
            <Building2 className="w-5 h-5 text-stone-950" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg sm:text-xl font-bold tracking-wider text-stone-100 uppercase group-hover:text-amber-300 transition-colors">
              {PROJECT_INFO.name}
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-amber-400/90 font-medium">
              Venda de Apartamentos • Alto Padrão
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-300 hover:text-amber-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-400 hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <InterestButton
            id="navbar-cta-button"
            size="md"
            variant="primary"
            label="Tenho Interesse"
          />
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <InterestButton
            id="mobile-nav-quick-cta"
            size="sm"
            variant="primary"
            label="Interesse"
            className="sm:hidden text-xs py-2 px-3"
          />
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-stone-900/80 text-stone-300 hover:text-amber-400 border border-stone-800"
            aria-label="Alternar menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden bg-stone-950/98 backdrop-blur-xl border-b border-stone-800 px-5 pt-4 pb-6 mt-3 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-300 hover:text-amber-400 font-medium py-2 px-3 rounded-lg hover:bg-stone-900/60 transition-colors text-base"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-stone-800/80 flex flex-col gap-3">
            <InterestButton
              id="mobile-drawer-cta-button"
              size="lg"
              variant="primary"
              label="Tenho Interesse no Empreendimento"
              className="w-full justify-center py-3.5"
            />
            <p className="text-center text-xs text-stone-400">
              Preencha o formulário rápido e receba o book digital.
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
