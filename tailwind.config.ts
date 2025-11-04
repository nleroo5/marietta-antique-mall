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
        // Primary - Sophisticated Antique Bronze/Gold
        primary: {
          DEFAULT: '#8B6F47',
          light: '#A4865C',
          dark: '#6B5436',
        },
        // Secondary - Deep Vintage Blue
        secondary: {
          DEFAULT: '#2C3E50',
          light: '#34495E',
          dark: '#1A252F',
        },
        // Accent - Warm Copper
        accent: {
          DEFAULT: '#B87333',
          light: '#CD8C52',
          dark: '#975C29',
        },
        // Background Colors - using transparent to let body gradient show through
        'bg-primary': 'transparent',
        'bg-secondary': 'rgba(255, 255, 255, 0.3)',
        'bg-dark': '#1F1F1F',
        // Text Colors
        'text-primary': '#2C2416',
        'text-secondary': '#5A5247',
        'text-light': '#8B8378',
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
