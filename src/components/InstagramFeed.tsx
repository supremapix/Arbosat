/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Instagram, Smartphone, Heart, Sparkles } from 'lucide-react';

export default function InstagramFeed() {
  return (
    <section id="instagram-section" className="py-12 sm:py-16 md:py-20 bg-neutral-50 relative overflow-hidden border-t border-b border-neutral-200">
      {/* Visual glowing ring backing the feed container */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(219,39,119,0.02),transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-100 border border-pink-200 rounded-full text-xs font-mono font-bold text-pink-850 text-pink-800 uppercase tracking-widest">
            <Instagram className="w-3.5 h-3.5 text-pink-700" />
            Galeria Digital
          </div>
          <h2 className="mt-4 text-3xl font-sans font-black text-neutral-900 tracking-tight">
            Acompanhe Nosso Trabalho Diário
          </h2>
          <p className="mt-3 text-neutral-700 text-sm sm:text-base leading-relaxed">
            Confira fotos de cortes complexos, limpezas estéticas de copas e remoções preventivas realizadas em toda Curitiba em nosso perfil oficial <strong className="text-neutral-900 font-extrabold">@arbosat</strong>. Visibilidade, técnica e responsabilidade ambiental.
          </p>
        </div>

        {/* Embedded Iframe Container with animations */}
        <div className="bg-white border border-neutral-250 border-neutral-200 p-2 sm:p-4 rounded-3xl shadow-sm mb-6 sm:mb-10 overflow-hidden relative group">
          <div className="absolute top-4 right-4 bg-neutral-100 border border-neutral-200 text-[10px] font-mono font-bold text-neutral-700 px-2.5 py-1 rounded-md flex items-center gap-1 z-10 shadow-xs">
            <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
            Embed Oficial
          </div>

          <iframe
            src="https://www.instagram.com/arbosat/embed"
            className="w-full h-[375px] sm:h-[420px] md:h-[600px] lg:h-[620px] rounded-2xl bg-white border-0"
            scrolling="no"
            loading="lazy"
            allowFullScreen
          />
        </div>

        {/* Call to action to follow on Instagram */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://www.instagram.com/arbosat/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-extrabold text-base px-8 py-4 rounded-xl shadow-md shadow-amber-500/10 transition-all hover:scale-[1.01] w-full sm:w-auto"
          >
            <Instagram className="w-5 h-5 fill-white/10" />
            Seguir no Instagram
          </a>
          <a
            href="https://wa.me/554199107517?text=Olá%20Arbosat,%20vi%20o%20trabalho%20de%20vocês%20no%20Instagram%20e%20gostaria%20de%20um%20orçamento"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 group text-sm font-bold text-neutral-700 hover:text-neutral-900 transition-colors"
          >
            Gostou dos projetos? Peça um orçamento igual
            <Sparkles className="w-4 h-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
