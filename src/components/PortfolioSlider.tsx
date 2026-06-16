/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Camera, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';

const PORTFOLIO_IMAGES = [
  {
    url: 'https://img.arbosat.digital/servico-realizado.png',
    title: 'Serviço sob Medida Concluído',
    desc: 'Corte e poda técnica com destinação correta dos resíduos orgânicos e área 100% limpa.'
  },
  {
    url: 'https://img.arbosat.digital/servicos.png',
    title: 'Poda de Árvores de Grande Porte',
    desc: 'Equipe altamente treinada operando com equipamentos de segurança (EPI) e controle de descida.'
  },
  {
    url: 'https://img.arbosat.digital/servico-pr.png',
    title: 'Remoção Técnica com Segurança Extrema',
    desc: 'Atendimento corretivo especializado com remoção total de galhos e troncos perigosos.'
  }
];

export default function PortfolioSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? PORTFOLIO_IMAGES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === PORTFOLIO_IMAGES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="servicos-realizados-slider" className="py-20 bg-brand-teal text-white font-sans relative overflow-hidden">
      {/* Decorative leaf motifs inside backgrounds */}
      <div className="absolute top-0 left-0 w-92 h-92 bg-white/2 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-lime/5 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Yellow camera icon matching reference image */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-[#cca107] bg-yellow-500 border-4 border-brand-teal flex items-center justify-center text-white shadow-lg animate-bounce duration-300">
            <Camera className="w-7 h-7" />
          </div>
        </div>

        {/* Heading uppercase white */}
        <h2 className="text-3xl sm:text-4.5xl font-black uppercase tracking-widest text-white select-none">
          SERVIÇOS REALIZADOS
        </h2>
        
        <div className="w-20 h-1.5 bg-brand-lime mx-auto mt-4 rounded-full" />

        {/* Subtitle */}
        <p className="mt-4 text-neutral-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Veja registros reais do nosso maquinário avançado, frota certificada para coletas de galhos e equipe treinada para qualquer altura ou risco.
        </p>

        {/* Interactive Slider Frame */}
        <div className="mt-12 relative max-w-4xl mx-auto bg-brand-dark/40 border border-white/10 p-2 sm:p-4 rounded-3xl shadow-2xl overflow-hidden group">
          
          <div className="relative aspect-video sm:aspect-[2.1/1] w-full rounded-2xl overflow-hidden">
            <img 
              src={PORTFOLIO_IMAGES[currentIndex].url} 
              alt={PORTFOLIO_IMAGES[currentIndex].title}
              className="w-full h-full object-cover transition-all duration-700 brightness-95 filter group-hover:scale-101"
              referrerPolicy="no-referrer"
            />
            {/* Dark vignette text safe zone */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 sm:p-8 text-left">
              <span className="text-[10px] font-mono font-black text-brand-lime bg-white/10 px-2.5 py-0.5 rounded border border-white/10 uppercase tracking-widest">
                Trabalho Real Arbosat
              </span>
              <h3 className="text-lg sm:text-2xl font-black text-white mt-2 leading-tight">
                {PORTFOLIO_IMAGES[currentIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-200 mt-1.5 leading-relaxed font-semibold max-w-2xl">
                {PORTFOLIO_IMAGES[currentIndex].desc}
              </p>
            </div>
          </div>

          {/* Slider Arrow Controls (Exactly like the yellow/lime arrows in reference) */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-brand-lime hover:bg-white text-brand-teal rounded-full flex items-center justify-center transition-all shadow-md focus:outline-none cursor-pointer hover:scale-105 active:scale-95"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6 stroke-[3]" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-brand-lime hover:bg-white text-brand-teal rounded-full flex items-center justify-center transition-all shadow-md focus:outline-none cursor-pointer hover:scale-105 active:scale-95"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6 stroke-[3]" />
          </button>

        </div>

        {/* Dot navigation */}
        <div className="flex justify-center gap-2 mt-6">
          {PORTFOLIO_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                currentIndex === idx ? 'w-8 bg-brand-lime' : 'w-2.5 bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Quick estimate call to action */}
        <div className="mt-10 flex justify-center">
          <a
            href="https://wa.me/5541999107517?text=Olá Arbosat, gostei do portfólio de vocês e gostaria de fazer uma cotação"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-brand-lime hover:bg-white text-brand-teal font-black text-sm rounded-xl transition-all shadow-lg shadow-brand-teal/20 max-w-full text-center whitespace-normal break-words"
          >
            <MessageSquare className="w-4 h-4 shrink-0" />
            <span className="leading-tight">Quero um Trabalho Assim no meu Terreno</span>
          </a>
        </div>

      </div>
    </section>
  );
}
