/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        pattern: 'url("@/assets/images/Pattern.png")',
        patternMasked: 'url("@/assets/images/PatternMasked.png")',
        patternCta: 'url("@/assets/images/Pattern_cta.png")',
        resto: 'url("@/assets/images/bgTwo.png")',
        profile: 'url("@/assets/images/bgOne.png")',
        "patternCta-opacity":
          'linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url("@/assets/images/Pattern_cta.png")',

        "green-gradient":
          "linear-gradient(98.81deg, #53e88b -0.82%, #15be77 101.53%)",
        "green-gradient-100":
          "linear-gradient(98.81deg,rgba(83, 232, 139, 0.1) -0.82%,rgba(21, 190, 119, 0.1) 101.53%)"
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
        },
        placeHolderColor: "#3B3B3B",
        "green-gradient-color":
          "linear-gradient(98.81deg, #53e88b -0.82%, #15be77 101.53%)",
        "green-account-text": "#1DB46B"
      },
      boxShadow: {
        "primary-shadow": "12px 26px 50px 0px #5a6cea12",
        "secondary-shadow": "0px 0px 50px 0px #5a6cea12"
      },
      fontFamily: {
        primarySans: ["BentonSansBook", "sans-serif"],
        primaryBold: ["BentonSansBold"],
        primaryMedium: ["BentonSansMedium"],
        primaryBlack: ["BentonSansBlack"],
        viga: ["viga"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["roboto"]
      }
    }
  },
  plugins: []
};
