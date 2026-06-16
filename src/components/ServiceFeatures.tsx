/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Scissors, ShieldAlert, Zap, FileText, CheckCircle2, ChevronRight, HardHat, Sparkles } from 'lucide-react';
import { SERVICE_DETAILS } from '../data/bairros';

export default function ServiceFeatures() {
  const iconMap: Record<string, any> = {
    Scissors: Scissors,
    ShieldAlert: ShieldAlert,
    Zap: Zap,
    FileText: FileText,
  };

  return (
    <section id="servicos" className="py-12 sm:py-16 md:py-20 bg-white overflow-hidden relative">
      {/* Visual background decorations */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-emerald-100/10 rounded-full blur-3xl z-0" />
      <div className="absolute top-10 left-5 w-64 h-64 bg-neutral-100/30 rounded-full blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-mono font-bold tracking-widest text-emerald-900 bg-emerald-100 border border-emerald-200 px-3 py-1.5 rounded-full uppercase">
            Capacidades Industriais
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-sans font-black text-neutral-900 tracking-tight">
            Nossos Serviços de Arborização Profissional
          </h2>
          <p className="mt-4 text-neutral-700 text-sm sm:text-base leading-relaxed">
            Equipamentos de alta tecnologia (motosserras de precisão, trituradores orgânicos de grande escala, cestos elevados e cabos de sustentação) para realizar podas saudáveis e cortes complexos com risco zero.
          </p>
        </div>

        {/* Dynamic Bento Box Cards Grid for Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICE_DETAILS.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Scissors;
            return (
              <div
                key={service.id}
                id={`card-servico-${service.id}`}
                className="group relative bg-white border border-neutral-250 border-neutral-200 hover:border-emerald-500/60 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all hover:translate-y-[-2px] flex flex-col justify-between"
              >
                <div>
                  {/* Card Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6 animate-pulse" />
                    </div>
                    <span className="text-xs font-mono text-neutral-500 block font-bold">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className="text-lg sm:text-xl font-black text-neutral-900 font-sans group-hover:text-emerald-700 transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Short tag */}
                  <p className="mt-2 text-xs font-mono text-amber-700 font-black uppercase tracking-wider">
                    {service.shortDesc}
                  </p>

                  {/* Long description */}
                  <p className="mt-4 text-neutral-750 text-neutral-700 text-sm sm:text-base leading-relaxed">
                    {service.fullDesc}
                  </p>
                </div>

                {/* Grid Keywords display section for premium SEO optimization */}
                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-2 font-black">
                    Buscas frequentes atendidas:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="text-[11px] font-mono px-2 py-1 rounded bg-neutral-50 border border-neutral-200 text-neutral-800 hover:text-emerald-800 hover:bg-emerald-50 transition-colors font-semibold"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Guarantees Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-10 rounded-2xl bg-gradient-to-r from-emerald-50 via-neutral-50 to-neutral-50 border border-emerald-100 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
              <HardHat className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-neutral-950 font-extrabold font-sans text-base">
                Segurança em Primeiro Lugar e Cobertura Total
              </h4>
              <p className="text-neutral-700 text-sm mt-1 max-w-xl leading-relaxed">
                Nossos arboristas utilizam EPIs completos, realizam escoramentos táticos e operam sob as normas ministeriais NR-35 (trabalho em altura) e NR-12 (segurança em máquinas).
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <a
              href="#contato-orcamento"
              className="px-6 py-3 bg-white border border-neutral-250 border-neutral-200 hover:border-emerald-600 rounded-xl text-neutral-800 font-bold text-sm text-center transition-all cursor-pointer hover:bg-neutral-50"
            >
              Conhecer Linha de Trabalho
            </a>
            <a
              href="https://wa.me/554199107517?text=Olá%20Arbosat,%20gostaria%20de%20conversar%20sobre%20poda/corte de árvore"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-xl text-center shadow-md shadow-emerald-600/10 transition-all"
            >
              Solicitar Contato Imediato
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
