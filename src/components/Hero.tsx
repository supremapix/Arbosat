/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, ShieldAlert, CheckCircle, Zap, ShieldCheck, Phone, MessageSquare, ChevronRight, Users } from 'lucide-react';
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
      ).slice(0, 7);
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
    <section id="hero" className="relative min-h-[90vh] lg:min-h-screen pt-[130px] pb-12 flex flex-col justify-center overflow-hidden font-sans">
      
      {/* 1. Full cover background image with tree climber & chainsaw matching the reference image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://img.arbosat.digital/arbosat-hero.png" 
          alt="Arborista escalando e cortando galhos de árvore"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Soft layout gradient overlays for contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column containing title, descriptions & custom JM Card */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Safety badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-lime border border-white/20 rounded-full text-xs font-black text-brand-teal uppercase select-none shadow">
              <ShieldCheck className="w-4 h-4 text-brand-teal" />
              Equipe Qualificada & Autorizada Curitiba
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight sm:leading-none">
              Poda Técnica e <br />
              <span className="text-brand-lime">
                Corte Seguro de Árvores
              </span> <br />
              com Preço Justo
            </h1>

            <p className="text-neutral-100 text-sm sm:text-base md:text-md max-w-xl leading-relaxed font-medium">
              Especialistas em remoção e corte de árvores de pequeno, médio e grande porte em Curitiba e RMC. Equipe equipada para situações de alto risco, galhos em fiação e telhados com laudos técnicos ambientais.
            </p>

            {/* 2. Custom "SERVIÇOS DE PODA E CORTE" card exactly matching the reference image */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 border-l-8 border-brand-lime shadow-xl max-w-md">
              <h2 className="text-xl sm:text-2xl font-black text-brand-teal uppercase tracking-tight flex items-center gap-2">
                SERVIÇOS DE PODA E CORTE
              </h2>
              <div className="mt-3 space-y-2 font-bold text-neutral-800 text-sm sm:text-base">
                <div className="flex items-center gap-2.5">
                  <ChevronRight className="w-4 h-4 text-brand-lime stroke-[3]" />
                  <span>Pequeno, médio e grande porte</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ChevronRight className="w-4 h-4 text-brand-lime stroke-[3]" />
                  <span>Todos os tipos de árvore</span>
                </div>
              </div>
            </div>

            {/* Accessibility features: Fast contacts for elders */}
            <div className="p-4 rounded-xl bg-brand-teal/40 backdrop-blur-sm border border-brand-lime/30 max-w-lg space-y-3 shadow">
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full bg-brand-lime flex items-center justify-center text-brand-teal shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-brand-lime font-extrabold text-sm sm:text-base">
                    Atendimento Facilitado / Envie Fotos no WhatsApp
                  </h3>
                  <p className="text-neutral-200 text-xs leading-relaxed">
                    Acha difícil explicar o tamanho da árvore? É muito simples! Tire uma foto da árvore de longe e mande para nós agora pelo celular para receber seu orçamento:
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <a
                  href="tel:+554199107517"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-brand-lime text-brand-teal font-black text-xs sm:text-sm shadow transition-transform hover:scale-[1.01]"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  TELEFONE CENTRAL: (41) 9910-7517
                </a>
                <a
                  href="https://wa.me/554199107517?text=Olá,%20gostaria%20de%20enviar%20um%20foto%20para%20orçamento%20de%20poda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm shadow transition-transform hover:scale-[1.01]"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  MANDAR FOTO WHATSAPP
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Localized Search Interface with high compatibility */}
          <div className="lg:col-span-5">
            <div className="bg-white border-2 border-brand-lime p-5 sm:p-6 rounded-2xl shadow-2xl space-y-4">
              <div>
                <span className="text-[10px] font-mono font-black text-brand-teal bg-brand-lime/20 px-2 py-1 rounded uppercase tracking-wider">
                  Localizador Inteligente
                </span>
                <h3 className="text-neutral-900 font-extrabold font-sans text-lg mt-2">
                  Verificar Tempo de Atendimento no seu Bairro:
                </h3>
                <p className="text-xs text-neutral-500 mt-1">
                  Atendemos mais de 75 bairros em Curitiba de prontidão. Digite o seu para ver a rota e tempo aproximado.
                </p>
              </div>

              <div ref={dropdownRef} className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-neutral-400" />
                </div>
                <input
                  type="text"
                  placeholder="Pesquise o seu bairro em Curitiba..."
                  className="block w-full pl-11 pr-4 py-3 bg-neutral-50 border border-neutral-300 rounded-xl focus:border-brand-teal focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-teal/15 text-neutral-900 font-bold text-sm placeholder:text-neutral-400 hover:border-neutral-400 transition-all"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => {
                    if (searchQuery.trim().length > 1) setShowSuggestions(true);
                  }}
                />

                {/* Dropdown suggestions list */}
                {showSuggestions && suggestions.length > 0 && (
                  <div className="absolute z-20 left-0 right-0 mt-1 bg-white border border-neutral-200 rounded-xl shadow-2xl max-h-52 overflow-y-auto divide-y divide-neutral-100">
                    {suggestions.map((b) => (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => handleSelectSuggestion(b)}
                        className="w-full text-left px-4 py-3 hover:bg-brand-lime/10 flex items-center justify-between text-xs font-bold transition-colors text-neutral-850 text-neutral-900 cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-brand-teal" />
                          <span>{b.name}</span>
                        </div>
                        <span className="text-[10px] font-mono text-neutral-400 uppercase font-semibold">
                          {b.distanceKm === 0 ? 'HQ SUL' : `~${b.distanceKm} km`}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Quick Preset tags */}
              <div>
                <span className="text-[11px] font-black text-neutral-700 uppercase tracking-tight block mb-2">Bairros de Destaque:</span>
                <div className="flex flex-wrap gap-1.5">
                  {['Pinheirinho', 'Portão', 'Água Verde', 'Cidade Industrial (CIC)', 'Novo Mundo'].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => selectPopular(n)}
                      className="px-2.5 py-1.5 rounded-lg bg-neutral-50 hover:bg-brand-teal hover:text-white border border-neutral-200 hover:border-brand-teal font-extrabold text-[11px] transition-all cursor-pointer"
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              {/* Central base highlights */}
              <div className="border-t border-neutral-200 pt-3 flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-lg bg-brand-teal/5 flex items-center justify-center text-brand-teal shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[11px] font-mono text-neutral-400 block uppercase font-bold leading-none select-none">Origem da Frota</h4>
                  <p className="text-neutral-800 text-xs font-black mt-1">Central Pinheirinho, Curitiba - PR</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
