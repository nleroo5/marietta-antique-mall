import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors - Palette 5: Soft Saturated Luxury (adjusted mint)
        mint: {
          DEFAULT: '#c2dfc9', // Primary brand (softer mint)
          dark: '#A8CDB1',    // Darker mint for hover states
          light: '#D5F4E6',   // Pale Mint for subtle backgrounds
        },
        charcoal: {
          DEFAULT: '#2A2A2A', // Premium typography
          light: '#4A4A4A',   // Secondary text
          lighter: '#6B6B6B', // Tertiary text
        },
        slate: {
          DEFAULT: '#A5B8C8', // Secondary elements & cards
          dark: '#8296A8',
          light: '#C8D5E0',
        },
        mauve: {
          DEFAULT: '#efc393', // Golden tan - Accent borders & decorative
          dark: '#d4a875',
          light: '#f5ddc0',
        },
        champagne: {
          DEFAULT: '#F7F0E8', // Main background
          dark: '#E8DDD0',
        },
        // Legacy color names (mapped to new palette for backward compatibility)
        primary: {
          DEFAULT: '#c2dfc9', // Mint
          light: '#D5F4E6',
          dark: '#A8CDB1',
        },
        secondary: {
          DEFAULT: '#A5B8C8', // Slate
          light: '#C8D5E0',
          dark: '#8296A8',
        },
        accent: {
          DEFAULT: '#efc393', // Golden tan
          light: '#f5ddc0',
          dark: '#d4a875',
        },
        magenta: {
          DEFAULT: '#efc393', // Mapped to golden tan for smooth transition
          dark: '#d4a875',
          light: '#f5ddc0',
        },
        // Background Colors
        background: {
          DEFAULT: '#F7F0E8', // Champagne
          secondary: '#D5F4E6', // Pale Mint
        },
        'bg-primary': '#F7F0E8',
        'bg-secondary': '#D5F4E6',
        'bg-dark': '#2A2A2A',
        // Text Colors
        text: {
          primary: '#2A2A2A',   // Charcoal
          secondary: '#4A4A4A', // Charcoal light
          light: '#6B6B6B',     // Charcoal lighter
        },
        'text-primary': '#2A2A2A',
        'text-secondary': '#4A4A4A',
        'text-light': '#6B6B6B',
        // Semantic color aliases for consistency
        'mint-dark': '#A8CDB1',
        'mint-light': '#D5F4E6',
        // Status Colors
        success: '#A8CDB1',   // Using dark mint
        info: '#A5B8C8',      // Using slate
        warning: '#efc393',   // Using golden tan
        error: '#d4a875',     // Using dark golden tan
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        nav: ['var(--font-nav)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        accent: ['Bebas Neue', 'Impact', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',    // 12px
        sm: '0.875rem',   // 14px
        base: '1rem',     // 16px
        lg: '1.125rem',   // 18px
        xl: '1.25rem',    // 20px
        '2xl': '1.5rem',  // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem',    // 48px
        '6xl': '3.75rem', // 60px
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
export default config
