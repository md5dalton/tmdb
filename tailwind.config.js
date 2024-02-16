/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
            "dark-blue": "rgb(3,37,65)",
            "light-blue": "rgb(1,180,228)",
            "light-green": "rgb(30,230,169)",
            "lighter-green": "rgb(192,254,207)",
            "light-grey": "rgb(227,227,227)",
            "darker-grey": "rgb(200,200,200)",
            "vibrant-dark-blue": "rgb(6,37,65)",
            "vibrant-light-blue": "rgb(0,118,241)",
            },
            animation: {
                slide: "slide 0.5s ease-out"
            }
        },
    },
    plugins: [],
};
