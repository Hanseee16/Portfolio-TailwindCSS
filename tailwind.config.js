/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      // padding: "4rem",
    },
    fontFamily: {
      poppins: ["poppins", "sans-serif"],
    },
    colors: {
      gelap: "#020214",
    },
    extend: {
      keyframes: {
        hero: {
          "0%": { transform: "translateY(13px)" },
          "100%": { transform: "translateY(-13px)" },
        },
      },
      animation: {
        "hero-animasi": "hero 2s ease-in-out infinite alternate-reverse both",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
