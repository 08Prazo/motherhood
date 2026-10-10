import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutTheBook } from './components/AboutTheBook.tsx';
import { NigerianMothers } from './components/NigerianMothers.tsx';
import { WhatYouGain } from './components/WhatYouGain.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { FinalCTA } from './components/FinalCTA.tsx';
import { Footer } from './components/Footer.tsx';
import { BookSampleModal } from './components/BookSampleModal.tsx';

// The verified official Selar checkout destination for this ebook
const SELAR_CHECKOUT_URL = 'https://selar.com/3127sw1184';

export default function App() {
  const [isSampleOpen, setIsSampleOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#091710] text-[#faf7f0] selection:bg-[#faf6ed] selection:text-[#0b1f15]">
      {/* Top Header Navigation */}
      <Header checkoutUrl={SELAR_CHECKOUT_URL} />

      <main>
        {/* 1. Hero Section */}
        <Hero
          checkoutUrl={SELAR_CHECKOUT_URL}
          onPreviewClick={() => setIsSampleOpen(true)}
        />

        {/* 2. Emotional Book Description */}
        <AboutTheBook checkoutUrl={SELAR_CHECKOUT_URL} />

        {/* 3. To the Nigerian Mother Who Is Tired of Being Strong All the Time */}
        <NigerianMothers checkoutUrl={SELAR_CHECKOUT_URL} />

        {/* 4. What You'll Gain (3 Core Benefits) */}
        <WhatYouGain checkoutUrl={SELAR_CHECKOUT_URL} />

        {/* 5. Words from Women Who Understand (15 Reader Review Slots) */}
        <Testimonials />

        {/* 6. Final Call to Action */}
        <FinalCTA checkoutUrl={SELAR_CHECKOUT_URL} />
      </main>

      {/* Minimal, Professional Footer */}
      <Footer checkoutUrl={SELAR_CHECKOUT_URL} />

      {/* Look Inside: Sample Reader from the Uploaded Book */}
      <BookSampleModal
        isOpen={isSampleOpen}
        onClose={() => setIsSampleOpen(false)}
        checkoutUrl={SELAR_CHECKOUT_URL}
      />
    </div>
  );
}
