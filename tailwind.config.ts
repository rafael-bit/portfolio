import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: 'var(--bg)',
          soft: 'var(--bg-raised)',
          deep: 'var(--bg-sunken)',
        },
        foreground: 'var(--text)',
        soft: 'var(--text-soft)',
        dim: 'var(--text-dim)',
        faint: 'var(--text-faint)',
        surface: {
          hover: 'var(--hover)',
          active: 'var(--active)',
        },
        line: {
          DEFAULT: 'var(--line)',
          soft: 'var(--line-soft)',
          strong: 'var(--line-strong)',
        },
        pill: {
          bg: 'var(--pill-bg)',
          line: 'var(--pill-line)',
          on: 'var(--pill-on)',
        },
        online: {
          DEFAULT: 'var(--online)',
          glow: 'var(--online-glow)',
        },
        accent: 'var(--accent)',
        background: 'hsl(var(--background))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        border: 'hsl(var(--border))',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        pill: 'var(--radius-pill)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
      spacing: {
        page: 'var(--pad-x)',
        'page-y': 'var(--pad-y)',
        'nav-x': 'var(--nav-gap-x)',
      },
      transitionTimingFunction: {
        out: 'var(--ease-out)',
      },
      transitionDuration: {
        fast: 'var(--t-fast)',
        base: 'var(--t-base)',
        slow: 'var(--t-slow)',
      },
      zIndex: {
        main: 'var(--z-main)',
        menu: 'var(--z-menu)',
        overlay: 'var(--z-overlay)',
        modal: 'var(--z-modal)',
      },
      screens: {
        desktop: '850px',
      },
    },
  },
  plugins: [],
};

export default config;
