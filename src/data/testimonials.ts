/**
 * Reader Testimonials Data Structure
 *
 * HOW TO ADD A GENUINE READER REVIEW:
 * 1. Find a slot below (slots 1 to 15).
 * 2. Change `isPublished: false` to `isPublished: true`.
 * 3. Fill in `quote`, `authorName`, and optional `location` (e.g. "Lagos", "Abuja", "Port Harcourt", "Ibadan").
 *
 * Only items with `isPublished: true` will be displayed as live testimonials.
 * Unfilled items appear as clean, transparent placeholder slots reserved for future reader reviews.
 */

export interface Testimonial {
  id: number;
  slotNumber: number;
  isPublished: boolean;
  quote?: string;
  authorName?: string;
  location?: string;
  date?: string;
}

export const readerTestimonials: Testimonial[] = [
  {
    id: 1,
    slotNumber: 1,
    isPublished: false,
    quote: '',
    authorName: '',
    location: '',
  },
  {
    id: 2,
    slotNumber: 2,
    isPublished: false,
    quote: '',
    authorName: '',
    location: '',
  },
  {
    id: 3,
    slotNumber: 3,
    isPublished: false,
    quote: '',
    authorName: '',
    location: '',
  },
  {
    id: 4,
    slotNumber: 4,
    isPublished: false,
    quote: '',
    authorName: '',
    location: '',
  },
  {
    id: 5,
    slotNumber: 5,
    isPublished: false,
    quote: '',
    authorName: '',
    location: '',
  },
  {
    id: 6,
    slotNumber: 6,
    isPublished: false,
    quote: '',
    authorName: '',
    location: '',
  },
  {
    id: 7,
    slotNumber: 7,
    isPublished: false,
    quote: '',
    authorName: '',
    location: '',
  },
  {
    id: 8,
    slotNumber: 8,
    isPublished: false,
    quote: '',
    authorName: '',
    location: '',
  },
  {
    id: 9,
    slotNumber: 9,
    isPublished: false,
    quote: '',
    authorName: '',
    location: '',
  },
  {
    id: 10,
    slotNumber: 10,
    isPublished: false,
    quote: '',
    authorName: '',
    location: '',
  },
  {
    id: 11,
    slotNumber: 11,
    isPublished: false,
    quote: '',
    authorName: '',
    location: '',
  },
  {
    id: 12,
    slotNumber: 12,
    isPublished: false,
    quote: '',
    authorName: '',
    location: '',
  },
  {
    id: 13,
    slotNumber: 13,
    isPublished: false,
    quote: '',
    authorName: '',
    location: '',
  },
  {
    id: 14,
    slotNumber: 14,
    isPublished: false,
    quote: '',
    authorName: '',
    location: '',
  },
  {
    id: 15,
    slotNumber: 15,
    isPublished: false,
    quote: '',
    authorName: '',
    location: '',
  },
];
