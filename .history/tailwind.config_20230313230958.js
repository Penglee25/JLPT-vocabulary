module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      
      animation: {
        none: 'none',
        spin: 'spin 1s linear infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        pulse1s: 'pulse1s 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite',
        newbounce: 'newbounce 1s infinite',
        rebounce: 'rebounce 1s infinite',
        float: 'float 3s infinite',
        refloat: 'refloat 3s infinite'
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
