import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#ecd5bd',
        'light-cream': '#f2e2d2;',
        'dark-cream': '#5b3713',
        brown: '#b28058',
        'light-green': '#c4cc9b',
        blue: '#40649d',
        'light-gray': '#d6d4d2',
        peach: '#edd3b9',
        pink: '#e8b3a8',
        'dark-brown': '#997754',
        'light-blue': '#a2bcc9',
        'pale-blue': '#d7e5e9',
        tan: '#d6af84',
        'dark-green': '#1b2320',
        teal: '#2f6d8b',
        gray: '#c4c5c1',
        'dark-blue': '#2e3e4c',
        olive: '#86887c',
        'sky-blue': '#c4d6ec',
        navy: '#00355d',
        beige: '#e1c59e',
        seafoam: '#7db0a0',
        mint: '#8cbbaf',
        'light-pink': '#ebcbc7',
        background: '#fdf9f8',
      },
      fontFamily: {
        'cormorant': ['Cormorant Garamond', 'serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
        'source-sans': ['Source Sans Pro', 'sans-serif'],
        'source-code': ['Source Code Pro', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;