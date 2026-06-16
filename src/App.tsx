/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceFeatures from './components/ServiceFeatures';
import BairroShowcase from './components/BairroShowcase';
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

  return (
    <div className="bg-neutral-50 min-h-screen text-neutral-800 selection:bg-emerald-600 selection:text-white font-sans antialiased">
      {/* 1. Header Bar */}
      <Header isLargeFont={isLargeFont} onToggleLargeFont={() => setIsLargeFont(!isLargeFont)} />

      {/* 2. Hero banner containing autocomplete searching */}
      <Hero onSelectBairro={setSelectedBairro} />

      {/* 3. Specialized services showcasing block */}
      <ServiceFeatures />

      {/* 4. Optimized Local SEO Showcase for selected place */}
      <BairroShowcase selectedBairro={selectedBairro} />

      {/* 5. Custom Live Instagram media stream integrations */}
      <InstagramFeed />

      {/* 6. Multi-step Budget Lead Generation Form (forwarding to WhatsApp) */}
      <BudgetForm />

      {/* 7. Compliant footer layout including developers visual watermark */}
      <Footer />

      {/* Floating Accessibility Control for Eldery/Seniors */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2">
        <button
          onClick={() => setIsLargeFont(!isLargeFont)}
          className={`px-4 py-3 rounded-full flex items-center gap-2 font-bold text-xs shadow-lg transition-all border outline-none ${
            isLargeFont
              ? 'bg-emerald-600 text-white border-emerald-500 scale-105'
              : 'bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-50'
          }`}
          title={isLargeFont ? 'Diminuir tamanho da letra' : 'Aumentar tamanho da letra'}
        >
          <span className="text-sm font-sans">A+</span>
          <span>{isLargeFont ? 'Letra Normal' : 'Letra Grande (Idosos)'}</span>
        </button>
      </div>
    </div>
  );
}
