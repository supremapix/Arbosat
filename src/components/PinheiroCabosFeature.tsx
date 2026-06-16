/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { ShieldAlert, CheckCircle, Sparkles, MessageSquare, Phone } from 'lucide-react';

export default function PinheiroCabosFeature() {
  useEffect(() => {
    // Dynamically load/trigger Instagram embed script
    const scriptId = 'instagram-embed-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }

    const handleScriptLoad = () => {
      if (window && (window as any).instgrm && (window as any).instgrm.Embeds) {
        try {
          (window as any).instgrm.Embeds.process();
        } catch (err) {
          console.error('Error processing Instagram embeds:', err);
        }
      }
    };

    script.addEventListener('load', handleScriptLoad);

    if (window && (window as any).instgrm && (window as any).instgrm.Embeds) {
      try {
        (window as any).instgrm.Embeds.process();
      } catch (err) {
        console.error('Error processing Instagram embeds immediately:', err);
      }
    }

    return () => {
      if (script) {
        script.removeEventListener('load', handleScriptLoad);
      }
    };
  }, []);

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
                href="https://wa.me/5541999107517?text=Olá,%20gostaria%20de%20enviar%20uma%20foto%20para%20orçamento%20de%20cabeamento%20de%20galhos%20de%20pinheiro"
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
              <div 
                className="w-full flex justify-center items-center my-1 scale-95"
                dangerouslySetInnerHTML={{
                  __html: `
                    <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DYUMWEkurig/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 0; max-width:540px; min-width:326px; padding:0; width:100%;"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DYUMWEkurig/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Ver essa foto no Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DYUMWEkurig/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Um post compartilhado por @arbosat</a></p></div></blockquote>
                  `
                }}
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
