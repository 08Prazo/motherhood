import React from 'react';
import { Compass, Feather, Sunrise, ArrowUpRight } from 'lucide-react';

interface WhatYouGainProps {
  checkoutUrl: string;
}

export const WhatYouGain: React.FC<WhatYouGainProps> = ({ checkoutUrl }) => {
  const benefits = [
    {
      number: '01',
      title: 'Rediscover Yourself',
      description: 'Reconnect with the woman behind your everyday responsibilities and remember what brings you personal happiness.',
      icon: Compass,
    },
    {
      number: '02',
      title: 'Release Guilt',
      description: 'Understand that caring for your own needs does not make you a bad mother — it restores you and strengthens your family.',
      icon: Feather,
    },
    {
      number: '03',
      title: 'Make Room for Your Dreams',
      description: 'Take small, realistic steps toward the personal goals, creative interests, and ambitions you postponed.',
      icon: Sunrise,
    },
  ];

  return (
    <section id="what-you-gain" className="py-20 sm:py-28 bg-[#0a1811] border-t border-[#183626] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-widest font-bold text-[#d9bf86] mb-3 block">
            Core Benefits
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#faf7f0] leading-tight">
            Begin finding your way back to you.
          </h2>
          <div className="w-16 h-0.5 bg-[#d9bf86] mx-auto mt-6 opacity-70" aria-hidden="true" />
        </div>

        {/* Three Simple Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="p-8 sm:p-9 rounded-lg bg-[#11241a] border border-[#204430] hover:border-[#2f6044] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-sm tracking-widest text-[#d9bf86] font-semibold">
                      {item.number}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-[#183626] border border-[#274e37] flex items-center justify-center text-[#d9bf86]">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#faf7f0] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-base text-[#ded6c7] font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Purchase Call to Action after the book benefits */}
        <div className="mt-14 text-center">
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold tracking-wider uppercase text-[#0b1f15] bg-[#faf6ed] hover:bg-[#ffffff] active:bg-[#ede5d6] rounded transition-all duration-150 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#faf6ed] focus-visible:ring-offset-[#0a1811]"
            aria-label="Start my journey back to me on Selar (opens in new tab)"
          >
            <span>START MY JOURNEY BACK TO ME</span>
            <ArrowUpRight className="w-5 h-5 ml-2 text-[#0b1f15] stroke-[2.5]" aria-hidden="true" />
          </a>
          <p className="text-xs text-[#a0b3a7] mt-3 font-light">
            Guaranteed safe checkout via Selar • Compatible with all devices
          </p>
        </div>
      </div>
    </section>
  );
};
