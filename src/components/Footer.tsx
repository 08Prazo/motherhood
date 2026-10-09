import React from 'react';

interface FooterProps {
  checkoutUrl: string;
}

export const Footer: React.FC<FooterProps> = ({ checkoutUrl }) => {
  return (
    <footer className="bg-[#050e09] text-[#cbd6cf] py-14 border-t border-[#12241a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-[#122219]">
          {/* Book & Author Info */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-lg sm:text-xl font-bold tracking-wide text-[#faf7f0] mb-1">
              HOW TO STOP LOSING YOURSELF AFTER BECOMING A MOTHER
            </h3>
            <p className="text-sm text-[#9eb2a5]">
              Written by Praise Adekoya
            </p>
          </div>

          {/* Quick link to purchase */}
          <div>
            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-bold tracking-wider uppercase text-[#d9bf86] hover:text-[#eeddc0] border-b border-[#d9bf86]/40 hover:border-[#d9bf86] pb-0.5 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#d9bf86]"
            >
              Get Your Copy on Selar →
            </a>
          </div>
        </div>

        {/* Minimal copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#82968a] gap-4">
          <p>
            © 2026 Praise Adekoya. All rights reserved.
          </p>
          <p className="italic font-serif text-[#b0c4b6]">
            Motherhood should change your life, but it should not erase you.
          </p>
        </div>
      </div>
    </footer>
  );
};
