/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Trees, Heart, Phone, Mail, MapPin, MessageSquare, Instagram } from 'lucide-react';
import { BAIRROS_DATA } from '../data/bairros';

export default function Footer() {
  const years = new Date().getFullYear();

  // Pick some major locations to link globally in footer columns
  const majorBairros = BAIRROS_DATA.filter(b => 
    ['Pinheirinho', 'Portão', 'Água Verde', 'Cidade Industrial (CIC)', 'Santa Felicidade', 'Centro', 'Sítio Cercado', 'Novo Mundo'].includes(b.name)
  );

  return (
    <footer className="bg-neutral-100 border-t border-neutral-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-neutral-200 pb-12">
          
          {/* Brand profile */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                <Trees className="w-5 h-5" />
              </div>
              <div>
                <span className="font-sans font-black text-lg tracking-tight text-neutral-900">
                  ARBOSAT<span className="text-emerald-600 font-extrabold">.</span>
                </span>
                <p className="text-[9px] text-neutral-500 font-mono uppercase tracking-wider font-bold">Corte & Poda de Árvores</p>
              </div>
            </div>
            
            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
              Especialistas em salvaguardar patrimônios e vidas através de técnicas precisas de poda florestal de copa, remoção tática de pinheiros e desobstruções prediais rápidas em Curitiba e Região Metropolitana.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/arbosat/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white border border-neutral-200 hover:border-pink-500/40 flex items-center justify-center text-neutral-500 hover:text-pink-500 hover:bg-pink-50 transition-all"
                title="Siga no Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/554199107517"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white border border-neutral-200 hover:border-emerald-500/40 flex items-center justify-center text-neutral-500 hover:text-emerald-500 hover:bg-emerald-50 transition-all"
                title="Chamar no WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Hub Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-wider text-neutral-800 uppercase">Atendimento Principal</h4>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {majorBairros.map((b) => (
                <li key={b.id}>
                  <a
                    href="#bairros-seo"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('hero');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-neutral-600 hover:text-emerald-650 transition-colors block font-medium"
                  >
                    📍 {b.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location / Information contacts */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-wider text-neutral-800 uppercase font-bold">Central de Operações Arbosat</h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-neutral-600">
                  Base Sul: <strong className="text-neutral-800">Bairro Pinheirinho</strong>, Curitiba - PR. Deslocamento dinâmico para mais de 75 bairros e região metropolitana.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href="tel:+554199107517" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                  📞 Central de Chamadas: <strong>(41) 9910-7517</strong>
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href="mailto:contato@arbosat.com.br" className="text-neutral-600 hover:text-neutral-900 transition-colors">
                  📧 Email Técnico: <strong>contato@arbosat.com.br</strong>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom row displaying Copyright & requested Suprema Sites Express visual signature link */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-xs text-neutral-500 font-mono">
            &copy; {years} Arbosat Ltda. Todos os direitos reservados. Atividades com alvará ambiental municipal.
          </p>
          
          {/* Suprema Sites Express Signature - MANDATORY RENDER FORM */}
          <p className="text-neutral-500 hover:text-neutral-800 text-xs flex items-center gap-1.5 transition-colors">
            Desenvolvido com <Heart size={11} className="text-red-500 fill-red-500/50" /> por
            <a
              href="https://supremasite.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-650 hover:text-emerald-600 transition ml-0.5 inline-flex items-center gap-1 font-bold text-neutral-650 text-neutral-700"
            >
              Suprema Sites Express
              <img
                src="https://img.supremamidia.com/suprema-img.png"
                alt="Suprema"
                referrerPolicy="no-referrer"
                className="h-3.5 inline ml-1"
              />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
