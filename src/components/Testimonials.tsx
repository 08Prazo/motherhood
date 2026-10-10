import React from 'react';
import { Quote, MessageSquare } from 'lucide-react';
import { readerTestimonials } from '../data/testimonials.ts';

export const Testimonials: React.FC = () => {
  return (
    <section id="reader-reflections" className="py-20 sm:py-28 bg-[#091710] border-t border-[#183626] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold text-[#d9bf86] mb-3 block">
            Reader Community
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#faf7f0] leading-tight">
            Words from Women Who Understand
          </h2>
          <div className="w-16 h-0.5 bg-[#d9bf86] mx-auto mt-6 opacity-70" aria-hidden="true" />
          <p className="mt-4 text-base sm:text-lg text-[#ded6c7] font-normal leading-relaxed">
            Honest reflections from mothers who have walked through silent exhaustion and are finding their way back to themselves.
          </p>
        </div>

        {/* 15 Responsive Review Slots */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {readerTestimonials.map((item) => {
            if (item.isPublished && item.quote) {
              // Active Verified Review (When updated by author in src/data/testimonials.ts)
              return (
                <div
                  key={item.id}
                  className="p-7 rounded-lg bg-[#11241a] border border-[#204430] flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <Quote className="w-5 h-5 text-[#d9bf86] opacity-75 mb-3" aria-hidden="true" />
                    <p className="text-base text-[#faf7f0] font-normal leading-relaxed italic font-serif">
                      "{item.quote}"
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#1d3d2a] flex items-center justify-between text-xs">
                    <span className="font-bold text-[#faf7f0]">{item.authorName}</span>
                    {item.location && (
                      <span className="text-[#a0b3a7]">{item.location}</span>
                    )}
                  </div>
                </div>
              );
            }

            // Elegant, Clean, Truthful Placeholder Slot (1 to 15)
            return (
              <div
                key={item.id}
                className="p-6 sm:p-7 rounded-lg bg-[#0e2017]/70 border border-[#1b3a28] border-dashed flex flex-col justify-between min-h-[170px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono tracking-wider text-[#d9bf86]/80 uppercase">
                      Reflection #{item.slotNumber}
                    </span>
                    <Quote className="w-4 h-4 text-[#d9bf86]/30" aria-hidden="true" />
                  </div>
                  <p className="text-sm text-[#a5b8ac] font-light leading-relaxed italic">
                    Reader review coming soon
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#183424] flex items-center justify-between text-[11px] text-[#7d9385]">
                  <span>Reserved reader slot</span>
                  <span>Nigeria</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reader Note */}
        <div className="mt-12 text-center p-6 rounded-lg bg-[#0e2017] border border-[#1d3d2a] max-w-2xl mx-auto">
          <div className="flex items-center justify-center space-x-2 text-[#d9bf86] mb-2">
            <MessageSquare className="w-4 h-4" aria-hidden="true" />
            <span className="text-xs uppercase tracking-wider font-bold">Have you read the book?</span>
          </div>
          <p className="text-sm text-[#cbd8ce] leading-relaxed">
            As Nigerian mothers read and complete the ebook, verified reviews and personal stories will be published in these slots. Your reflection could be the reminder another mother needs today.
          </p>
        </div>
      </div>
    </section>
  );
};
