import React from 'react';
import { Shield, Hammer, Trash2, Trees, Cable, Compass, Sparkles } from 'lucide-react';

export default function ServiceFeatures() {
  const services = [
    {
      title: "Poda e Corte de Árvores",
      description: "Manejo técnico para saúde da árvore e segurança do entorno.",
      image: "https://img.arbosat.digital/servico-pr-br.png",
      badge: "PRINCIPAL",
      tags: ["#AbateControlado", "#PodaPreventiva", "#RemocaoRisco"],
      secondaryBadge: "Motosserra e Equipamentos Pesados"
    },
    {
      title: "Acesso por Cordas (Rapel)",
      description: "Tecnologia de ponta para trabalhar em alturas e locais onde máquinas não chegam.",
      image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&q=80&w=600",
      badge: "ESPECIALIZADO",
      tags: ["#RapelIndustrial", "#AcessoPorCordas", "#TrabalhoEmAltura"],
      secondaryBadge: "Certificação Completa NR-35"
    },
    {
      title: "Cabeamento de Galhos (Pinheiros)",
      description: "Instalação de cabos de aço estratégicos para prevenir a queda de galhos pesados, garantindo a segurança de pessoas e imóveis. ⛓️🌲",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=600",
      badge: "ALTA ENGENHARIA",
      tags: ["#SegurancaDePinha", "#CabosDeAco", "#CopaPreservada"],
      secondaryBadge: "Prevenção Antiavarias"
    },
    {
      title: "Limpeza e Remoção de Resíduos",
      description: "Entregamos o local limpo e organizado após a execução do serviço.",
      image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=600",
      badge: "PONTUALIDADE",
      tags: ["#TrituracaoDeGalhos", "#DestinacaoEcologica", "#LocalLimpo"],
      secondaryBadge: "Sustentabilidade Certificada"
    }
  ];

  return (
    <section id="nossos-servicos-jm" className="font-sans relative">
      
      {/* 1. Middle Accent Banner: CONHEÇA NOSSOS SERVIÇOS with raw foliage background */}
      <div className="relative py-12 md:py-16 overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1200" 
            alt="Foliage blur"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-[#01423a]/90 backdrop-blur-xs" />
          <div className="absolute inset-0 bg-brand-lime/10 mix-blend-screen" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="text-brand-lime text-xs sm:text-sm font-black tracking-widest block mb-2 uppercase">
            Mapeamento Técnico de Atividades
          </span>
          <h2 className="text-3xl sm:text-4.5xl font-black text-white uppercase tracking-wider block drop-shadow-sm select-none">
            NOSSOS SERVIÇOS PRINCIPAIS
          </h2>
          <div className="w-24 h-1.5 bg-brand-lime mx-auto mt-4 rounded-full" />
        </div>
      </div>

      {/* 2. Services Grid (Exactly 4 premium Cards requested) */}
      <div className="bg-[#fcfdfa] py-16 sm:py-24 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
            {services.map((srv, idx) => (
              <div 
                key={idx} 
                className="bg-white border-2 border-neutral-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
              >
                {/* Image panel with absolute micro badges */}
                <div className="w-full h-56 sm:h-64 overflow-hidden relative border-b border-neutral-100 bg-neutral-900">
                  <img 
                    src={srv.image} 
                    alt={srv.title}
                    className="w-full h-full object-cover block hover:scale-105 transition-transform duration-700 brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-[#01423a] text-brand-lime text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-md border border-brand-lime/20">
                    {srv.badge}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-md">
                    {srv.secondaryBadge}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 text-left flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#01423a] hover:text-brand-lime transition-colors leading-tight">
                      {srv.title}
                    </h3>
                    
                    {/* Three small block dots under title to keep visual rhythm requested */}
                    <div className="flex gap-1 mt-3">
                      <div className="w-2.5 h-1.5 bg-brand-lime rounded-xs" />
                      <div className="w-2.5 h-1.5 bg-brand-lime rounded-xs" />
                      <div className="w-5 h-1.5 bg-brand-teal rounded-xs" />
                    </div>

                    <p className="mt-5 text-neutral-700 text-sm sm:text-base leading-relaxed font-semibold">
                      {srv.description}
                    </p>
                  </div>

                  {/* Technical safety keywords */}
                  <div className="mt-8 pt-5 border-t border-neutral-100 flex flex-wrap gap-2 text-[10px] font-mono font-black text-neutral-500 uppercase tracking-wider">
                    {srv.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="bg-neutral-50 px-2 py-1 rounded border border-neutral-200/60">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Value added highlights representing technical standards */}
          <div className="mt-16 p-6 sm:p-10 rounded-3xl bg-[#01423a]/5 border-2 border-brand-teal/10 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center shadow-inner">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-teal flex items-center justify-center text-white shrink-0 shadow-md">
                <Shield className="w-6 h-6 text-brand-lime" />
              </div>
              <div>
                <h4 className="text-neutral-900 font-extrabold text-base block leading-snug">Autorização e Segurança Ambiental</h4>
                <p className="text-neutral-600 text-sm mt-1 leading-relaxed">Garantimos o manejo obedecendo estritamente aos regulamentos de podas urbanas de Curitiba e RMC.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#b4d423] flex items-center justify-center text-brand-teal shrink-0 shadow-md">
                <Sparkles className="w-6 h-6 text-brand-teal" />
              </div>
              <div>
                <h4 className="text-neutral-900 font-extrabold text-base block leading-snug">Destinação de Resíduos Inclusa</h4>
                <p className="text-neutral-600 text-sm mt-1 leading-relaxed">Todo galho e resíduo é triturado ou transportado para aterro ecológico licenciado após a execução.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
