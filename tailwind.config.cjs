/** @type {import('tailwindcss').Config} */
// This config is a 1:1 port of the inline `tailwind.config` that lived in the
// original MentorSpace index.html <script id="tailwind-config"> block.
// The Material Design colour tokens, spacing scale, fonts and font sizes are
// preserved exactly so the ported markup renders identically.
//
// NOTE: written as CommonJS (.cjs) so @nuxtjs/tailwindcss/PostCSS can load it
// even though package.json sets "type": "module".
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        surface: '#fcf9f4',
        'on-tertiary': '#ffffff',
        'secondary-container': '#fcab28',
        'on-primary': '#ffffff',
        'on-tertiary-container': '#ffb29d',
        'on-primary-fixed': '#002203',
        outline: '#717a6d',
        'inverse-surface': '#31302d',
        'tertiary-fixed': '#ffdbd1',
        'secondary-fixed-dim': '#ffb957',
        'on-secondary': '#ffffff',
        'on-error': '#ffffff',
        'surface-container-lowest': '#ffffff',
        primary: '#256E37',
        'outline-variant': '#c0c9bb',
        'tertiary-container': '#9b2500',
        'surface-container-highest': '#e5e2dd',
        background: '#fcf9f4',
        'primary-fixed': '#acf4a4',
        'on-primary-container': '#90d689',
        'surface-tint': '#2a6b2c',
        'secondary-fixed': '#ffddb5',
        'inverse-on-surface': '#f3f0eb',
        'on-background': '#1c1c19',
        'on-error-container': '#93000a',
        'on-surface-variant': '#41493e',
        tertiary: '#721900',
        'on-tertiary-fixed': '#3b0800',
        'surface-variant': '#e5e2dd',
        'on-tertiary-fixed-variant': '#881f00',
        secondary: '#835400',
        'on-secondary-container': '#694300',
        'error-container': '#ffdad6',
        'on-secondary-fixed-variant': '#643f00',
        error: '#ba1a1a',
        'inverse-primary': '#91d78a',
        'surface-container': '#f0ede9',
        'primary-fixed-dim': '#91d78a',
        'surface-bright': '#fcf9f4',
        'surface-container-high': '#ebe8e3',
        'tertiary-fixed-dim': '#ffb5a1',
        'primary-container': '#1b5e20',
        'on-primary-fixed-variant': '#0c5216',
        'on-secondary-fixed': '#2a1800',
        'surface-dim': '#dcdad5',
        'on-surface': '#1c1c19',
        'surface-container-low': '#f6f3ee',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
      fontFamily: {
        'display-lg': ['Playfair Display'],
        'display-lg-mobile': ['Playfair Display'],
        'headline-sm': ['Playfair Display'],
        'headline-md': ['Playfair Display'],
        'body-md': ['DM Sans'],
        'body-lg': ['DM Sans'],
        'label-sm': ['Inter'],
        'label-md': ['Inter'],
      },
      fontSize: {
        'display-lg-mobile': ['36px', { lineHeight: '44px', letterSpacing: '-0.01em', fontWeight: '700' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'label-sm': ['12px', { lineHeight: '16px', letterSpacing: '0.05em', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'headline-sm': ['24px', { lineHeight: '32px', fontWeight: '600' }],
        'headline-md': ['32px', { lineHeight: '40px', fontWeight: '600' }],
        'label-md': ['14px', { lineHeight: '20px', letterSpacing: '0.01em', fontWeight: '500' }],
        'display-lg': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '700' }],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // container-queries is built into Tailwind v4 core — no plugin needed.
  ],
}
