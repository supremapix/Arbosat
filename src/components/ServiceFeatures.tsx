/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, Calendar, Heart, FileText, Zap } from 'lucide-react';

export default function ServiceFeatures() {
  return (
    <section id="nossos-servicos-jm" className="font-sans relative">
      
      {/* 1. Middle Accent Banner: CONHEÇA NOSSOS SERVIÇOS with wide foliage background */}
      <div className="relative py-12 md:py-16 overflow-hidden flex items-center justify-center text-center">
        {/* Blurred rich foliage background representing branches */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1200" 
            alt="Foliage blur"
            className="w-full h-full object-cover brightness-50"
          />
          {/* Green-yellow translucent color block overlay matching the image */}
          <div className="absolute inset-0 bg-[#8baa1a]/85 backdrop-blur-xs mix-blend-multiply" />
          <div className="absolute inset-0 bg-brand-lime/70 mix-blend-screen" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3.5xl font-black text-white uppercase tracking-widest block drop-shadow-sm select-none">
            CONHEÇA NOSSOS SERVIÇOS
          </h2>
        </div>
      </div>

      {/* 2. Services Grid (Exactly 2 large, premium Cards from the image) */}
      <div className="bg-[#fcfdfa] py-16 sm:py-24 border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            
            {/* Card 1: Corte e Poda */}
            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col hover:translate-y-[-2px]">
              {/* Product Photo: Chainsaw work on wood */}
              <div className="w-full overflow-hidden relative border-b border-neutral-100">
                <img 
                  src="https://img.arbosat.digital/servico-pr-br.png" 
                  alt="Trabalhador operando motosserra com segurança para corte de árvore"
                  className="w-full h-auto block hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 text-center flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#89a415] hover:text-brand-teal transition-colors">
                    Corte e Poda
                  </h3>
                  
                  {/* Three small block dots under title */}
                  <div className="flex justify-center gap-1 mt-2.5">
                    <div className="w-2.5 h-2.5 bg-brand-lime" />
                    <div className="w-2.5 h-2.5 bg-brand-lime" />
                    <div className="w-2.5 h-2.5 bg-brand-teal" />
                  </div>

                  <p className="mt-5 text-neutral-700 text-sm sm:text-base leading-relaxed font-semibold">
                    Corte e poda de árvores de pequeno, médio e grande porte, e todos os tipos de árvore.
                  </p>
                </div>

                {/* Technical safety keywords */}
                <div className="mt-6 pt-5 border-t border-neutral-100 flex flex-wrap justify-center gap-1.5 text-[11px] font-mono font-bold text-neutral-500 uppercase">
                  <span>#PodaLimpeza</span>
                  <span>•</span>
                  <span>#AbateControlado</span>
                  <span>•</span>
                  <span>#RemocaoRisco</span>
                </div>
              </div>
            </div>

            {/* Card 2: Venda e Plantio de grama */}
            <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col hover:translate-y-[-2px]">
              {/* Product Photo: Sod green grass */}
              <div className="w-full overflow-hidden relative border-b border-neutral-100">
                <img 
                  src="https://img.arbosat.digital/grama.png" 
                  alt="Placas de grama natural verde para venda e plantio"
                  className="w-full h-auto block hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 text-center flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#89a415] hover:text-brand-teal transition-colors">
                    Venda e Plantio de grama
                  </h3>
                  
                  {/* Three small block dots under title */}
                  <div className="flex justify-center gap-1 mt-2.5">
                    <div className="w-2.5 h-2.5 bg-brand-lime" />
                    <div className="w-2.5 h-2.5 bg-brand-lime" />
                    <div className="w-2.5 h-2.5 bg-brand-teal" />
                  </div>

                  <p className="mt-5 text-neutral-700 text-sm sm:text-base leading-relaxed font-semibold">
                    Venda, plantio, cultivo, replantio de gramas de qualidade.
                  </p>
                </div>

                {/* Technical safety keywords */}
                <div className="mt-6 pt-5 border-t border-neutral-100 flex flex-wrap justify-center gap-1.5 text-[11px] font-mono font-bold text-neutral-500 uppercase">
                  <span>#GramaEsmeralda</span>
                  <span>•</span>
                  <span>#PlantioGramado</span>
                  <span>•</span>
                  <span>#PaisagismoCuritiba</span>
                </div>
              </div>
            </div>

          </div>

          {/* Value added highlights to represent we also offer other essential forestry specialties */}
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#01423a]/5 border border-[#01423a]/10 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-brand-teal flex items-center justify-center text-white shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-neutral-900 font-extrabold text-sm block">Laudos e Alvarás de Meio Ambiente</h4>
                <p className="text-neutral-600 text-xs mt-0.5">Assessoramos na liberação legal do seu corte ou poda junto à SMMA.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-brand-lime flex items-center justify-center text-brand-teal shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-neutral-900 font-extrabold text-sm block">Trituração de Galhos Orgânicos no Local</h4>
                <p className="text-neutral-600 text-xs mt-0.5">Dispomos de triturador industrial que transforma resíduo em adubo limpo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
