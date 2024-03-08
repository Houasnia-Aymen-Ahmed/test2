/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        pattern: 'url("@/assets/images/Pattern.png")',
        "green-gradient":
          "linear-gradient(98.81deg, #53e88b -0.82%, #15be77 101.53%)"
      },
      colors: {
        primary: {
          DEFAULT: "#FFAD1D",
          100: "#FEF8E0",
          200: "#FFDEA4",
          300: "#FFC668",
          400: "#FFAD1D"
        },
        secondary: {
          DEFAULT: "#DA6317",
          100: "#E3CBBC",
          200: "#E6A986",
          300: "#E38751",
          400: "#DA6317"
        },
        tertiary: {
          DEFAULT: "#09051C",
          100: "#CECDD2",
          200: "#86848F",
          300: "#444352",
          400: "#09051C"
        }
      },
      fontFamily: {
        primarySans: ["BentonSansBook", "sans-serif"],
        primaryBold: ["BentonSansBold"],
        primaryMedium: ["BentonSansMedium"],
        primaryBlack: ["BentonSansBlack"],
        viga: ["viga"],
        inter: ["inter"]
      }
    }
  },
  plugins: []
};
