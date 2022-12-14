/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.tsx'],
    theme: {
        extend: {
            colors: {
                'bright-blue': 'hsl(220, 98%, 61%)',
                'gradient-first': 'hsl(192, 100%, 67%)',
                'gradient-second': 'hsl(280, 87%, 65%)',
                'very-light-gray-light': 'hsl(0, 0%, 98%)',
                'very-light-grayish-blue-light': 'hsl(236, 33%, 92%)',
                'light-grayish-blue-light': 'hsl(233, 11%, 84%)',
                'dark-grayish-blue-light': 'hsl(236, 9%, 61%)',
                'very-dark-grayish-blue-light': 'hsl(235, 19%, 35%)',
                'very-dark-blue-dark': 'hsl(235, 21%, 11%)',
                'very-dark-desaturated-blue-dark': 'hsl(235, 24%, 19%)',
                'light-grayish-blue-dark': 'hsl(234, 39%, 85%)',
                'light-grayish-blue-hover-dark': 'hsl(236, 33%, 92%)',
                'dark-grayish-blue-dark': 'hsl(234, 11%, 52%)',
                'very-dark-grayish-blue-1-dark': 'hsl(233, 14%, 35%)',
                'very-dark-grayish-blue-2-dark': 'hsl(237, 14%, 26%)',
            },
            fontFamily: {
                'josefin-sans': ['Josefin Sans', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
