/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldAlert, CheckCircle, Sparkles, MessageSquare, Phone } from 'lucide-react';

export default function PinheiroCabosFeature() {
  return (
    <section id="cabeamento-pinheiros" className="py-16 sm:py-24 bg-neutral-100 overflow-hidden font-sans border-t border-b border-neutral-200 relative">
      {/* Subtle organic radial accents inside background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(164,197,20,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Deep safety presentation with specialized cabling info */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-emerald-800 font-black block text-xs sm:text-sm uppercase tracking-widest leading-none">
                ⛓️🌲 SEGURANÇA E PRESERVAÇÃO DE CONÍFERAS
              </span>
              <h2 className="text-3xl sm:text-4.5xl md:text-5xl font-black text-brand-teal mt-3 leading-tight tracking-tight">
                Cabeamento de Galhos de Pinheiro
              </h2>
              
              {/* 3 Accent Squares matching branding style */}
              <div className="flex gap-1.5 mt-4">
                <div className="w-8 h-3.5 bg-brand-lime rounded-xs animate-pulse" />
                <div className="w-8 h-3.5 bg-emerald-600 rounded-xs" />
                <div className="w-8 h-3.5 bg-brand-teal rounded-xs" />
              </div>
            </div>

            {/* Description Block */}
            <div className="bg-white border-l-8 border-emerald-600 rounded-3xl p-5 sm:p-7 shadow-sm space-y-4">
              <p className="text-lg sm:text-2xl font-black text-[#01423a] leading-tight flex items-center gap-2 flex-wrap">
                <span>⛓️🌲 Proteja seu Pinheiro e sua Família com a Arbosat!</span>
                <span className="text-amber-500 animate-bounce">⚠️</span>
              </p>
              
              <p className="text-neutral-850 font-bold text-base sm:text-lg leading-relaxed">
                Você tem um pinheiro com galhos pesados ou que oferecem risco iminente de queda?
              </p>
              
              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                Na Arbosat, somos especialistas em <strong className="text-brand-teal font-extrabold text-base sm:text-lg">Cabeamento de Galhos com Cabos de Aço</strong>. Uma técnica altamente segura, certificada e recomendada para prevenir acidentes estruturais e quedas indesejadas, preservando o desenvolvimento saudável da árvore e garantindo a defesa ativa do seu patrimônio. 🏗️✅
              </p>
            </div>

            {/* Structured List of Benefits with custom icons */}
            <div className="space-y-4 pt-2">
              <h3 className="text-lg sm:text-xl font-black text-brand-teal uppercase tracking-tight flex items-center gap-2">
                <ShieldAlert className="w-5.5 h-5.5 text-emerald-600 shrink-0" />
                Por que fazer o cabeamento do Pinheiro?
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 bg-white p-4.5 rounded-2xl border border-neutral-200 shadow-xs">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-neutral-900 text-sm sm:text-base">Prevenção de Vendavais</h4>
                    <p className="text-neutral-600 text-xs sm:text-sm mt-1 leading-relaxed">Evita a queda repentina de galhos robustos e pesados sobrecarregados por ventanias severas.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-4.5 rounded-2xl border border-neutral-200 shadow-xs">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-neutral-900 text-sm sm:text-base">Proteção à Vida</h4>
                    <p className="text-neutral-600 text-xs sm:text-sm mt-1 leading-relaxed">Garante a segurança integral de residências, garagens, fiações de postes, automóveis e pedestres.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-4.5 rounded-2xl border border-neutral-200 shadow-xs sm:col-span-2">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-neutral-900 text-sm sm:text-base">Longevidade e Equilíbrio</h4>
                    <p className="text-neutral-600 text-xs sm:text-sm mt-1 leading-relaxed">Mantém a copa da conífera estruturada por muito mais tempo. Evita cortes radicais e mantém a majestosa integridade verde que embeleza o seu ambiente.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Safety call-to-action - High accessibility typography and wrapping safe buttons */}
            <div className="pt-4 border-t border-neutral-250 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="https://wa.me/554199107517?text=Olá,%20gostaria%20de%20enviar%20uma%20foto%20para%20orçamento%20de%20cabeamento%20de%20galhos%20de%20pinheiro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center text-center gap-1.5 py-4 px-6 rounded-2xl bg-[#01423a] hover:bg-[#002f29] text-brand-lime hover:text-white shadow-lg transition-all active:scale-[0.99] whitespace-normal break-words cursor-pointer border-2 border-brand-teal"
              >
                <span className="flex items-center gap-1 px-1 font-black text-xs uppercase tracking-widest text-[#a4c514]">
                  <MessageSquare className="w-4 h-4 fill-[#b4d423]/10 stroke-[3]" />
                  AVALIAÇÃO DE PINHEIRO
                </span>
                <span className="text-base sm:text-lg font-black leading-none text-white">Chamar no WhatsApp</span>
              </a>
              
              <div className="flex-1 text-center sm:text-left space-y-1">
                <span className="text-xs font-mono font-black text-amber-600 block uppercase tracking-widest">
                  ⚠️ PREVENÇÃO AGORA!
                </span>
                <p className="text-neutral-700 text-xs sm:text-sm font-semibold max-w-sm">
                  Não espere o pior acontecer nos temporais. Realize estaiamento preventivo com os melhores especialistas!
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Instagram Reel Embed with Pristine Layout Compatibility */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center py-4">
            <span className="text-[10px] sm:text-xs font-mono font-black text-emerald-900 bg-brand-lime border border-emerald-300 px-3 py-1 flex items-center gap-1.5 rounded-full mb-4 shadow-sm select-none">
              <Sparkles className="w-3.5 h-3.5 text-emerald-800 animate-spin" />
              REGISTRO REAL NO INSTAGRAM (@ARBOSAT)
            </span>
            
            {/* Embedded Reel Box styled for elite performance on any device */}
            <div className="w-full max-w-[390px] bg-white border-2 border-neutral-200 p-2 sm:p-3 rounded-3xl shadow-xl relative overflow-hidden">
              <iframe
                src="https://www.instagram.com/reel/DNjaJHPN6c_/embed/captioned/"
                className="w-full h-[540px] sm:h-[600px] md:h-[620px] rounded-2xl bg-white border-0"
                scrolling="no"
                loading="lazy"
                allowFullScreen
              />
            </div>
            
            <p className="text-xs text-neutral-500 font-bold mt-4 text-center max-w-[340px] leading-relaxed">
              Assista ao vídeo no nosso Instagram e aprenda como a Arbosat protege o seu imóvel com cabos certificados!
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
