/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Trees, Phone, Menu, X, MessageSquare, Plus, Minus, Landmark } from 'lucide-react';

interface HeaderProps {
  isLargeFont?: boolean;
  onToggleLargeFont?: () => void;
}

export default function Header({ isLargeFont = false, onToggleLargeFont }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-neutral-200/50 py-3'
          : 'bg-gradient-to-b from-white/90 via-white/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-emerald-600 group-hover:bg-emerald-500 transition-colors shadow-md shadow-emerald-600/10">
              <Trees className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full border-2 border-white animate-pulse" />
            </div>
            <div>
              <span className="font-sans font-bold text-xl tracking-tight text-neutral-905 text-neutral-900 flex items-center gap-1.5">
                ARBOSAT
                <span className="text-emerald-600 font-black">.</span>
              </span>
              <p className="text-[10px] text-neutral-500 font-mono tracking-wider uppercase font-semibold">Corte e Poda Curitiba</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-sm font-medium text-neutral-600 hover:text-emerald-600 transition-colors cursor-pointer"
            >
              Nossos Serviços
            </button>
            <button
              onClick={() => scrollToSection('bairros-seo')}
              className="text-sm font-medium text-neutral-600 hover:text-emerald-600 transition-colors cursor-pointer"
            >
              Atendimento por Bairro
            </button>
            <button
              onClick={() => scrollToSection('instagram-section')}
              className="text-sm font-medium text-neutral-600 hover:text-emerald-600 transition-colors cursor-pointer"
            >
              Galeria @arbosat
            </button>
            <button
              onClick={() => scrollToSection('contato-orcamento')}
              className="text-sm font-medium text-neutral-600 hover:text-emerald-600 transition-colors cursor-pointer"
            >
              Sobre Nós
            </button>
          </nav>

          {/* Interactive CTA Controls */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onToggleLargeFont}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-bold uppercase transition-all cursor-pointer ${
                isLargeFont
                  ? 'bg-amber-100 border-amber-300 text-amber-800 font-extrabold ring-2 ring-amber-500/20'
                  : 'bg-white hover:bg-neutral-55 hover:bg-neutral-50 border-neutral-200 text-neutral-700'
              }`}
              title={isLargeFont ? 'Diminuir tamanho da letra' : 'Aumentar tamanho da letra (Ideal para Idosos)'}
            >
              <span>🔍 Letra {isLargeFont ? 'Normal' : 'Grande 👵👴'}</span>
            </button>

            <a
              href="tel:+554199107517"
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-50 text-xs font-mono text-neutral-600 transition-all hover:border-emerald-600/30 font-semibold"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              SUL / PINHEIRINHO HQ
            </a>
            <a
              href="https://wa.me/554199107517?text=Olá%20Arbosat,%20gostaria%20de%20um%20orçamento%20para%20corte/poda"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-660 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-md shadow-emerald-500/10 hover:translate-y-[-1px] cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white/10" />
              WhatsApp: (41) 9910-7517
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onToggleLargeFont}
              className={`p-2.5 rounded-lg border flex items-center justify-center text-xs font-bold transition-all cursor-pointer ${
                isLargeFont
                  ? 'bg-amber-100 border-amber-300 text-amber-800'
                  : 'bg-neutral-100 border-neutral-200 text-neutral-700'
              }`}
              title="Aumentar tamanho do texto para idosos"
            >
              <span className="font-sans text-xs">A+ {isLargeFont && '✓'}</span>
            </button>
            <a
              href="tel:+554199107517"
              className="p-2.5 bg-neutral-100 hover:bg-neutral-200 border border-neutral-205 border-neutral-200 text-neutral-700 rounded-lg flex items-center justify-center cursor-pointer"
              title="Ligar para Central de Operações"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-4 pt-4 pb-6 space-y-4 shadow-lg">
          {/* Senior helper toggle bar inside mobile drawer */}
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
            <div className="flex items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-amber-900 block">Letras Grandes para Idosos</span>
                <span className="text-[10px] text-amber-700 block mt-0.5">Torna todo o site mais legível e confortável</span>
              </div>
              <button
                onClick={onToggleLargeFont}
                className={`px-3 py-1.5 rounded-lg font-extrabold text-xs transition-all shrink-0 cursor-pointer ${
                  isLargeFont 
                    ? 'bg-amber-600 text-white' 
                    : 'bg-amber-100 hover:bg-amber-200 text-amber-850 text-amber-800'
                }`}
              >
                {isLargeFont ? 'Letra Maior' : 'Letra Normal'}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2">
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-left py-2.5 px-4 rounded-lg hover:bg-neutral-50 text-neutral-700 font-medium"
            >
              Nossos Serviços
            </button>
            <button
              onClick={() => scrollToSection('bairros-seo')}
              className="text-left py-2.5 px-4 rounded-lg hover:bg-neutral-50 text-neutral-700 font-medium"
            >
              Atendimento por Bairro
            </button>
            <button
              onClick={() => scrollToSection('instagram-section')}
              className="text-left py-2.5 px-4 rounded-lg hover:bg-neutral-50 text-neutral-700 font-medium"
            >
              Galeria Instagram
            </button>
            <button
              onClick={() => scrollToSection('contato-orcamento')}
              className="text-left py-2.5 px-4 rounded-lg hover:bg-neutral-50 text-neutral-700 font-medium"
            >
              Sobre Nós / Orçamentos
            </button>
          </div>
          <div className="border-t border-neutral-200 pt-4 px-4 flex flex-col gap-2">
            <a
              href="tel:+554199107517"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-250 border-amber-200 text-amber-900 font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-amber-650" />
              Ligar Diário: (41) 9910-7517
            </a>
            <a
              href="https://wa.me/554199107517?text=Olá%20Arbosat,%20gostaria%20de%20solicitar%20um%2520orçamento"
              target="_blank"
              rel="noopener"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md shadow-emerald-500/15"
            >
              <MessageSquare className="w-4 h-4" />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
