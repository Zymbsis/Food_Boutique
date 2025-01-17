/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sx: '375px',
      md: '768px',
      xl: '1440px',
      'md-xl': { min: '768px', max: '1439.98px' },
    },
    extend: {
      colors: {
        bgPrimary: '#e8e8e2',
        bgSecondary: '#fafafa',
        btnPrimary: '#6D8434',
        btnHovered: '#586F1F',
        fontPrimary: '#010101',
      },
      fontSize: {
        12: ['12px', '1.16'],
        14: ['14px', '1.28'],
        16: ['16px', '1.25'],
        18: ['18px', '1.11'],
        20: ['20px', '1.2'],
      },
      keyframes: {
        rotate: {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        rotate: 'rotate 10s linear infinite',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
    },
  },
  plugins: [],
};
