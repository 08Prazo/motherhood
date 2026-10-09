import React from 'react';

export const AboutTheBook: React.FC = () => {
  return (
    <section id="about-the-book" className="py-20 sm:py-28 bg-[#0d1e15] border-t border-[#1a3827] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle Section Badge */}
        <span className="text-xs uppercase tracking-widest font-bold text-[#d9bf86] mb-3 block">
          About The Book
        </span>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#faf7f0] leading-tight mb-8">
          This book is your reminder that you matter too.
        </h2>

        {/* Concise, human, conversational explanation */}
        <div className="space-y-6 text-lg sm:text-xl text-[#ded6c7] font-normal leading-relaxed text-left sm:text-center max-w-3xl mx-auto">
          <p>
            <strong className="text-[#faf7f0] font-bold">
              HOW TO STOP LOSING YOURSELF AFTER BECOMING A MOTHER
            </strong>{' '}
            by Praise Adekoya is a thoughtful, honest guide for women navigating the quiet emotional demands of motherhood.
          </p>

          <p>
            Between caring for everyone else and meeting everyday responsibilities, you may have forgotten your own needs, goals, and joy. This book shows you how to reconnect with your identity, rebuild your confidence, let go of unnecessary guilt, and make room for your dreams.
          </p>

          <div className="py-6 px-6 sm:px-8 rounded-lg bg-[#12281d] border border-[#224732] my-6">
            <p className="font-serif italic text-xl sm:text-2xl text-[#faf7f0] font-semibold text-center">
              “You don't have to choose between being a good mother and being yourself.”
            </p>
          </div>

          <p className="text-[#faf7f0] font-medium text-center">
            Motherhood should change your life, but it should never erase you.
          </p>
        </div>
      </div>
    </section>
  );
};
