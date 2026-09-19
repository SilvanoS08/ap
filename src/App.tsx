/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturesStrip } from './components/FeaturesStrip';
import { TypologiesSection } from './components/TypologiesSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { GallerySection } from './components/GallerySection';
import { FinancingSimulator } from './components/FinancingSimulator';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { ConversionCta } from './components/ConversionCta';
import { Footer } from './components/Footer';
import { FloatingCta } from './components/FloatingCta';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafaf8] text-stone-900 flex flex-col antialiased selection:bg-amber-400/20 selection:text-amber-900">
      {/* Top Fixed Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero />
        <FeaturesStrip />
        <TypologiesSection />
        <AmenitiesSection />
        <GallerySection />
        <FinancingSimulator />
        <LocationSection />
        <FaqSection />
        <ConversionCta />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating Interest Button */}
      <FloatingCta />
    </div>
  );
}

