tailwind.config = {
    theme:{
        gridTemplateColumns:{
            'auto':'repeat(auto-fit, minmax(200px, 1fr))'
        },
        fontFamily:{
            Outfit:["Outfit", "sans-serif"],
            Ovo:["Ovo", "serif"]
        },
        animation:{
            spin_slow: 'spin 3s linear infinite'
        },
    }
} ,module.exports = {
    darkMode: 'class', // 'class' يعني أنك تتحكم بالثيم الداكن يدويًا بإضافة الفئة 'dark'
    theme: {
      extend: {},
    },
    plugins: [],
  };
  

