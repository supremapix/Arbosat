/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Phone, Menu, X, MessageSquare, Plus, Minus, Home, Info, Sparkles, Image } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  isLargeFont?: boolean;
  onToggleLargeFont?: () => void;
}

const LogoTree = () => (
  <motion.img 
    src="https://img.arbosat.digital/logo.png" 
    alt="Arbosat Logo" 
    className="w-14 h-14 min-w-14 min-h-14 sm:w-16 sm:h-16 md:w-26 md:h-26 md:min-w-26 md:min-h-26 object-contain filter drop-shadow-sm select-none"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-3.5 flex items-center justify-between">
        {/* Logo Brand Custom Styled */}
        <div
          onClick={() => scrollToSection('home', 'home')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <LogoTree />
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-black tracking-tight text-brand-teal font-sans leading-none flex items-center">
              ARBOSAT
            </span>
            <span className="text-[10px] sm:text-xs font-black text-neutral-600 tracking-widest uppercase mt-1 leading-none border-t border-neutral-200 pt-1">
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
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white border-b-2 border-brand-teal/25 px-4 pt-1.5 pb-8 space-y-5 shadow-xl leading-relaxed overflow-hidden"
          >
            <div className="grid grid-cols-1 gap-2 pt-2">
              {[
                { label: 'Página Inicial (Home)', id: 'home', name: 'home', icon: <Home className="w-5 h-5 text-brand-teal shrink-0" /> },
                { label: 'Quem Somos (Institucional)', id: 'sobre-nos', name: 'institucional', icon: <Info className="w-5 h-5 text-brand-teal shrink-0" /> },
                { label: 'Nossos Serviços', id: 'nossos-servicos-jm', name: 'servicos', icon: <Sparkles className="w-5 h-5 text-[#89a415] shrink-0" /> },
                { label: 'Fotos dos Serviços Realizados', id: 'servicos-realizados-slider', name: 'portfolio', icon: <Image className="w-5 h-5 text-emerald-700 shrink-0" /> },
                { label: 'Como Falar Conosco', id: 'footer-contato-bar', name: 'contato', icon: <Phone className="w-5 h-5 text-brand-teal shrink-0" /> },
              ].map((link, idx) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04, ease: 'easeOut' }}
                  onClick={() => scrollToSection(link.id, link.name)}
                  className="text-left py-3.5 px-4 rounded-xl hover:bg-neutral-50 text-neutral-900 hover:text-brand-teal font-extrabold text-sm sm:text-base border border-neutral-100 border-l-4 border-l-brand-teal hover:border-l-brand-lime transition-all flex items-center justify-between gap-3 cursor-pointer whitespace-normal break-words"
                >
                  <div className="flex items-center gap-3">
                    {link.icon}
                    <span className="leading-tight">{link.label}</span>
                  </div>
                  <span className="text-[#a4c514] font-black shrink-0 text-xs">▶</span>
                </motion.button>
              ))}
            </div>

            <div className="border-t border-neutral-200 pt-5 px-1 flex flex-col gap-4">
              <span className="text-xs font-mono font-black text-[#01423a] uppercase tracking-widest text-center block whitespace-normal break-words">
                📞 ATENDIMENTO DIRETO EM DUAS LINHAS (ALTO CONTRASTE)
              </span>
              
              <a
                href="https://wa.me/554199107517?text=Olá%20Arbosat,%20gostaria%20de%20solicitar%20um%2520orçamento%20para%20poda%20ou%20corte"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3.5 py-3.5 px-4 rounded-2xl bg-brand-teal hover:bg-brand-teal/95 text-white shadow-md transition-all whitespace-normal break-words"
              >
                <MessageSquare className="w-7 h-7 text-brand-lime fill-white/10 shrink-0" />
                <div className="text-left font-black flex-1">
                  <span className="text-[10px] font-mono text-brand-lime uppercase block font-black tracking-wider leading-tight">TOQUE PARA WHATSAPP</span>
                  <span className="text-lg font-black leading-none">(41) 9910-7517</span>
                </div>
              </a>

              <a
                href="tel:+554199107517"
                className="w-full flex items-center justify-center gap-3.5 py-3.5 px-4 rounded-2xl bg-[#01423a] text-brand-lime border-2 border-brand-teal shadow-md transition-all whitespace-normal break-words"
              >
                <Phone className="w-6 h-6 text-[#b4d423] shrink-0 stroke-[3]" />
                <div className="text-left font-black flex-1">
                  <span className="text-[10px] font-mono text-brand-lime uppercase block font-black tracking-wider leading-tight">TOQUE PARA LIGAR GRÁTIS</span>
                  <span className="text-lg font-black leading-none text-white">(41) 9910-7517</span>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
