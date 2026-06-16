/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import {
  MapPin, Clock, Truck, ShieldCheck, CheckCircle,
  HelpCircle, Sparkles, MessageSquare, ExternalLink, Settings, Trees
} from 'lucide-react';
import { APIProvider, Map, AdvancedMarker, Pin, useMap, useMapsLibrary } from '@vis.gl/react-google-maps';
import { Neighborhood } from '../types';
import { HQ_COORDS } from '../data/bairros';

interface BairroShowcaseProps {
  selectedBairro: Neighborhood;
}

const API_KEY =
  process.env.GOOGLE_MAPS_PLATFORM_KEY ||
  (import.meta as any).env?.VITE_GOOGLE_MAPS_PLATFORM_KEY ||
  (globalThis as any).GOOGLE_MAPS_PLATFORM_KEY ||
  '';

const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

function RouteMapLayer({ origin, destination }: {
  origin: google.maps.LatLngLiteral;
  destination: google.maps.LatLngLiteral;
}) {
  const map = useMap();
  const routesLib = useMapsLibrary('routes');
  const polylinesRef = useRef<google.maps.Polyline[]>([]);

  useEffect(() => {
    if (!routesLib || !map) return;
    
    // Clear previous polylines
    polylinesRef.current.forEach(p => p.setMap(null));
    polylinesRef.current = [];

    routesLib.Route.computeRoutes({
      origin,
      destination,
      travelMode: 'DRIVING',
      fields: ['path', 'viewport'],
    }).then(({ routes }) => {
      if (routes?.[0]) {
        const newPolylines = routes[0].createPolylines();
        newPolylines.forEach(p => {
          // Style polyline to match brand teal
          p.setOptions({
            strokeColor: '#01423a',
            strokeWeight: 5,
            strokeOpacity: 0.9,
          });
          p.setMap(map);
        });
        polylinesRef.current = newPolylines;
        if (routes[0].viewport) {
          map.fitBounds(routes[0].viewport);
        }
      }
    }).catch(err => {
      console.warn("Could not draw live route. Drawing straight-line alternative.", err);
      const fallbackLine = new google.maps.Polyline({
        path: [origin, destination],
        strokeColor: '#b4d423',
        strokeWeight: 4,
        strokeOpacity: 0.8,
        map: map
      });
      polylinesRef.current = [fallbackLine];
      
      const bounds = new google.maps.LatLngBounds();
      bounds.extend(origin);
      bounds.extend(destination);
      map.fitBounds(bounds);
    });

    return () => {
      polylinesRef.current.forEach(p => p.setMap(null));
    };
  }, [routesLib, map, origin, destination]);

  return null;
}

export default function BairroShowcase({ selectedBairro }: BairroShowcaseProps) {
  const [schemaInjected, setSchemaInjected] = useState('');

  useEffect(() => {
    const serviceName = selectedBairro.type === 'metropolitan' 
      ? `Corte e Poda de Árvores em ${selectedBairro.name}` 
      : `Corte e Poda de Árvores no bairro ${selectedBairro.name} Curitiba`;
      
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `Arbosat - ${serviceName}`,
      "image": "https://img.arbosat.digital/logo.png",
      "telephone": "+55 41 99910-7517",
      "email": "sac@arbosat.digital",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Principal do Pinheirinho",
        "addressLocality": "Curitiba",
        "addressRegion": "PR",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": selectedBairro.lat,
        "longitude": selectedBairro.lng
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": selectedBairro.name
      }
    };

    const schemaString = JSON.stringify(schemaData, null, 2);
    setSchemaInjected(schemaString);

    const scriptId = 'arbosat-seo-schema';
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = scriptId;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = schemaString;

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [selectedBairro]);

  const prepWhatsAppMsg = () => {
    const isBairro = selectedBairro.type !== 'metropolitan';
    const locationText = isBairro ? `bairro ${selectedBairro.name}` : `cidade de ${selectedBairro.name}`;
    const baseMsg = `Olá Arbosat! Vi o site de vocês e gostaria de solicitar um orçamento online para corte e poda de árvores no ${locationText}. Minha estimativa de distância é de ${selectedBairro.distanceKm} km da sede de vocês no Pinheirinho.`;
    return encodeURIComponent(baseMsg);
  };

  return (
    <section id="bairros-seo" className="py-12 sm:py-16 md:py-20 bg-[#fafbfa] border-t border-neutral-200 overflow-hidden relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block with customized brand colors */}
        <div className="mb-8 sm:mb-12 border-b border-neutral-200 pb-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-teal bg-brand-lime/25 border border-brand-teal/20 px-3 py-1.5 rounded-full uppercase mb-4 shadow-sm">
              <Trees className="w-3.5 h-3.5 text-brand-teal" />
              SEO Local Habilitado • {selectedBairro.region}
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-teal tracking-tight">
              {selectedBairro.type === 'metropolitan' ? (
                <>Corte e Poda de Árvores na Região de <span className="text-brand-lime bg-brand-teal px-2 py-0.5 rounded">{selectedBairro.name}</span></>
              ) : (
                <>Corte e Poda de Árvores no Bairro <span className="text-brand-lime bg-brand-teal px-2 py-0.5 rounded">{selectedBairro.name}</span></>
              )}
            </h2>
            
            <p className="mt-4 text-neutral-600 text-sm sm:text-base leading-relaxed font-semibold">
              Exibindo rotas de atendimento, estimativas de tempos de trânsito e especificidades táticas para a arboricultura no {selectedBairro.name}.
            </p>
          </div>

          <div className="shrink-0 bg-white border border-brand-lime p-4 rounded-xl flex items-center gap-3 shadow-md">
            <span className="w-2.5 h-2.5 bg-brand-lime rounded-full animate-ping" />
            <div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase block font-black">Prontidão de Atendimento</span>
              <strong className="text-[#01423a] text-sm font-black block">~{selectedBairro.timeMins} min de viagem</strong>
            </div>
          </div>
        </div>

        {/* Info Grid for Selected Place */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-12">
          
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-neutral-200 space-y-5 shadow-sm">
              <h3 className="text-sm font-black text-brand-teal uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-brand-lime" />
                Informações de Cobertura
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200">
                  <span className="text-[9px] font-mono text-neutral-500 block uppercase font-black">Origem Sede</span>
                  <strong className="text-brand-teal text-xs font-black block mt-1">Pinheirinho HQ</strong>
                </div>
                <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200">
                  <span className="text-[9px] font-mono text-neutral-500 block uppercase font-black">Destino</span>
                  <strong className="text-brand-teal text-xs font-black truncate block mt-1">{selectedBairro.name}</strong>
                </div>
                <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200 flex items-center gap-2.5">
                  <Truck className="w-5 h-5 text-brand-teal" />
                  <div>
                    <span className="text-[9px] font-mono text-neutral-500 block uppercase font-black">Distância</span>
                    <strong className="text-neutral-950 text-sm font-black block">{selectedBairro.distanceKm === 0 ? 'Local' : `~${selectedBairro.distanceKm} km`}</strong>
                  </div>
                </div>
                <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200 flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-brand-teal" />
                  <div>
                    <span className="text-[9px] font-mono text-neutral-500 block uppercase font-black">Deslocamento</span>
                    <strong className="text-neutral-950 text-sm font-black block">~{selectedBairro.timeMins} minutos</strong>
                  </div>
                </div>
              </div>

              {/* Dynamic description with SEO terms */}
              <div className="text-neutral-700 text-sm leading-relaxed border-t border-neutral-200 pt-5 space-y-4 font-semibold">
                <p>{selectedBairro.seoDescription}</p>
                
                {selectedBairro.safetyNote && (
                  <p className="text-xs font-mono text-brand-teal bg-brand-lime/15 p-3 rounded-xl border border-brand-lime/30">
                    ⚠️ <strong>Nota Técnica:</strong> {selectedBairro.safetyNote}
                  </p>
                )}
              </div>

              {/* Tag previews */}
              <div className="pt-4 border-t border-neutral-200">
                <span className="text-[10px] font-mono text-neutral-500 block uppercase tracking-wider mb-2 font-black">Metatags SEO Indexadas</span>
                <div className="flex flex-wrap gap-1 md:gap-1.5 text-xs font-bold text-neutral-700">
                  <span className="px-2 py-0.5 rounded bg-neutral-50 border border-neutral-200 text-[11px]">
                    poda de arvores curitiba
                  </span>
                  <span className="px-2 py-0.5 rounded bg-neutral-50 border border-neutral-200 text-[11px]">
                    corte de arvores bairro {selectedBairro.name.toLowerCase()}
                  </span>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/5541999107517?text=${prepWhatsAppMsg()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-4 px-4 rounded-xl bg-brand-teal hover:bg-brand-teal/95 text-white font-black text-base transition-all shadow-md group cursor-pointer whitespace-normal break-words text-center"
            >
              <MessageSquare className="w-5 h-5 fill-white/10 shrink-0" />
              <span className="leading-tight">Solicitar Corte/Poda no {selectedBairro.name}</span>
            </a>
          </div>

          {/* Interactive Route Map Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-neutral-200 shadow-sm overflow-hidden flex flex-col justify-between p-1.5 relative min-h-[400px]">
            {hasValidKey ? (
              <div className="w-full h-full min-h-[380px] rounded-2xl overflow-hidden relative">
                <APIProvider apiKey={API_KEY} version="weekly">
                  <Map
                    defaultCenter={HQ_COORDS}
                    defaultZoom={11}
                    mapId="DEMO_MAP_ID"
                    internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
                    style={{ width: '100%', height: '100%', minHeight: '380px' }}
                    gestureHandling="cooperative"
                    disableDefaultUI={true}
                  >
                    <AdvancedMarker position={HQ_COORDS} title="Sede Arbosat (Pinheirinho)">
                      <Pin background="#01423a" glyphColor="#fff" scale={1.2}>
                        🌲
                      </Pin>
                    </AdvancedMarker>

                    <AdvancedMarker position={{ lat: selectedBairro.lat, lng: selectedBairro.lng }} title={selectedBairro.name}>
                      <Pin background="#b4d423" glyphColor="#01423a" scale={1.2}>
                        📍
                      </Pin>
                    </AdvancedMarker>

                    <RouteMapLayer origin={HQ_COORDS} destination={{ lat: selectedBairro.lat, lng: selectedBairro.lng }} />
                  </Map>
                </APIProvider>
                
                <div className="absolute bottom-4 left-4 bg-white border border-neutral-200 p-3 rounded-xl max-w-xs z-10 shadow-sm">
                  <p className="text-[11px] font-mono text-neutral-700">
                    🌍 Rota via <strong>Google Maps API</strong> • {selectedBairro.distanceKm} km.
                  </p>
                </div>
              </div>
            ) : (
              <div className="w-full h-full min-h-[380px] rounded-2xl bg-neutral-50 border border-neutral-200 p-6 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(1,66,58,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(1,66,58,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />
                  <div className="absolute top-1/2 left-1/4 w-96 h-96 border border-brand-teal rounded-full -translate-x-1/2 -translate-y-1/2" />
                </div>

                <div className="relative z-10 flex flex-col sm:flex-row gap-6 justify-between items-start h-full">
                  <div className="w-full sm:w-1/2 space-y-4">
                    <span className="text-[10px] font-mono text-brand-teal bg-brand-lime/20 px-2 py-0.5 rounded border border-brand-teal/20 uppercase tracking-wider font-bold">
                      Visualizador de Rota offline
                    </span>
                    <h4 className="text-sm font-extrabold text-neutral-900 font-sans">
                      Trajeto de atendimento até {selectedBairro.name}
                    </h4>

                    <div className="bg-white border border-neutral-200 rounded-xl p-4 space-y-3 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-brand-teal" />
                        <div>
                          <p className="text-[10px] text-neutral-500 font-mono uppercase font-black">Origem Central</p>
                          <strong className="text-neutral-800 text-xs font-bold block">Pinheirinho HQ</strong>
                        </div>
                      </div>
                      <div className="h-6 border-l border-dashed border-neutral-350 ml-1" />
                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-brand-lime animate-pulse" />
                        <div>
                          <p className="text-[10px] text-neutral-500 font-mono uppercase font-black">Destino</p>
                          <strong className="text-neutral-800 text-xs font-bold block">{selectedBairro.name} ({selectedBairro.region})</strong>
                        </div>
                      </div>
                    </div>

                    <div className="text-xs text-neutral-600 space-y-1 font-mono">
                      <p>📏 Distância: ~{selectedBairro.distanceKm} km</p>
                      <p>🚗 Viagem: ~{selectedBairro.timeMins} minutos</p>
                    </div>
                  </div>

                  <div className="w-full sm:w-1/2 bg-white border border-neutral-200 p-4 rounded-xl space-y-3 shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-black text-brand-teal uppercase">
                      <Settings className="w-4 h-4 text-brand-lime animate-spin" />
                      Ativar Satélite Google
                    </div>
                    <p className="text-[11px] text-neutral-500 leading-relaxed">
                      Integre o mapa real por satélite do Google em segundos adicionando sua chave de acesso:
                    </p>
                    <ol className="text-[10px] text-neutral-600 space-y-1 list-decimal list-inside font-mono">
                      <li>Obtenha uma <a href="https://console.cloud.google.com/google/maps-apis/start?utm_campaign=gmp-code-assist-ais" target="_blank" rel="noopener" className="text-brand-teal underline font-bold">Google Maps API Key</a>.</li>
                      <li>Use o menu <strong>Secrets</strong> de AI Studio para adicionar o valor na variável: <code>GOOGLE_MAPS_PLATFORM_KEY</code>.</li>
                    </ol>
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between border-t border-neutral-200 pt-3 mt-4 text-[10px] text-neutral-500 font-mono">
                  <span>LAT: {selectedBairro.lat.toFixed(4)}</span>
                  <span>LNG: {selectedBairro.lng.toFixed(4)}</span>
                </div>
              </div>
            )}
          </div>

        </div>

        <div className="bg-white border border-neutral-200 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-brand-teal shrink-0" />
            <p className="text-xs text-neutral-600">
              Injetado automaticamente em tempo real no cabeçalho: <strong>Schema LocalBusiness JSON-LD</strong> estruturado sob as exigências do Google para otimização de busca local do {selectedBairro.name}.
            </p>
          </div>
          <button
            onClick={() => {
              const codeBlock = document.getElementById('schema-code-preview');
              if (codeBlock) codeBlock.classList.toggle('hidden');
            }}
            className="px-3.5 py-1.5 shrink-0 bg-neutral-50 border border-neutral-200 hover:border-brand-lime rounded-lg text-[11px] font-mono text-neutral-600 hover:text-brand-teal transition-all cursor-pointer font-extrabold"
          >
            Ver Código Schema
          </button>
        </div>
        <pre
          id="schema-code-preview"
          className="hidden mt-4 p-4 text-[11px] font-mono text-brand-teal bg-neutral-50 border border-neutral-200 rounded-xl overflow-x-auto max-h-48 shadow-inner"
        >
          {schemaInjected}
        </pre>

      </div>
    </section>
  );
}
