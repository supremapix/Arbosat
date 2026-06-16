/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Send, CheckCircle2, AlertOctagon, User, Phone, MapPin, ClipboardList, AlertTriangle, Leaf, Trees, Zap
} from 'lucide-react';
import { BAIRROS_DATA, SERVICE_DETAILS } from '../data/bairros';
import { ServiceType } from '../types';

export default function BudgetForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    bairroId: BAIRROS_DATA[0].id,
    serviceType: 'poda' as ServiceType,
    urgency: 'media' as 'baixa' | 'media' | 'urgente',
    description: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedBairro = BAIRROS_DATA.find(b => b.id === formData.bairroId) || BAIRROS_DATA[0];
    const serviceName = SERVICE_DETAILS.find(s => s.id === formData.serviceType)?.title || formData.serviceType;

    const formattedMessage = 
`*SOLICITAÇÃO DE ORÇAMENTO - ARBOSAT* 🌳

👤 *Nome do Cliente:* ${formData.name}
📞 *Telefone:* ${formData.phone}
📍 *Bairro/Região:* ${selectedBairro.name} (${selectedBairro.region})
🛠️ *Serviço Pretendido:* ${serviceName}
🚨 *Prioridade/Urgência:* ${formData.urgency.toUpperCase()}
🚛 *Distância estimada da Base:* ~${selectedBairro.distanceKm} km (Chegada em ~${selectedBairro.timeMins} min)

📝 *Descrição do Problema:* 
"${formData.description || 'Não especificada pelo usuário'}"

_Enviado através do gerador de orçamentos online da Arbosat._`;

    const whatsappUrl = `https://wa.me/5541999107517?text=${encodeURIComponent(formattedMessage)}`;
    
    window.location.href = whatsappUrl;
    setFormSubmitted(true);
  };

  return (
    <section id="contato-orcamento" className="py-24 bg-white border-t border-neutral-150 overflow-hidden relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* FAQ & Information Panel */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold text-brand-teal bg-brand-lime/25 border border-brand-teal/20 px-3 py-1.5 rounded-full uppercase">
                Avaliação sem Compromisso
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-black text-brand-teal tracking-tight">
                Como Funciona o Nosso Orçamento?
              </h2>
              <p className="mt-4 text-neutral-600 text-sm leading-relaxed font-semibold">
                Nós facilitamos ao máximo. Você não precisa esperar visitas demoradas para ter uma estimativa inicial. Através de fotos e do preenchimento do formulário ao lado, conseguimos avaliar o nível de perigo e repassar custos preliminares imediatamente.
              </p>
            </div>

            {/* Steps line */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center shrink-0 font-mono text-xs font-bold text-brand-teal">
                  1
                </div>
                <div>
                  <h4 className="text-neutral-800 font-extrabold text-sm">Preencha os dados e localidade</h4>
                  <p className="text-xs text-neutral-500 mt-1 font-semibold">Informe seu bairro e detalhes para que estimemos as rotas operacionais de nossa equipe.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center shrink-0 font-mono text-xs font-bold text-brand-teal">
                  2
                </div>
                <div>
                  <h4 className="text-neutral-800 font-extrabold text-sm">Conte o que está acontecendo</h4>
                  <p className="text-xs text-neutral-500 mt-1 font-semibold">Tamanho aproximado da árvore, proximidade com redes elétricas, ou se há perigo agudo de tombamento.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center shrink-0 font-mono text-xs font-bold text-brand-teal">
                  3
                </div>
                <div>
                  <h4 className="text-neutral-800 font-extrabold text-sm">Clique para enviar para o WhatsApp</h4>
                  <p className="text-xs text-neutral-500 mt-1 font-semibold">Sua solicitação é formatada automaticamente. Envie também fotos do local no bate-papo para que o analista passe o preço na hora!</p>
                </div>
              </div>
            </div>

            {/* Fast call banner */}
            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0">
                <AlertTriangle className="w-5 h-5 animate-bounce" />
              </div>
              <div>
                <span className="text-[9px] font-mono text-amber-700 block uppercase font-bold">Plantão de Urgência</span>
                <p className="text-xs text-amber-900 mt-0.5 font-bold">
                  Árvore caída na fiação ou telhado bloqueando portão? Chame direto pelo telefone <strong>(41) 99910-7517</strong> para emergências rápidas.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Lead Input Form */}
          <div className="lg:col-span-12 xl:col-span-7 bg-[#fafbfa] border border-neutral-200 p-6 sm:p-8 rounded-3xl shadow-sm relative">
            <div className="absolute top-4 right-4 text-[9px] font-mono uppercase bg-white text-brand-teal border border-neutral-200 shadow-xs px-2 py-0.5 rounded font-black">
              🔒 SSL Protegido
            </div>

            <div className="flex items-center gap-2.5 mb-6 border-b border-neutral-200 pb-4">
              <ClipboardList className="w-5 h-5 text-brand-teal" />
              <div>
                <h3 className="text-neutral-900 font-extrabold text-lg sm:text-xl">
                  Orçamento Online Instantâneo
                </h3>
                <p className="text-[11px] text-neutral-500 font-mono font-bold uppercase mt-0.5">
                  Envia de forma direta para o WhatsApp de atendimento
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Nome */}
                <div className="space-y-1.5">
                  <label htmlFor="name-input" className="text-xs font-mono text-neutral-600 block font-bold uppercase">
                    Seu Nome Completo
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-neutral-400">
                      <User className="w-4 h-4" />
                    </span>
                    <input
                      id="name-input"
                      type="text"
                      required
                      placeholder="Ex: João da Silva"
                      className="block w-full pl-9 pr-3 py-2.5 bg-white border border-neutral-200 rounded-xl focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/10 text-neutral-800 text-xs font-bold"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>

                {/* Telefone */}
                <div className="space-y-1.5">
                  <label htmlFor="phone-input" className="text-xs font-mono text-neutral-600 block font-bold uppercase">
                    Seu Número de WhatsApp
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-neutral-400">
                      <Phone className="w-4 h-4" />
                    </span>
                    <input
                      id="phone-input"
                      type="tel"
                      required
                      placeholder="Ex: (41) 99910-7517"
                      className="block w-full pl-9 pr-3 py-2.5 bg-white border border-neutral-200 rounded-xl focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/10 text-neutral-800 text-xs font-bold"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Bairro Dropdown Selection */}
                <div className="space-y-1.5">
                  <label htmlFor="bairro-select" className="text-xs font-mono text-neutral-600 block font-bold uppercase">
                    Bairro de Atendimento em Curitiba/RMC
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-neutral-400">
                      <MapPin className="w-4 h-4" />
                    </span>
                    <select
                      id="bairro-select"
                      className="block w-full pl-9 pr-3 py-2.5 bg-white border border-neutral-200 rounded-xl focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/10 text-neutral-800 text-xs font-bold appearance-none cursor-pointer"
                      value={formData.bairroId}
                      onChange={e => setFormData({ ...formData, bairroId: e.target.value })}
                    >
                      {BAIRROS_DATA.map(b => (
                        <option key={b.id} value={b.id} className="text-neutral-800 text-xs font-bold">
                          {b.name} ({b.type === 'official' ? 'Bairro' : b.type === 'popular' ? 'Vila' : 'Cidade'})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Urgência */}
                <div className="space-y-1.5">
                  <label htmlFor="urgency-select" className="text-xs font-mono text-neutral-600 block font-bold uppercase">
                    Nível de Urgência
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-neutral-400">
                      <AlertOctagon className="w-4 h-4" />
                    </span>
                    <select
                      id="urgency-select"
                      className="block w-full pl-9 pr-3 py-2.5 bg-white border border-neutral-200 rounded-xl focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/10 text-neutral-800 text-xs font-bold appearance-none cursor-pointer"
                      value={formData.urgency}
                      onChange={e => setFormData({ ...formData, urgency: e.target.value as any })}
                    >
                      <option value="baixa" className="text-neutral-800 text-xs">Baixa (Manutenção de Rotina)</option>
                      <option value="media" className="text-neutral-800 text-xs">Média (Crescimento Excessivo)</option>
                      <option value="urgente" className="text-amber-700 text-xs font-bold">Alta / Emergência (Risco Iminente)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Service Type */}
              <div className="space-y-1.5">
                <span className="text-xs font-mono text-neutral-600 block font-bold uppercase">Serviço Pretendido</span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'poda', title: 'Poda', icon: <Leaf className="w-3.5 h-3.5" /> },
                    { id: 'remocao', title: 'Remoção', icon: <Trees className="w-3.5 h-3.5" /> },
                    { id: 'corte', title: 'Corte Caída', icon: <Zap className="w-3.5 h-3.5" /> },
                    { id: 'arborizacao', title: 'Consultoria', icon: <ClipboardList className="w-3.5 h-3.5" /> }
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, serviceType: s.id as ServiceType })}
                      className={`py-2.5 px-1.5 rounded-lg flex flex-col sm:flex-row items-center justify-center gap-1.5 text-xs border font-black transition-all cursor-pointer whitespace-normal break-words text-center ${
                        formData.serviceType === s.id
                          ? 'bg-brand-teal border-brand-teal text-white shadow shadow-brand-teal/15 animate-pulse'
                          : 'bg-white border-neutral-200 hover:bg-neutral-50 text-neutral-600'
                      }`}
                    >
                      <span className="shrink-0">{s.icon}</span>
                      <span className="leading-tight">{s.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Descrição */}
              <div className="space-y-1.5">
                <label htmlFor="description-input" className="text-xs font-mono text-neutral-600 block font-bold uppercase">
                  Instruções ou Descrição do Estado da Árvore
                </label>
                <textarea
                  id="description-input"
                  rows={4}
                  required
                  placeholder="Ex: Tenho um pinheiro de grande porte que está ameaçando cair sobre o telhado..."
                  className="block w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/10 text-neutral-800 text-xs font-semibold resize-none"
                  value={formData.description}
                  onChange={e => setFormData({ ...formData, description: e.target.value })}
                />
              </div>

              {/* Submission Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 px-4 rounded-xl bg-brand-teal hover:bg-brand-teal/95 text-white font-black text-sm sm:text-base transition-all shadow-md cursor-pointer hover:translate-y-[-1px] whitespace-normal break-words text-center"
                >
                  <Send className="w-4 h-4 shrink-0" />
                  <span className="leading-tight">Gerar e Enviar Orçamento ao Especialista</span>
                </button>
              </div>
            </form>

            {formSubmitted && (
              <div className="mt-4 flex items-center gap-2 p-3 bg-brand-teal/5 border border-brand-teal/20 rounded-xl text-xs text-brand-teal font-semibold">
                <CheckCircle2 className="w-5 h-5 text-brand-teal shrink-0" />
                <span>Roteando sua solicitação para o aplicativo do WhatsApp. Caso não tenha carregado, confirme o envio manualmente.</span>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
