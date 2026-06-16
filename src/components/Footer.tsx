/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, MessageSquare, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="font-sans">
      
      {/* 1. Diagonal Dual-Color Contact Bar exactly matching the user's image, optimized for seniors */}
      <div id="footer-contato-bar" className="relative h-auto min-h-20 w-full overflow-hidden bg-brand-teal flex flex-col md:flex-row items-stretch border-b-4 border-brand-lime">
        
        {/* Left segment (Lime Green) containing the bold branding CTA */}
        <div 
          className="bg-brand-lime flex items-center justify-center md:justify-start pl-6 pr-12 py-5 md:py-0 z-10 text-[#01423a] font-black text-center md:text-left select-none md:w-[45%]"
          style={{ 
            clipPath: typeof window !== 'undefined' && window.innerWidth > 768 ? 'polygon(0 0, 100% 0, calc(100% - 25px) 100%, 0 100%)' : 'none' 
          }}
        >
          <span className="text-base sm:text-lg md:text-xl lg:text-2xl tracking-tight uppercase leading-tight font-extrabold">
            FALAR COM ATENDENTE AGORA
          </span>
        </div>

        {/* Right segment (Deep Teal) containing our actual clean contacts, with huge text & labels for older adults */}
        <div className="flex-1 flex flex-col sm:flex-row items-center justify-center md:justify-end gap-6 sm:gap-10 px-6 py-6 md:py-0 text-white font-black">
          
          <a 
            href="tel:+554199107517" 
            className="flex items-center gap-3 hover:text-brand-lime transition-colors group cursor-pointer text-base sm:text-lg lg:text-xl py-2"
            title="Ligar para a Arbosat por telefone"
          >
            <Phone className="w-6 h-6 text-brand-lime animate-pulse shrink-0" />
            <div className="text-left font-black">
              <span className="text-[10px] font-mono text-brand-lime uppercase block font-black tracking-widest">LIGAÇÃO DE TELEFONE</span>
              <span className="underline group-hover:no-underline font-extrabold">(41) 9910-7517</span>
            </div>
          </a>

          <a 
            href="https://wa.me/554199107517?text=Olá%20Arbosat,%20gostaria%20de%20um%20orçamento" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-brand-lime transition-colors group cursor-pointer text-base sm:text-lg lg:text-xl py-2"
            title="Mandar mensagem no WhatsApp"
          >
            <MessageSquare className="w-6 h-6 text-brand-lime shrink-0" />
            <div className="text-left font-black">
              <span className="text-[10px] font-mono text-brand-lime uppercase block font-black tracking-widest">CONVERSA NO WHATSAPP</span>
              <span className="underline group-hover:no-underline font-extrabold">(41) 9910-7517</span>
            </div>
          </a>

          <a 
            href="mailto:sac@arbosat.digital" 
            className="flex items-center gap-3 hover:text-brand-lime transition-colors group cursor-pointer text-base sm:text-lg lg:text-xl py-2"
          >
            <Mail className="w-6 h-6 text-brand-lime shrink-0" />
            <div className="text-left font-black">
              <span className="text-[10px] font-mono text-brand-lime uppercase block font-black tracking-widest">ENVIAR E-MAIL</span>
              <span className="underline group-hover:no-underline text-xs sm:text-sm truncate max-w-[180px] block font-extrabold">sac@arbosat.digital</span>
            </div>
          </a>

        </div>
      </div>

      {/* 2. Middle Footer Directory / Branding Statement (optimized for mobile/senior citizens) */}
      <div className="bg-[#111c1a] text-neutral-300 py-12 border-t border-brand-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <img 
                src="https://img.arbosat.digital/logo.png" 
                alt="Logo Arbosat" 
                className="w-44 h-44 md:w-56 md:h-56 object-contain mb-5 filter drop-shadow-md mx-auto md:mx-0 select-none animate-pulse"
                referrerPolicy="no-referrer"
              />
              <h4 className="text-[#a4c514] font-black uppercase text-sm tracking-widest mb-4">
                ARBOSAT
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed font-semibold">
                Sediados no Pinheirinho, atendemos chamados residenciais, comerciais e industriais de manejo arbóreo e plantio de gramas em Curitiba e RMC. Equipamentos pesados e licenças ambientais para qualquer complexidade.
              </p>
            </div>
            
            <div className="pt-4 md:pt-24 lg:pt-0">
              <h4 className="text-[#a4c514] font-black uppercase text-sm tracking-widest mb-4">
                Área de Atendimento
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed font-semibold">
                Atendemos Curitiba, São José dos Pinhais, Araucária, Almirante Tamandaré, Colombo, Campo Largo, Pinhais, e demais cidades vizinhas com agilidade e frota própria.
              </p>
            </div>

            <div className="pt-4 md:pt-0 lg:pt-0">
              <h4 className="text-[#a4c514] font-black uppercase text-sm tracking-widest mb-4">
                Licenciamento
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed font-semibold">
                Nossos arboristas operam estritamente sob as normas NR-35 e NR-12. Garantimos a destinação ecológica certificada dos resíduos verdes e trituração sustentável.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Black Copyright and Developer bar */}
      <div className="bg-black text-neutral-450 py-6 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center text-[11px] font-bold text-neutral-500 font-mono">
          
          {/* Left copyright message matching the reference year style */}
          <p className="uppercase tracking-wider">
            &copy; 2019 - {currentYear} | ARBOSAT | TODOS OS DIREITOS RESERVADOS
          </p>

          {/* Right developer message */}
          <div className="flex items-center gap-1">
            <span>DESENVOLVIDO POR</span>
            <a 
              href="https://supremasite.com.br" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#a4c514] hover:underline flex items-center gap-1 font-bold"
            >
              SUPREMA SITES EXPRESS
              <img 
                src="https://img.supremamidia.com/suprema-img.png" 
                alt="Suprema" 
                className="h-3 inline"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}
