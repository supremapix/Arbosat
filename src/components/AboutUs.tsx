/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, CheckSquare, ShieldCheck, Check } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="sobre-nos" className="py-16 sm:py-24 bg-white overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Branding text and checklist */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-neutral-500 font-bold block text-sm sm:text-base leading-none">
                Cortes e podas de árvores
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-teal mt-2">
                Sobre a Arbosat
              </h2>
              
              {/* 3 Accent Squares matching reference photo (lime, lime, teal) */}
              <div className="flex gap-1.5 mt-4">
                <div className="w-6 h-3 bg-brand-lime rounded-xs" />
                <div className="w-6 h-3 bg-brand-lime rounded-xs" />
                <div className="w-6 h-3 bg-brand-teal rounded-xs" />
              </div>
            </div>

            {/* Major description statement in deep brand teal */}
            <p className="text-lg sm:text-xl font-bold text-brand-teal leading-relaxed">
              Atendemos particulares, condomínios e empresas em toda Curitiba, região metropolitana, campos gerais e litoral.
            </p>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              A Arbosat cortes e podas de árvores é uma empresa com grande experiência na prestação de serviços. Atuamos with extrema responsabilidade socioambiental, munidos de equipamentos profissionais de última geração que garantem a segurança da equipe de campo e a tranquilidade incomparável dos nossos clientes cotidianos.
            </p>

            {/* Certifications Block */}
            <div className="pt-4 space-y-4">
              <div className="flex items-center gap-2.5">
                <Award className="w-6 h-6 text-amber-500 fill-amber-500/10" />
                <h3 className="text-lg font-black text-brand-teal uppercase tracking-tight">
                  Certificações e Segurança
                </h3>
              </div>

              {/* Grid checklists matching the reference image */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-2 text-xs sm:text-sm font-bold text-neutral-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 bg-brand-teal rounded flex items-center justify-center text-white shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[4]" />
                  </div>
                  <span>ASO</span>
                </div>
                
                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 bg-brand-teal rounded flex items-center justify-center text-white shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[4]" />
                  </div>
                  <span>NR11</span>
                </div>

                <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                  <div className="w-4 h-4 bg-brand-lime rounded flex items-center justify-center text-brand-teal shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[4]" />
                  </div>
                  <span>DESTINAÇÃO DE RESÍDUOS</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 bg-brand-lime rounded flex items-center justify-center text-brand-teal shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[4]" />
                  </div>
                  <span>APR</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 bg-brand-lime rounded flex items-center justify-center text-brand-teal shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[4]" />
                  </div>
                  <span>NR12</span>
                </div>

                <div className="flex items-center gap-2.5" />

                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 bg-brand-yellow bg-amber-500 rounded flex items-center justify-center text-white shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[4]" />
                  </div>
                  <span>ART</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 bg-brand-yellow bg-amber-500 rounded flex items-center justify-center text-white shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[4]" />
                  </div>
                  <span>NR35</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Custom graphic representing tree and backhoe tractor with dirt scoop */}
          <div className="lg:col-span-5 flex items-center justify-center py-6">
            <div className="relative w-full max-w-sm aspect-square bg-[#f5f9e8] rounded-3xl border border-brand-lime/30 p-4 shadow-sm flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 bg-radial-gradient from-white to-transparent opacity-60 pointer-events-none" />
              
              {/* Composite layout representing the tree and tractor in the reference image */}
              <div className="relative w-full h-full flex flex-col justify-end items-center pb-6 z-10 select-none">
                
                {/* Big leafy tree icon representation */}
                <div className="absolute top-4 w-52 h-52 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    {/* Big leafy conifer/tree cloud */}
                    <path d="M100 20 C60 20, 30 50, 30 80 C15 80, 10 110, 30 120 C20 130, 30 160, 60 160 C70 170, 130 170, 140 160 C170 160, 180 130, 170 120 C190 110, 185 80, 170 80 C170 50, 140 20, 100 20 Z" fill="#8cb811" opacity="0.15" />
                    <path d="M100 30 C70 30, 45 55, 45 80 C32 80, 25 105, 42 115 C32 125, 42 150, 68 150 C78 160, 122 160, 132 150 C158 150, 168 125, 158 115 C175 105, 168 80, 155 80 C155 55, 130 30, 100 30 Z" fill="#b4d423" />
                    <circle cx="100" cy="90" r="55" fill="#01423a" opacity="0.12" />
                    {/* Detailed branch outlines */}
                    <path d="M100 110 L100 155 M95 130 L80 122 M105 135 L120 128" stroke="#5c4033" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                </div>

                {/* Yellow Backhoe Loader Tractor Graphic sitting at the base of the tree */}
                <div className="relative w-full max-w-[210px] mt-24 z-20 transform translate-y-3 transition-transform duration-500 group-hover:translate-y-1">
                  <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-md">
                    {/* Background Wheel shadow */}
                    <ellipse cx="65" cy="115" rx="20" ry="8" fill="#000000" opacity="0.2" />
                    <ellipse cx="160" cy="115" rx="28" ry="8" fill="#000000" opacity="0.2" />
                    
                    {/* Tractor Body Cabin */}
                    <rect x="80" y="45" width="60" height="50" rx="4" fill="#333333" />
                    <rect x="85" y="48" width="22" height="22" rx="2" fill="#e0f2f1" />
                    <rect x="112" y="48" width="22" height="22" rx="2" fill="#e0f2f1" />
                    
                    {/* Yellow metal plates */}
                    <path d="M60 80 H145 V110 H60 Z" fill="#b4d423" />
                    <path d="M80 68 H135 V80 H80 Z" fill="#facc15" />
                    <rect x="135" y="80" width="18" height="25" fill="#eab308" />
                    <rect x="52" y="85" width="10" height="15" fill="#b4d423" />
                    
                    {/* Exhaust pipe */}
                    <line x1="130" y1="45" x2="130" y2="25" stroke="#111" strokeWidth="4" />
                    <path d="M130 25 L134 22" stroke="#111" strokeWidth="3" />
                    
                    {/* Front Arm Shovel Loader (Digging / scooping mechanism) */}
                    <path d="M55 95 L25 95 L12 112 M25 95 L14 100" stroke="#555555" strokeWidth="5" strokeLinecap="round" />
                    {/* Shovel cup in golden-yellow */}
                    <path d="M5 105 L22 105 L30 125 L10 125 Z" fill="#eab308" stroke="#cca107" strokeWidth="2" />
                    
                    {/* Rear Digger arm */}
                    <path d="M142 90 L170 65 L190 85" stroke="#444444" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                    
                    {/* Small Front Wheel */}
                    <circle cx="65" cy="110" r="15" fill="#1e293b" />
                    <circle cx="65" cy="110" r="8" fill="#cbd5e1" />
                    <circle cx="65" cy="110" r="4" fill="#1e293b" />
                    
                    {/* Big Rear Wheel */}
                    <circle cx="160" cy="105" r="22" fill="#1e293b" />
                    <circle cx="160" cy="105" r="11" fill="#cbd5e1" />
                    <circle cx="160" cy="105" r="5" fill="#1e293b" />
                  </svg>
                </div>
                
                {/* Grass / Ground Line */}
                <div className="absolute bottom-4 left-4 right-4 h-2 bg-brand-lime rounded-full z-15" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
