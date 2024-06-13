/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primaryColor: "#49326B",
                secondaryColor: "#666769",
                inputBorderColor: "#BAC8FC",
            },
            fontFamily: {
                garamond: ["Cormorant Garamond", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
                montserrat: ["Montserrat", "sans-serif"],
            },
        },
    },
    plugins: [],
};
