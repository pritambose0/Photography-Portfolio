/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        dark:'#12182B',
        green: '#69FAB4',
        yellow: '#FFC700',
        light: '#D3D3D3',
        bgCol: '#FFFFFF',
        hoverGreen: '#1A2133',
        custom: '#31303633',
        lightText: '#B9B9B9',
        footer:'#0D1220',
        copyrightBg: '#0A0F1C'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(154deg, rgba(121, 117, 131, 0.20) 5.35%, rgba(54, 53, 103, 0.20) 83.85%, rgba(49, 48, 54, 0.20))',
      },
      fontFamily:{
        Poppins: ['Poppins'], 
      },
    },
  },
  plugins: [],
}
