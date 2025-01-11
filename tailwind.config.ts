import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-custom":
          "linear-gradient(180deg, #02122B 6.32%, #000000 100%)",
        "gradient-card": "linear-gradient(270deg, #02122B 6.32%, #000000 100%)",
      },
      backgroundAttachment: {
        fixed: "fixed",
      },
      fontFamily: {
        "Plus-jakarta": "var(--font--plus-jakarta)",
      },
      colors: {
        blue: {
          Textprimary: "#ACC2FA",
          button: "#ACC2FA",
          bl2: "#DBE5FF",
          b2d: "#2154DA",
          background: "#02122B",
        },
        gray: {
          line: "#B7B0B0",
          footer: "#CBDADA",
          text: "#E5E5EA",
          border: "#4D4D4D",
        },
        black: {
          Textsecondary: "#262629",
          primary: "#000000",
        },
        green: {
          button: "#4CAF50",
          secondary: "#00916E",
          accent: "#09922E",
        },
      },
    },
  },
  plugins: [],
};
export default config;
