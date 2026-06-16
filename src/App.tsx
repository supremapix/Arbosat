/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ServiceFeatures from './components/ServiceFeatures';
import BairroShowcase from './components/BairroShowcase';
import PortfolioSlider from './components/PortfolioSlider';
import InstagramFeed from './components/InstagramFeed';
import BudgetForm from './components/BudgetForm';
import Footer from './components/Footer';
import { BAIRROS_DATA } from './data/bairros';
import { Neighborhood } from './types';

export default function App() {
  // Let's default to Pinheirinho (our main operation hub index)
  const defaultBairro = BAIRROS_DATA.find(b => b.name === 'Pinheirinho') || BAIRROS_DATA[0];
  const [selectedBairro, setSelectedBairro] = useState<Neighborhood>(defaultBairro);
  const [isLargeFont, setIsLargeFont] = useState(false);

  useEffect(() => {
    // Adjust root document font-size for global typography scaling
    document.documentElement.style.fontSize = isLargeFont ? '18px' : '16px';
  }, [isLargeFont]);

  // Dynamic SEO and Schema.org Optimization Engine
  useEffect(() => {
    if (!selectedBairro) return;

    // 1. Optimize <title> element
    const prefix = selectedBairro.type === 'metropolitan' ? 'na Região de' : 'no Bairro';
    const optimizedTitle = `Corte e Poda de Árvores ${prefix} ${selectedBairro.name}, Curitiba | Arbosat`;
    document.title = optimizedTitle;

    // 2. Optimize Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', selectedBairro.seoDescription);
    }

    // 3. Optimize Open Graph & Twitter Social Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', optimizedTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', selectedBairro.seoDescription);
    }

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', optimizedTitle);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', selectedBairro.seoDescription);
    }

    // 4. Dynamic Schema.org JSON-LD Local Business data injection
    const schemaScript = document.getElementById('schema-local-business');
    if (schemaScript) {
      try {
        const schemaObj = {
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          "name": `Arbosat - Corte e Poda no Bairro ${selectedBairro.name}`,
          "alternateName": "Arbosat Engenharia de Arborização Curitiba",
          "image": "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=800",
          "description": selectedBairro.seoDescription,
          "telephone": "+55-41-9910-7517",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": selectedBairro.type === 'metropolitan' ? selectedBairro.name : `Bairro ${selectedBairro.name}`,
            "addressLocality": "Curitiba",
            "addressRegion": "PR",
            "addressCountry": "BR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": selectedBairro.lat,
            "longitude": selectedBairro.lng
          },
          "url": `https://arbosat.com.br/#bairros-seo`,
          "areaServed": [
            {
              "@type": "AdministrativeArea",
              "name": selectedBairro.name
            },
            {
              "@type": "AdministrativeArea",
              "name": "Curitiba"
            }
          ],
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+55-41-9910-7517",
            "contactType": "customer service"
          }
        };
        schemaScript.textContent = JSON.stringify(schemaObj, null, 2);
      } catch (e) {
        console.warn("Could not dynamically update JSON-LD schema:", e);
      }
    }
  }, [selectedBairro]);

  return (
    <div className="bg-neutral-50 min-h-screen text-neutral-850 text-neutral-800 selection:bg-brand-teal selection:text-white font-sans antialiased">
      {/* 1. Header Bar */}
      <Header isLargeFont={isLargeFont} onToggleLargeFont={() => setIsLargeFont(!isLargeFont)} />

      {/* 2. Hero banner containing autocomplete searching */}
      <Hero onSelectBairro={setSelectedBairro} />

      {/* 2.5 About Us Section (Institucional) */}
      <AboutUs />

      {/* 3. Specialized services showcasing block */}
      <ServiceFeatures />

      {/* 4. Optimized Local SEO Showcase for selected place */}
      <BairroShowcase selectedBairro={selectedBairro} />

      {/* 4.5 Real Portfolio Slider (SERVIÇOS REALIZADOS) */}
      <PortfolioSlider />

      {/* 5. Custom Live Instagram media stream integrations */}
      <InstagramFeed />

      {/* 6. Multi-step Budget Lead Generation Form (forwarding to WhatsApp) */}
      <BudgetForm />

      {/* 7. Compliant footer layout including developers visual watermark */}
      <Footer />

      {/* Floating Accessibility Control for Elderly/Seniors */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2">
        <button
          onClick={() => setIsLargeFont(!isLargeFont)}
          className={`px-4 py-3 rounded-full flex items-center gap-2 font-bold text-xs shadow-lg transition-all border outline-none cursor-pointer ${
            isLargeFont
              ? 'bg-brand-teal text-white border-brand-teal/20 scale-105'
              : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
          }`}
          title={isLargeFont ? 'Diminuir tamanho da letra' : 'Aumentar tamanho da letra'}
        >
          {isLargeFont ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          <span>{isLargeFont ? 'Letra Normal' : 'Letra Grande (Idosos)'}</span>
        </button>
      </div>
    </div>
  );
}
