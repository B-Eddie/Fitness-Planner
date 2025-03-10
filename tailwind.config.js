/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Main background colors
        background: '#0A0A0B',
        foreground: '#FFFFFF',
        
        // Primary colors
        primary: {
          DEFAULT: '#0d98d9', // New blue color
          foreground: '#000000',
        },
        
        // Secondary/muted colors
        muted: {
          DEFAULT: '#1A1A1F',
          foreground: '#A1A1AA',
        },
        
        // Accent colors
        accent: {
          DEFAULT: '#1C1C22',
          foreground: '#FFFFFF',
        },
        
        // Card colors
        card: {
          DEFAULT: '#18181B',
          foreground: '#FFFFFF',
        },
        
        // Border colors
        border: '#27272A',
        
        // Input colors
        input: '#27272A',
        
        // Ring color for focus states
        ring: '#00F0FF',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-glass': 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(13, 152, 217, 0.15)', // Updated to match new blue
        'inner-light': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'fadeIn': 'fadeIn 1s ease-in',
        'slideUp': 'slideUp 0.5s ease-out',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  utilities: {
    '.animation-delay-200': {
      'animation-delay': '200ms',
    },
    '.animation-delay-300': {
      'animation-delay': '300ms',
    },
    '.animation-delay-400': {
      'animation-delay': '400ms',
    },
    '.animation-delay-500': {
      'animation-delay': '500ms',
    },
    '.animation-delay-600': {
      'animation-delay': '600ms',
    },
    '.animation-delay-700': {
      'animation-delay': '700ms',
    },
  },
}

