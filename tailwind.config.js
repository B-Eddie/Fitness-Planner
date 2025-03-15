/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      boxShadow: {
        'glow-blue': '0 0 15px 3px rgba(59, 130, 246, 0.5)',
        'glow-blue-sm': '0 0 10px 1px rgba(59, 130, 246, 0.4)',
        'glow-blue-lg': '0 0 25px 5px rgba(59, 130, 246, 0.6)',
        'glow-white': '0 0 10px 2px rgba(255, 255, 255, 0.3)',
      },
      backgroundImage: {
        'gradient-dark': 'radial-gradient(circle at center, hsl(222, 47%, 10%), hsl(222, 47%, 5%))',
        'gradient-glass': 'linear-gradient(135deg, hsla(222, 47%, 15%, 0.5), hsla(222, 47%, 8%, 0.5))',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          '0%, 100%': { opacity: 0.8, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        },
        "float": {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 3s infinite ease-in-out",
        "float": "float 6s infinite ease-in-out",
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

