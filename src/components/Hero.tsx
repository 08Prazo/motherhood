import React from 'react';
import { ArrowUpRight, BookOpen } from 'lucide-react';

interface HeroProps {
  checkoutUrl: string;
  onPreviewClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ checkoutUrl, onPreviewClick }) => {
  return (
    <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden bg-[#0a1811]">
      {/* Subtle warm depth in background */}
      <div
        className="absolute top-1/3 right-10 w-96 h-96 bg-[#c9a86a]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Column 1: Main Text Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#12281d] border border-[#204430] text-[#d9bf86] text-xs uppercase tracking-widest font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d9bf86]" />
              <span>A Guide for Mothers</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.35rem] font-bold text-[#faf7f0] leading-[1.18] tracking-tight mb-6 max-w-2xl">
              You became a mother. <br className="hidden sm:inline" />
              <span className="italic font-semibold text-[#eeddc0]">
                But somewhere along the way,
              </span>{' '}
              you lost yourself.
            </h1>

            {/* Short emotional description */}
            <p className="text-lg sm:text-xl text-[#ded6c7] leading-relaxed mb-8 max-w-xl font-normal">
              You love your children. You give your best every day. But when was the last time you did something that reminded you who you are?
            </p>

            {/* GET MY COPY Button - Warm Cream Background with Dark Green Text */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-3">
              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold tracking-wider uppercase text-[#0b1f15] bg-[#faf6ed] hover:bg-[#ffffff] active:bg-[#ede5d6] rounded transition-all duration-150 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#faf6ed] focus-visible:ring-offset-[#0a1811]"
                aria-label="Get my copy on Selar (opens in new tab)"
              >
                <span>GET MY COPY</span>
                <ArrowUpRight className="w-5 h-5 ml-2 text-[#0b1f15] stroke-[2.5]" aria-hidden="true" />
              </a>

              {onPreviewClick && (
                <button
                  type="button"
                  onClick={onPreviewClick}
                  className="inline-flex items-center justify-center px-6 py-4 text-sm font-semibold tracking-wide text-[#faf7f0] hover:text-[#ffffff] bg-[#142b1f] hover:bg-[#1a3828] border border-[#275037] rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d9bf86]"
                >
                  <BookOpen className="w-4 h-4 mr-2 text-[#d9bf86]" aria-hidden="true" />
                  <span>Read Free Sample</span>
                </button>
              )}
            </div>

            <p className="text-sm text-[#b0c2b5] italic font-serif">
              A gentle guide to finding your way back to yourself.
            </p>
          </div>

          {/* Column 2: Prominent Original Ebook Cover */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-xs sm:max-w-sm lg:max-w-md w-full">
              {/* Subtle back ambient glow */}
              <div
                className="absolute -inset-2 bg-[#c9a86a]/15 rounded-2xl blur-xl opacity-70 pointer-events-none"
                aria-hidden="true"
              />

              {/* Book container */}
              <div className="relative rounded-lg p-2.5 sm:p-3 bg-[#11241a] border border-[#244c35] shadow-2xl shadow-black/70">
                <div
                  className="relative aspect-[2/3] w-full overflow-hidden rounded bg-[#07120d] flex items-center justify-center cursor-pointer group"
                  onClick={onPreviewClick}
                  role={onPreviewClick ? 'button' : undefined}
                  tabIndex={onPreviewClick ? 0 : undefined}
                  onKeyDown={(e) => {
                    if (onPreviewClick && (e.key === 'Enter' || e.key === ' ')) {
                      e.preventDefault();
                      onPreviewClick();
                    }
                  }}
                  aria-label="Preview book cover and sample chapters"
                >
                  <img
                    src="/ebook_cover.png"
                    alt="Original ebook cover of How to Stop Losing Yourself After Becoming a Mother by Praise Adekoya"
                    className="w-full h-full object-contain filter drop-shadow select-none transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="eager"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />

                  {/* Look Inside badge on cover */}
                  {onPreviewClick && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3.5 py-1.5 rounded-full bg-[#08150f]/90 backdrop-blur-sm border border-[#d9bf86]/60 text-[#faf7f0] text-xs font-semibold tracking-wide flex items-center space-x-1.5 shadow-lg group-hover:bg-[#faf6ed] group-hover:text-[#0b1f15] transition-all">
                      <BookOpen className="w-3.5 h-3.5 text-[#d9bf86] group-hover:text-[#0b1f15]" />
                      <span>Click to Look Inside</span>
                    </div>
                  )}
                </div>

                <div className="mt-3 px-3 py-2 rounded bg-[#0d1c14] border border-[#1b3828] flex items-center justify-between text-xs text-[#c2d1c7]">
                  <span className="font-serif italic text-[#eeddc0]">Original Ebook Edition</span>
                  <span className="text-[11px] uppercase tracking-wider text-[#9fb1a6]">By Praise Adekoya</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
