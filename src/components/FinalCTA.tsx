import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FinalCTAProps {
  checkoutUrl: string;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ checkoutUrl }) => {
  return (
    <section className="py-24 sm:py-32 bg-[#08150f] border-t border-[#163324] relative overflow-hidden text-center">
      {/* Subtle warm depth in background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#c9a86a]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-[3.25rem] font-bold text-[#faf7f0] leading-tight mb-6 max-w-2xl mx-auto">
          The woman you miss isn't gone.{' '}
          <span className="italic text-[#eeddc0] font-semibold block sm:inline">
            It's time to find her again.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-lg sm:text-xl text-[#ded6c7] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          You have spent so much time showing up for everyone else. Take one small step toward showing up for yourself, too.
        </p>

        {/* Prominent GET YOUR COPY TODAY Button - Warm cream background with dark green text */}
        <div className="flex items-center justify-center mb-6">
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-base font-bold tracking-wider uppercase text-[#0b1f15] bg-[#faf6ed] hover:bg-[#ffffff] active:bg-[#ede5d6] rounded transition-all duration-150 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#faf6ed] focus-visible:ring-offset-[#08150f]"
            aria-label="Get your copy today on Selar (opens in new tab)"
          >
            <span>GET YOUR COPY TODAY</span>
            <ArrowUpRight className="w-5 h-5 ml-2 text-[#0b1f15] stroke-[2.5]" aria-hidden="true" />
          </a>
        </div>

        {/* Supporting line */}
        <p className="text-sm sm:text-base text-[#b0c4b6] italic font-serif">
          Your journey back to you can begin today.
        </p>
      </div>
    </section>
  );
};
