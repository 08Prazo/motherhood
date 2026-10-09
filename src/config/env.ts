/**
 * Environment configuration helper for Netlify and Google AI Studio.
 *
 * Reads API key flexibly whether configured in Netlify's UI as:
 * - GEMINI_API_KEY
 * - API_KEY
 * - VITE_GEMINI_API_KEY
 * - VITE_API_KEY
 */

export const getApiKey = (): string => {
  // 1. Injected via Vite define or import.meta.env
  try {
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      if (import.meta.env.VITE_GEMINI_API_KEY) return import.meta.env.VITE_GEMINI_API_KEY;
      if (import.meta.env.VITE_API_KEY) return import.meta.env.VITE_API_KEY;
    }
  } catch {
    // Ignore context error
  }

  // 2. Injected via process.env
  try {
    if (typeof process !== 'undefined' && process.env) {
      if (process.env.VITE_GEMINI_API_KEY) return process.env.VITE_GEMINI_API_KEY;
      if (process.env.VITE_API_KEY) return process.env.VITE_API_KEY;
      if (process.env.GEMINI_API_KEY) return process.env.GEMINI_API_KEY;
      if (process.env.API_KEY) return process.env.API_KEY;
    }
  } catch {
    // Ignore context error
  }

  return '';
};

export const API_KEY = getApiKey();
