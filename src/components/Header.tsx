import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  checkoutUrl: string;
}

export const Header: React.FC<HeaderProps> = ({ checkoutUrl }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#091710]/95 backdrop-blur-md border-b border-[#1b3627] py-3.5 shadow-lg shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Author / Brand text */}
        <a
          href="#"
          className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d9bf86] rounded"
          aria-label="Praise Adekoya - Home"
        >
          <span className="font-serif text-lg sm:text-xl font-bold tracking-wide text-[#faf7f0] group-hover:text-[#eeddc0] transition-colors">
            PRAISE ADEKOYA
          </span>
          <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#9fb1a6]">
            Author & Counselor
          </span>
        </a>

        {/* Navigation & Direct Purchase Button */}
        <div className="flex items-center space-x-3 sm:space-x-6">
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-[#c8d6ce]">
            <a
              href="#about-the-book"
              className="hover:text-[#faf7f0] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#d9bf86]"
            >
              The Book
            </a>
            <a
              href="#nigerian-mothers"
              className="hover:text-[#faf7f0] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#d9bf86]"
            >
              For Nigerian Mothers
            </a>
            <a
              href="#what-you-gain"
              className="hover:text-[#faf7f0] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#d9bf86]"
            >
              What You'll Gain
            </a>
            <a
              href="#reader-reflections"
              className="hover:text-[#faf7f0] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#d9bf86]"
            >
              Reader Reflections
            </a>
          </nav>

          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#0b1f15] bg-[#faf6ed] hover:bg-[#ffffff] active:bg-[#ede5d6] rounded transition-all duration-150 shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#faf6ed] focus-visible:ring-offset-[#091710]"
            aria-label="Get my copy on Selar (opens in new tab)"
          >
            <span>GET MY COPY</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 stroke-[2.5]" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
};
