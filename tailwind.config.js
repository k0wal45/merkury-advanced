/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [{
      merkury: {    
        "primary": "#2a4592",     
        "secondary": "#34d399",     
        "accent": "#c084fc",   
        "neutral": "#4b5563",  
        "base-100": "#f3f4f6",   
        "info": "#3abff8",   
        "success": "#36d399",  
        "warning": "#fbbd23",   
        "error": "#dc2626",
        },
    }],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}