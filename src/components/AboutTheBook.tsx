import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface AboutTheBookProps {
  checkoutUrl: string;
}

export const AboutTheBook: React.FC<AboutTheBookProps> = ({ checkoutUrl }) => {
  return (
    <section id="about-the-book" className="py-20 sm:py-28 bg-[#0d1e15] border-t border-[#1a3827] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle Section Badge */}
        <div className="text-center mb-4">
          <span className="text-xs uppercase tracking-widest font-bold text-[#d9bf86] block">
            About The Book
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.85rem] font-bold text-[#faf7f0] leading-tight text-center mb-10 max-w-2xl mx-auto">
          You Spend Every Day Taking Care of Everyone. <br className="hidden sm:inline" />
          <span className="italic text-[#eeddc0] font-semibold">
            But Who Is Taking Care of You?
          </span>
        </h2>

        {/* Emotionally Resonant Copy */}
        <div className="space-y-6 text-lg sm:text-xl text-[#ded6c7] font-normal leading-relaxed">
          <p>
            You wake up thinking about what your children will eat, what needs to be done at home, how to meet everyone's expectations, and how to get through another busy day.
          </p>

          <p>
            You keep showing up. You keep giving. You keep telling yourself that you will have time for yourself someday.
          </p>

          <div className="p-5 rounded-lg bg-[#12281d] border border-[#224732] text-[#f4eee2] italic font-serif text-lg sm:text-xl">
            When the children are older. When things get easier. When you have more money. When life finally slows down.
          </div>

          <p>
            But what happens when those days keep coming and you still cannot remember the last time you did something just for yourself?
          </p>

          <p>
            Perhaps you miss the woman who had dreams of her own. The woman who laughed freely, made plans, enjoyed her interests, and felt excited about her future.
          </p>

          <p>
            Perhaps you love your children more than words can explain, yet sometimes wonder when you stopped making room for yourself.
          </p>

          <div className="p-6 rounded-lg bg-[#152c20] border-l-4 border-[#d9bf86] my-6">
            <p className="font-serif italic text-xl sm:text-2xl text-[#faf7f0] font-semibold">
              “If you have ever looked at your life and quietly asked, ‘What about me?’ this book was written with you in mind.”
            </p>
          </div>

          <p>
            <strong className="text-[#faf7f0] font-bold">
              How to Stop Losing Yourself After Becoming a Mother
            </strong>{' '}
            is an invitation to reconnect with the woman behind the responsibilities, rediscover the dreams you have put aside, rebuild your confidence, and learn to make room for yourself without feeling that you are failing your family.
          </p>

          <p>
            You do not have to stop being a devoted mother to start being present in your own life again.
          </p>

          <p className="text-[#faf7f0] font-semibold text-xl">
            You matter, too. And it is not too late to find yourself again.
          </p>
        </div>

        {/* Purchase Call to Action after the emotional description */}
        <div className="mt-12 text-center pt-8 border-t border-[#1c3d2a]">
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold tracking-wider uppercase text-[#0b1f15] bg-[#faf6ed] hover:bg-[#ffffff] active:bg-[#ede5d6] rounded transition-all duration-150 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#faf6ed] focus-visible:ring-offset-[#0d1e15]"
            aria-label="I want to find myself again on Selar (opens in new tab)"
          >
            <span>I WANT TO FIND MYSELF AGAIN</span>
            <ArrowUpRight className="w-5 h-5 ml-2 text-[#0b1f15] stroke-[2.5]" aria-hidden="true" />
          </a>
          <p className="text-xs text-[#a0b3a7] mt-3 font-light">
            Download your copy instantly after secure payment on Selar
          </p>
        </div>
      </div>
    </section>
  );
};
