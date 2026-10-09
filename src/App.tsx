import React from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutTheBook } from './components/AboutTheBook.tsx';
import { WhatYouGain } from './components/WhatYouGain.tsx';
import { FinalCTA } from './components/FinalCTA.tsx';
import { Footer } from './components/Footer.tsx';

// The verified official Selar checkout destination for this ebook
const SELAR_CHECKOUT_URL = 'https://selar.com/3127sw1184';

export default function App() {
  return (
    <div className="min-h-screen bg-[#091710] text-[#faf7f0] selection:bg-[#faf6ed] selection:text-[#0b1f15]">
      {/* Header */}
      <Header checkoutUrl={SELAR_CHECKOUT_URL} />

      <main>
        {/* 1. Hero Section */}
        <Hero checkoutUrl={SELAR_CHECKOUT_URL} />

        {/* 2. About the Book */}
        <AboutTheBook />

        {/* 3. What You'll Gain */}
        <WhatYouGain />

        {/* 4. Final Call to Action */}
        <FinalCTA checkoutUrl={SELAR_CHECKOUT_URL} />
      </main>

      {/* Minimal Footer */}
      <Footer checkoutUrl={SELAR_CHECKOUT_URL} />
    </div>
  );
}
