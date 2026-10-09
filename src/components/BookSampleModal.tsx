import React, { useState, useEffect } from 'react';
import { X, ArrowUpRight, BookOpen, ChevronRight, Bookmark } from 'lucide-react';

interface BookSampleModalProps {
  isOpen: boolean;
  onClose: () => void;
  checkoutUrl: string;
}

export const BookSampleModal: React.FC<BookSampleModalProps> = ({
  isOpen,
  onClose,
  checkoutUrl,
}) => {
  const [activeTab, setActiveTab] = useState<'toc' | 'foreword' | 'chapter1'>('foreword');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sample-reader-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] bg-[#0a1811] border border-[#234b35] rounded-xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-[#1b3b29] bg-[#07130e]">
          <div className="flex items-center space-x-2 text-[#d9bf86]">
            <BookOpen className="w-5 h-5" aria-hidden="true" />
            <span id="sample-reader-title" className="font-serif text-lg font-bold text-[#faf7f0]">
              Look Inside: Free Book Sample
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-md text-[#9eb2a5] hover:text-[#faf7f0] hover:bg-[#12281d] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d9bf86]"
            aria-label="Close preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center px-5 sm:px-7 border-b border-[#183626] bg-[#0c1f16] text-xs sm:text-sm font-semibold">
          <button
            type="button"
            onClick={() => setActiveTab('foreword')}
            className={`py-3 px-3 sm:px-4 border-b-2 transition-colors ${
              activeTab === 'foreword'
                ? 'border-[#d9bf86] text-[#faf7f0]'
                : 'border-transparent text-[#9eb2a5] hover:text-[#faf7f0]'
            }`}
          >
            Foreword
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('chapter1')}
            className={`py-3 px-3 sm:px-4 border-b-2 transition-colors ${
              activeTab === 'chapter1'
                ? 'border-[#d9bf86] text-[#faf7f0]'
                : 'border-transparent text-[#9eb2a5] hover:text-[#faf7f0]'
            }`}
          >
            Chapter One Sample
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('toc')}
            className={`py-3 px-3 sm:px-4 border-b-2 transition-colors ${
              activeTab === 'toc'
                ? 'border-[#d9bf86] text-[#faf7f0]'
                : 'border-transparent text-[#9eb2a5] hover:text-[#faf7f0]'
            }`}
          >
            Table of Contents
          </button>
        </div>

        {/* Reader Content Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-6 text-[#ded6c7] leading-relaxed text-base sm:text-lg">
          {activeTab === 'foreword' && (
            <div className="space-y-6 font-normal">
              <div className="border-b border-[#1d3d2a] pb-4">
                <span className="text-xs uppercase tracking-widest text-[#d9bf86] font-bold block mb-1">
                  From the Author
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#faf7f0]">
                  Foreword: You Became a Mother. But You Are Still You.
                </h3>
              </div>

              <p>
                Somewhere between pregnancy, sleepless nights, school runs, meals, laundry, work, appointments, bills, family responsibilities and making sure everyone else was okay, something quietly changed.
              </p>

              <p>
                You became so busy taking care of everyone that you stopped checking in with yourself. It probably wasn’t intentional. Your children needed you, so you showed up. Your family needed you, so you handled what needed to be handled. Work had to be done. Meals had to be prepared. Clothes had to be washed. Appointments had to be remembered. Life kept moving, and you kept moving with it.
              </p>

              <p>
                Whenever something personal came up, you told yourself, <em>“I’ll get back to me later.”</em> But somehow, later kept moving.
              </p>

              <div className="p-5 rounded-lg bg-[#12281d] border-l-4 border-[#d9bf86] text-[#faf7f0] font-serif italic text-lg sm:text-xl">
                “Maybe someone recently asked what you enjoy doing and you struggled to answer. Maybe somewhere inside you there is still a quiet feeling that says: ‘I miss me.’ If any of that sounds familiar, this book is for you.”
              </div>

              <p>
                This book is not about escaping motherhood. It is not about loving your children less, abandoning your responsibilities or pretending that motherhood does not require sacrifice. It is about remembering that there is still a person inside the role of “Mum.”
              </p>

              <p className="font-medium text-[#faf7f0]">
                A woman with interests. A woman with dreams. A woman who deserves confidence, purpose and moments that belong entirely to her.
              </p>
            </div>
          )}

          {activeTab === 'chapter1' && (
            <div className="space-y-6 font-normal">
              <div className="border-b border-[#1d3d2a] pb-4">
                <span className="text-xs uppercase tracking-widest text-[#d9bf86] font-bold block mb-1">
                  Chapter Excerpt
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#faf7f0]">
                  Chapter One: Before “Mummy,” There Was You
                </h3>
              </div>

              <p>
                Before anyone called you Mummy, there was a woman with a name. She had her own way of laughing, her own tastes, friendships, ambitions and private hopes. There were things she wanted to learn and places she imagined visiting. Perhaps she wanted to build a career, start a business, return to school, create something of her own or simply live a life that felt meaningful to her.
              </p>

              <p>
                She did not have everything figured out. None of us ever really does. But she could imagine a future and see herself in it.
              </p>

              <p>
                Then came motherhood. With it came a kind of love that is difficult to explain until you have lived it. Naturally, life rearranged itself. Sleep became negotiable. Your time was no longer entirely yours...
              </p>

              <div className="p-5 rounded-lg bg-[#12281d] border-l-4 border-[#d9bf86] text-[#faf7f0] font-serif italic text-lg sm:text-xl">
                “Losing yourself rarely announces itself. There is no particular morning when you wake up and declare, ‘From today, I will stop being myself.’ It happens in fragments. One postponed plan. One abandoned interest.”
              </div>

              <p>
                You become skilled at remembering what everyone else needs and surprisingly unfamiliar with your own desires. It is time to start making room for her again.
              </p>
            </div>
          )}

          {activeTab === 'toc' && (
            <div className="space-y-4">
              <div className="border-b border-[#1d3d2a] pb-4 mb-4">
                <span className="text-xs uppercase tracking-widest text-[#d9bf86] font-bold block mb-1">
                  Complete Structure
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#faf7f0]">
                  Table of Contents
                </h3>
              </div>

              <div className="divide-y divide-[#183626] text-sm sm:text-base">
                {[
                  { title: 'Foreword', subtitle: 'You Became a Mother. But You Are Still You.' },
                  { title: 'Introduction', subtitle: 'Somewhere Along the Way' },
                  { title: 'Chapter One', subtitle: 'Before “Mummy,” There Was You' },
                  { title: 'Chapter Two', subtitle: 'When Your Whole World Becomes Your Children' },
                  { title: 'Chapter Three', subtitle: '“I Don’t Even Know Myself Anymore”' },
                  { title: 'Chapter Four', subtitle: 'You Are More Than a Mother' },
                  { title: 'Chapter Five', subtitle: 'Stop Feeling Guilty for Wanting Something for Yourself' },
                  { title: 'Chapter Six', subtitle: 'Finding the Woman You Left Behind' },
                  { title: 'Chapter Seven', subtitle: 'Making Space for Yourself and Rebuilding Your Confidence' },
                  { title: 'Chapter Eight', subtitle: 'Becoming Her Again' },
                  { title: 'Bonus Section', subtitle: '30 Questions Every Mother Should Ask Herself' },
                ].map((item, idx) => (
                  <div key={idx} className="py-3 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-[#faf7f0] mr-2">{item.title}:</span>
                      <span className="text-[#ded6c7]">{item.subtitle}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#d9bf86] shrink-0 ml-2" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Checkout Button */}
        <div className="px-5 sm:px-7 py-4 bg-[#07130e] border-t border-[#1a3a28] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#a0b5a7] text-center sm:text-left">
            Get instant access to all 8 chapters & bonus exercises
          </p>
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-bold tracking-wider uppercase text-[#0b1f15] bg-[#faf6ed] hover:bg-[#ffffff] active:bg-[#ede5d6] rounded transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#faf6ed]"
          >
            <span>GET YOUR COPY TODAY</span>
            <ArrowUpRight className="w-4 h-4 ml-1.5 stroke-[2.5]" />
          </a>
        </div>
      </div>
    </div>
  );
};
