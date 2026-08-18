/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,mdx}",
    "./pages/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./lib/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6", // Royal Blue
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
          DEFAULT: "var(--color-primary, #3b82f6)",
          dark: "var(--color-primary-dark, #2563eb)",
          light: "var(--color-primary-light, #60a5fa)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary, #2563eb)",
          light: "var(--color-secondary-light, #bfdbfe)",
        },
        accent: {
          DEFAULT: "var(--color-accent, #60a5fa)",
          glow: "var(--color-accent-glow, #3b82f6)",
        },
        surface: {
          DEFAULT: "var(--color-surface, #ffffff)",
          subtle: "var(--color-surface-subtle, #f8fafc)",
          elevated: "var(--color-surface-elevated, #ffffff)",
          border: "var(--color-border, #e2e8f0)",
        },
        siteText: {
          DEFAULT: "var(--color-text, #0f172a)",
          muted: "var(--color-text-muted, #64748b)",
          light: "var(--color-text-light, #94a3b8)",
        },
        siteBg: {
          DEFAULT: "var(--color-bg, #ffffff)",
          alt: "var(--color-bg-alt, #eff6ff)",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'blue-glow': 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.18) 0%, rgba(255, 255, 255, 0) 70%)',
        'blue-mesh': 'radial-gradient(at 0% 0%, rgba(96, 165, 250, 0.12) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(59, 130, 246, 0.08) 0px, transparent 50%)',
      },
      boxShadow: {
        'blue-sm': '0 2px 8px -1px rgba(59, 130, 246, 0.1)',
        'blue-md': '0 8px 24px -4px rgba(59, 130, 246, 0.15)',
        'blue-lg': '0 16px 40px -6px rgba(59, 130, 246, 0.2)',
        'blue-glow': '0 0 30px rgba(59, 130, 246, 0.25)',
        'blue-card': '0 10px 30px -5px rgba(37, 99, 235, 0.08), 0 0 0 1px rgba(226, 232, 240, 0.8)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
};
