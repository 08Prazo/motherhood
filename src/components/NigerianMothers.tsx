import React from 'react';
import { ArrowUpRight, Heart } from 'lucide-react';

interface NigerianMothersProps {
  checkoutUrl: string;
}

export const NigerianMothers: React.FC<NigerianMothersProps> = ({ checkoutUrl }) => {
  return (
    <section id="nigerian-mothers" className="py-20 sm:py-28 bg-[#0c1c14] border-t border-[#183526] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Subtle emblem */}
        <div className="flex items-center justify-center space-x-2 text-[#d9bf86] mb-4">
          <Heart className="w-4 h-4 fill-[#d9bf86]/20 text-[#d9bf86]" aria-hidden="true" />
          <span className="text-xs uppercase tracking-widest font-bold">A Heartfelt Note</span>
        </div>

        {/* Section Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-[#faf7f0] leading-tight text-center mb-10 max-w-2xl mx-auto">
          To the Nigerian Mother Who Is Tired of Being Strong All the Time…
        </h2>

        {/* Emotional Passage */}
        <div className="space-y-6 text-lg sm:text-xl text-[#ded6c7] font-normal leading-relaxed">
          <p>
            In our culture, strength is expected. You are praised for how much you can carry, how quietly you endure, and how effortlessly you seem to keep everything moving. But nobody asks what carrying all of that feels like on the inside.
          </p>

          {/* Bulleted empathetic realities */}
          <div className="my-8 p-6 sm:p-8 rounded-lg bg-[#11241a] border border-[#1e422f] space-y-4 text-base sm:text-lg">
            <div className="flex items-start space-x-3.5">
              <span className="w-2 h-2 rounded-full bg-[#d9bf86] mt-2.5 shrink-0" aria-hidden="true" />
              <p>Preparing meals and getting the children ready for school while your mind is already racing through everything else that must be handled before the sun sets.</p>
            </div>
            <div className="flex items-start space-x-3.5">
              <span className="w-2 h-2 rounded-full bg-[#d9bf86] mt-2.5 shrink-0" aria-hidden="true" />
              <p>Balancing work, business, household demands, and the relentless pressure of the cost of living.</p>
            </div>
            <div className="flex items-start space-x-3.5">
              <span className="w-2 h-2 rounded-full bg-[#d9bf86] mt-2.5 shrink-0" aria-hidden="true" />
              <p>Being the pillar everyone leans on, the one who solves every crisis, even when you are desperately praying for someone to support you too.</p>
            </div>
            <div className="flex items-start space-x-3.5">
              <span className="w-2 h-2 rounded-full bg-[#d9bf86] mt-2.5 shrink-0" aria-hidden="true" />
              <p>Quietly putting your own ambitions, education, or business ideas on hold because there is always another urgent family demand that takes priority.</p>
            </div>
            <div className="flex items-start space-x-3.5">
              <span className="w-2 h-2 rounded-full bg-[#d9bf86] mt-2.5 shrink-0" aria-hidden="true" />
              <p>Smiling and answering <em>“I’m fine”</em> because explaining the depth of your fatigue would simply take too much energy.</p>
            </div>
            <div className="flex items-start space-x-3.5">
              <span className="w-2 h-2 rounded-full bg-[#d9bf86] mt-2.5 shrink-0" aria-hidden="true" />
              <p>Feeling an immediate sting of guilt the moment you wish for an afternoon to rest, time alone, or a dream that belongs strictly to you.</p>
            </div>
          </div>

          <p>
            Every mother's circumstances are unique, but the silent exhaustion of self-erasure is a burden too many women carry in isolation.
          </p>

          {/* Concluding message */}
          <div className="p-6 rounded-lg bg-[#14291d] border-l-4 border-[#d9bf86] text-center sm:text-left my-8">
            <p className="font-serif italic text-xl sm:text-2xl text-[#faf7f0] font-semibold leading-relaxed">
              “You can love your family with everything in you and still deserve a life in which you feel seen, supported, and alive.”
            </p>
          </div>
        </div>

        {/* Emotionally relevant call to action */}
        <div className="mt-10 text-center">
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold tracking-wider uppercase text-[#0b1f15] bg-[#faf6ed] hover:bg-[#ffffff] active:bg-[#ede5d6] rounded transition-all duration-150 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#faf6ed] focus-visible:ring-offset-[#0c1c14]"
            aria-label="Get your copy on Selar (opens in new tab)"
          >
            <span>START MY JOURNEY BACK TO ME</span>
            <ArrowUpRight className="w-5 h-5 ml-2 text-[#0b1f15] stroke-[2.5]" aria-hidden="true" />
          </a>
          <p className="text-xs text-[#a0b3a7] mt-3 font-light">
            Instant digital access on your phone, tablet, or laptop via Selar
          </p>
        </div>
      </div>
    </section>
  );
};
