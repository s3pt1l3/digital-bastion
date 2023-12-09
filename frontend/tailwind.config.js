/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                btn: "#333333",
                mainwhite: "#FDFDFD",
            },
            backgroundImage: {
                card: "url(./src/assets/Untitled.png)",
            },
        },
    },
    plugins: [],
};
