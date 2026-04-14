import type { Config } from 'tailwindcss';
import { designConfig } from './src/design.config';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // primary: #d6b328 — gold from logo
        primary:       designConfig.colors.primary,
        // primaryLight: #e8cc5a
        primaryLight:  designConfig.colors.primaryLight,
        // primaryDark: #a8891c
        primaryDark:   designConfig.colors.primaryDark,
        // secondary: #217443 — forest green
        secondary:     designConfig.colors.secondary,
        // accent: #62c794 — mint green
        accent:        designConfig.colors.accent,
        // background: #f5f9f6
        background:    designConfig.colors.background,
        // surface: #ffffff
        surface:       designConfig.colors.surface,
        // surfaceDark: #0f1e17
        surfaceDark:   designConfig.colors.surfaceDark,
        // textPrimary: #0d1a12
        textPrimary:   designConfig.colors.textPrimary,
        // textSecondary: #4a6155
        textSecondary: designConfig.colors.textSecondary,
        // textLight: #ffffff
        textLight:     designConfig.colors.textLight,
        // border: #d4e6db
        border:        designConfig.colors.border,
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        body:    ['Nunito Sans', 'sans-serif'],
      },
      keyframes: {
        kenburns: {
          '0%':   { transform: 'scale(1.0)' },
          '100%': { transform: 'scale(1.08)' },
        },
        marqueeLeft: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeRight: {
          '0%':   { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        floatBlob: {
          '0%':   { transform: 'translate(0,0) scale(1)' },
          '100%': { transform: 'translate(30px,20px) scale(1.08)' },
        },
        chipPop: {
          '0%':   { opacity: '0', transform: 'scale(0.7)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmerSweep: {
          '0%':   { transform: 'translateX(-150%) skewX(-20deg)' },
          '100%': { transform: 'translateX(260%) skewX(-20deg)' },
        },
      },
      animation: {
        kenburns:     'kenburns 12s ease-in-out infinite alternate',
        marqueeLeft:  'marqueeLeft 40s linear infinite',
        marqueeRight: 'marqueeRight 40s linear infinite',
        floatBlob:    'floatBlob 9s ease-in-out infinite alternate',
        floatBlobRev: 'floatBlob 9s ease-in-out 2s infinite alternate-reverse',
        chipPop:      'chipPop 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards',
        fadeUp:       'fadeUp 0.6s cubic-bezier(0.34,1.56,0.64,1) both',
        fadeIn:       'fadeIn 0.3s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
