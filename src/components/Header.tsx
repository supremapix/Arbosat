/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Phone, Menu, X, MessageSquare, Plus, Minus } from 'lucide-react';
import { motion } from 'motion/react';

interface HeaderProps {
  isLargeFont?: boolean;
  onToggleLargeFont?: () => void;
}

const LogoTree = () => (
  <motion.img 
    src="https://img.arbosat.digital/logo.png" 
    alt="Arbosat Logo" 
    className="w-16 h-16 min-w-16 min-h-16 md:w-22 md:h-22 md:min-w-22 md:min-h-22 object-contain filter drop-shadow-sm select-none"
    referrerPolicy="no-referrer"
    whileHover={{ 
      scale: 1.12, 
      rotate: [0, -5, 5, -3, 3, 0], 
      transition: { duration: 0.5, ease: 'easeInOut' } 
    }}
    whileTap={{ scale: 0.92 }}
  />
);

export default function Header({ isLargeFont = false, onToggleLargeFont }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const scrollToSection = (id: string, name: string) => {
    setActiveLink(name);
    setMobileMenuOpen(false);
    
    let element = document.getElementById(id);
    if (!element && id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (element) {
      const offset = 120;
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-neutral-200">
      {/* 1. Diagonal Dual-Color Top Bar of JM PODAS Style */}
      <div className="relative h-11 w-full overflow-hidden text-xs bg-brand-lime hidden md:flex items-center">
        {/* Left slant bar (Deep Teal) */}
        <div 
          className="absolute inset-y-0 left-0 bg-brand-teal flex items-center pl-6 pr-12 z-10"
          style={{ 
            width: '56%', 
            clipPath: 'polygon(0 0, 100% 0, calc(100% - 22px) 100%, 0 100%)' 
          }}
        >
          <div className="flex items-center gap-6 text-white font-bold whitespace-nowrap">
            <span className="flex items-center gap-1.5 uppercase tracking-wider text-[10.5px]">
              <span className="w-2 h-2 rounded-full bg-brand-lime animate-ping" />
              ATENDEMOS Curitiba e Região Metropolitana
            </span>
            <span className="text-[11px] flex items-center gap-1">
              FALE CONOSCO: <a href="https://wa.me/554199107517" className="text-brand-lime underline hover:text-white transition-colors font-extrabold">(41) 9910-7517</a>
            </span>
          </div>
        </div>
        
        {/* Right text aligned on lime background */}
        <div className="w-full h-full flex items-center justify-end pr-6 pl-[58%] text-brand-teal font-black text-right">
          <span className="text-[11px] uppercase tracking-wider truncate">
            Cortes e podas de árvores em Curitiba - PR com o melhor preço
          </span>
        </div>
      </div>

      {/* Mobile-only thin top info indicator */}
      <div className="md:hidden bg-brand-teal text-white py-2 px-4 text-center text-[10px] font-bold border-b border-brand-lime/30">
        <span>ATENDEMOS CURITIBA & RMC • WHATSAPP: <strong>(41) 9910-7517</strong></span>
      </div>

      {/* 2. Main Navigation Bar with JM PODAS style elements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Logo Brand Custom Styled */}
        <div
          onClick={() => scrollToSection('home', 'home')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <LogoTree />
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-brand-teal font-sans leading-none flex items-center">
              ARBOSAT
            </span>
            <span className="text-[8.5px] font-bold text-neutral-500 tracking-widest uppercase mt-1 leading-none border-t border-neutral-150 pt-1">
              CORTES E PODAS DE ÁRVORES
            </span>
          </div>
        </div>

        {/* Desktop Links (Home / Institucional / Serviços / Portfólio / Contato) */}
        <nav className="hidden md:flex items-center justify-center gap-8 font-sans">
          {[
            { name: 'home', label: 'Home', id: 'home' },
            { name: 'institucional', label: 'Institucional', id: 'sobre-nos' },
            { name: 'servicos', label: 'Serviços', id: 'nossos-servicos-jm' },
            { name: 'portfolio', label: 'Portfólio', id: 'servicos-realizados-slider' },
            { name: 'contato', label: 'Contato', id: 'footer-contato-bar' },
          ].map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id, link.name)}
              className={`text-sm font-bold tracking-tight py-2 border-b-2 hover:text-brand-teal hover:border-brand-lime transition-all cursor-pointer relative ${
                activeLink === link.name
                  ? 'text-brand-brand text-brand-teal border-brand-lime'
                  : 'text-neutral-500 border-transparent'
              }`}
            >
              {link.label}
              {activeLink === link.name && (
                <div className="absolute left-0 right-0 bottom-[-2px] h-[3px] bg-brand-lime" />
              )}
            </button>
          ))}
        </nav>

        {/* Interactive Accessibility Toggle & Call Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={onToggleLargeFont}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[10.5px] font-bold uppercase transition-all cursor-pointer ${
              isLargeFont
                ? 'bg-amber-100 border-amber-300 text-amber-800 font-extrabold ring-1 ring-amber-500/20'
                : 'bg-neutral-50 hover:bg-neutral-100 border-neutral-200 text-neutral-600'
            }`}
            title="Letras grandes para idosos"
          >
            {isLargeFont ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
            <span>Letra {isLargeFont ? 'Normal' : 'Grande'}</span>
          </button>

          <a
            href="https://wa.me/554199107517?text=Olá%20Arbosat,%20gostaria%20de%20solicitar%20um%2520orçamento"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-start justify-center px-4 py-2 rounded-xl bg-brand-teal hover:bg-brand-teal/95 text-white transition-all shadow-sm leading-tight text-left min-w-[200px]"
            title="Enviar mensagem no WhatsApp para (41) 9910-7517"
          >
            <span className="flex items-center gap-1 font-black text-[10px] tracking-widest uppercase text-brand-lime">
              <MessageSquare className="w-3 h-3 fill-white/10 shrink-0" />
              WhatsApp Atendimento
            </span>
            <span className="text-sm font-black tracking-wide">(41) 9910-7517</span>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onToggleLargeFont}
            className={`p-2 rounded-lg border flex items-center justify-center transition-all cursor-pointer ${
              isLargeFont ? 'bg-amber-100 border-amber-300 text-amber-800' : 'bg-neutral-100 border-neutral-200 text-neutral-600'
            }`}
            aria-label="Ajustar tamanho da letra"
          >
            {isLargeFont ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            <span className="ml-1 text-xs font-bold">A</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-700 hover:text-neutral-900 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b-2 border-brand-teal/25 px-4 pt-4 pb-8 space-y-6 shadow-xl leading-relaxed">
          <div className="grid grid-cols-1 gap-1.5 pt-2">
            {[
              { label: 'Página Inicial (Home)', id: 'home', name: 'home' },
              { label: 'Quem Somos (Institucional)', id: 'sobre-nos', name: 'institucional' },
              { label: 'Nossos Serviços', id: 'nossos-servicos-jm', name: 'servicos' },
              { label: 'Fotos dos Serviços Realizados', id: 'servicos-realizados-slider', name: 'portfolio' },
              { label: 'Como Falar Conosco', id: 'footer-contato-bar', name: 'contato' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id, link.name)}
                className="text-left py-4 px-5 rounded-xl hover:bg-neutral-50 text-neutral-900 hover:text-brand-teal font-extrabold text-base sm:text-lg border-l-4 border-neutral-200 hover:border-brand-lime transition-all flex items-center justify-between gap-3 cursor-pointer whitespace-normal break-words"
              >
                <span className="leading-tight">{link.label}</span>
                <span className="text-brand-lime font-black shrink-0">▶</span>
              </button>
            ))}
          </div>

          <div className="border-t border-neutral-200 pt-5 px-1 flex flex-col gap-4">
            <span className="text-xs font-mono font-black text-neutral-500 uppercase tracking-widest text-center block whitespace-normal break-words">
              📞 CONTATO DIRETO DE ALTO CONTRASTE PARA IDOSOS
            </span>
            
            <a
              href="https://wa.me/554199107517?text=Olá%20Arbosat,%20gostaria%20de%20solicitar%20um%2520orçamento%20para%20poda%20ou%20corte"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-4 px-4 rounded-2xl bg-brand-teal hover:bg-brand-teal/95 text-white font-extrabold text-base sm:text-lg shadow-md transition-all text-center whitespace-normal break-words"
            >
              <MessageSquare className="w-6 h-6 fill-white/10 shrink-0" />
              <span className="leading-tight">Chamar no WhatsApp</span>
            </a>

            <a
              href="tel:+554199107517"
              className="w-full flex items-center justify-center gap-3 py-4 px-4 rounded-2xl bg-[#002f29] text-[#b4d423] border-2 border-brand-teal font-extrabold text-base sm:text-lg shadow-md transition-all text-center whitespace-normal break-words"
            >
              <Phone className="w-5 h-5 fill-[#b4d423] shrink-0" />
              <span className="leading-tight">Ligar Grátis: (41) 9910-7517</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
