/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, ShieldAlert, CheckCircle, Zap, ShieldCheck, Phone, MessageSquare } from 'lucide-react';
import { BAIRROS_DATA } from '../data/bairros';
import { Neighborhood } from '../types';

interface HeroProps {
  onSelectBairro: (bairro: Neighborhood) => void;
}

export default function Hero({ onSelectBairro }: HeroProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Neighborhood[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Click outside handler for dropdown
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    if (value.trim().length > 1) {
      const filtered = BAIRROS_DATA.filter(b =>
        b.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(
          value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        )
      ).slice(0, 7); // Limit to 7 results for neatness
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSelectSuggestion = (bairro: Neighborhood) => {
    setSearchQuery(bairro.name);
    setShowSuggestions(false);
    onSelectBairro(bairro);
    
    // Smooth scroll down to the showcase
    const showcase = document.getElementById('bairros-seo');
    if (showcase) {
      showcase.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const selectPopular = (name: string) => {
    const found = BAIRROS_DATA.find(b => b.name === name);
    if (found) {
      handleSelectSuggestion(found);
    }
  };

  return (
    <section id="hero" className="relative min-h-[85vh] lg:min-h-screen pt-[112px] sm:pt-28 pb-10 md:pb-16 flex items-center justify-center bg-gradient-to-b from-neutral-50 via-white to-white overflow-hidden">
      {/* Decorative Forest Background Layer */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-emerald-100),transparent_45%)]" />
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/10 w-80 h-80 bg-neutral-100/30 rounded-full blur-3xl" />
        
        {/* Abstract Tree grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Brand Introduction Text Block */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-100/90 border border-emerald-250 border-emerald-200 rounded-full text-xs font-bold text-emerald-900 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              Empresa Licenciada & Arboristas Credenciados
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-sans font-black text-neutral-900 tracking-tight leading-tight sm:leading-none">
              Poda Especializada e <br />
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600">
                Remoção de Árvores
              </span> <br />
              em Curitiba
            </h1>

            <p className="text-neutral-700 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
              Corte certificado, remoção sob rígidas normas ambientais e podas estéticas.
              Equipe do <strong className="text-neutral-950 font-extrabold">Pinheirinho</strong> pronta para responder 
              urgências com segurança absoluta e destinação ecológica dos resíduos.
            </p>

            {/* Smart SEO Bairro Search Interface - High Contrast for Senior Citizens */}
            <div className="bg-white border border-neutral-250 border-neutral-200 p-5 sm:p-6 rounded-2xl shadow-lg relative">
              <h2 className="text-xs sm:text-sm font-mono font-black text-amber-700 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-amber-600" />
                Selecione seu Bairro para Rota e Detalhes
              </h2>

              <div ref={dropdownRef} className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-neutral-500" />
                </div>
                <input
                  type="text"
                  placeholder="Selecione seu bairro (ex: Portão, CIC, Orleans...)"
                  className="block w-full pl-12 pr-4 py-4 bg-neutral-50 border border-neutral-300 rounded-xl focus:border-emerald-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/10 text-neutral-900 text-base font-semibold placeholder:text-neutral-500 hover:border-neutral-400 transition-colors"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => {
                    if (searchQuery.trim().length > 1) setShowSuggestions(true);
                  }}
                />

                {/* Dropdown Suggestions with extra large touch targets */}
                {showSuggestions && suggestions.length > 0 && (
                  <div className="absolute z-30 left-0 right-0 mt-2 bg-white border border-neutral-300 rounded-xl shadow-2xl max-h-60 overflow-y-auto divide-y divide-neutral-150">
                    {suggestions.map((b) => (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => handleSelectSuggestion(b)}
                        className="w-full text-left px-4 py-4 hover:bg-neutral-50 flex items-center justify-between text-base font-bold transition-colors text-neutral-900 cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-emerald-600" />
                          <span className="font-extrabold">{b.name}</span>
                        </div>
                        <span className="text-xs font-mono text-neutral-500 font-semibold">
                          {b.type === 'official' ? 'Oficial' : b.type === 'popular' ? 'Popular' : 'RMC'} • {b.distanceKm === 0 ? 'Aqui' : `~${b.distanceKm}km`}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Quick Preset Buttons - Styled for better touch and spacing */}
              <div className="mt-4">
                <span className="text-neutral-700 font-bold block text-xs sm:text-sm mb-2">Bairros mais sugeridos:</span>
                <div className="flex flex-wrap gap-2">
                  {['Pinheirinho', 'Portão', 'Água Verde', 'Cidade Industrial (CIC)', 'Neoville'].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => selectPopular(n)}
                      className="px-3 py-2 rounded-lg bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-neutral-800 hover:text-emerald-800 hover:border-emerald-500 font-bold text-xs sm:text-sm transition-all cursor-pointer"
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* SENIOR ASSIST ACCESSIBILITY BLOCK: Facilitated support for seniors */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 max-w-xl space-y-3 shadow-xs">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl leading-none">👴👵</span>
                <div>
                  <h3 className="text-amber-900 font-extrabold text-sm sm:text-base font-sans">
                    Atendimento Simplificado para Idosos / Melhor Idade
                  </h3>
                  <p className="text-amber-800 text-xs sm:text-sm leading-relaxed">
                    Acha difícil preencher formulários pela internet? Não se preocupe! Toque em uma das opções grandes abaixo para falar direto com nossa equipe:
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <a
                  href="tel:+554199107517"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-black text-sm shadow-md transition-transform hover:scale-[1.01]"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  LIGAR DE GRAÇA: (41) 9910-7517
                </a>
                <a
                  href="https://wa.me/554199107517?text=Olá,%20gostaria%20de%20um%20orçamento%20sem%20compromisso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-md transition-transform hover:scale-[1.01]"
                >
                  <MessageSquare className="w-4 h-4 shrink-0 fill-white/10" />
                  CHAME NO WHATSAPP
                </a>
              </div>
            </div>

            {/* Quick trust highlights */}
            <div className="grid grid-cols-3 gap-4 border-t border-neutral-200 pt-6 max-w-xl">
              <div className="flex gap-2.5">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <h3 className="text-xs font-bold text-neutral-800 font-sans uppercase">Descarte Legal</h3>
                  <p className="text-[10px] sm:text-xs text-neutral-600">Galhos triturados e recicláveis</p>
                </div>
              </div>
              <div className="flex gap-2.5">
                <Zap className="w-5 h-5 text-amber-600 shrink-0" />
                <div>
                  <h3 className="text-xs font-bold text-neutral-800 font-sans uppercase">Orçamento 3 min</h3>
                  <p className="text-[10px] sm:text-xs text-neutral-600">Fotos no WhatsApp</p>
                </div>
              </div>
              <div className="flex gap-2.5">
                <ShieldAlert className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <h3 className="text-xs font-bold text-neutral-800 font-sans uppercase">Remoção de Risco</h3>
                  <p className="text-[10px] sm:text-xs text-neutral-600">Corte rasteiro e rapel seguro</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Brand Mascot Mascot Frame with chainsaws and visual flair */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-square bg-emerald-50/40 border border-emerald-100 rounded-3xl p-6 shadow-xl flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100/10 to-teal-50/10 z-0" />
              
              {/* HQ details bubble */}
              <div className="relative z-10 flex items-center justify-between border-b border-emerald-100 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono text-neutral-600 font-semibold uppercase">Base Operacional</span>
                </div>
                <span className="text-[10px] font-mono text-amber-700 bg-amber-100 px-2 py-0.5 rounded border border-amber-200">
                  Curitiba - PR
                </span>
              </div>

              {/* Hand-drawn look SVG Mascot Squirrel Placeholder with chainsaw - highly designed */}
              <div className="relative z-10 my-4 flex items-center justify-center py-6">
                <div className="relative w-64 h-64 bg-emerald-600/5 border border-emerald-500/10 rounded-full flex items-center justify-center animate-pulse">
                  
                  {/* Decorative Outer Ring */}
                  <div className="absolute inset-2 border border-dashed border-emerald-500/15 rounded-full" />
                  
                  {/* Styled Mascot Container */}
                  <div className="text-center p-4">
                    <span className="text-6xl mb-2 block leading-none">🐿️</span>
                    <strong className="text-neutral-850 text-neutral-800 text-base tracking-wide font-sans block">Mascote Arbosat</strong>
                    <span className="text-neutral-500 text-[10px] font-mono uppercase block mt-1">Copa & Remoção</span>
                    <div className="mt-3 inline-flex items-center gap-1.5 bg-white py-1.5 px-3 rounded-full border border-neutral-200 text-[11px] text-neutral-600 shadow-sm">
                      <span>⚡ Segurança & Agilidade</span>
                    </div>
                  </div>

                  {/* Chainsaw badge bottom */}
                  <div className="absolute -bottom-2 bg-white border border-neutral-200 rounded-lg px-3 py-1 text-[10px] font-mono text-amber-600 shadow-sm flex items-center gap-1">
                    <span>🪓 MOTOSSERRAS HOMOLOGADAS</span>
                  </div>
                </div>
              </div>

              {/* Info panel */}
              <div className="relative z-10 bg-white border border-emerald-100 p-4 rounded-xl shadow-sm">
                <div className="flex justify-between items-center text-xs">
                  <div>
                    <span className="text-neutral-500 uppercase block text-[9px] font-mono">Disponibilidade</span>
                    <strong className="text-emerald-600 font-semibold block">Segunda à Sábado</strong>
                  </div>
                  <div className="text-right">
                    <span className="text-neutral-500 uppercase block text-[9px] font-mono">Atendimento</span>
                    <strong className="text-neutral-800 font-semibold block">Emergências 24h</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
