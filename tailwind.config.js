/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html','./src/*.html'],
  theme: {
    extend: {
      colors:{
        body: '#131414',
        primary:{
          100: '#217191',
          200: '#185D78',
          700: '#204959',
        },
        secondary:{
          100: '#C7A48B',
          200: '#A97957',
        }  
  
      },
      fontFamily:{
        main: ['Montserrat'],
      },
      gridTemplateColumns:{
        '250' : 'repeat(auto-fill, minmax(250px, 1fr));',
        'percentage' : '48% 48%' ,
        
      }
    },
    container: {
      center: true,
      padding: '15px',
    },
    
    
    
  },
  plugins: [],
}

