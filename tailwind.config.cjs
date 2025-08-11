module.exports = {
 darkMode: ["class"],
 content: [
 "./index.html",
 "./src/**/*.{js,jsx,ts,tsx}"
 ],
 theme: {
 extend: {
 fontFamily: {
 display: ["Inter", "ui-sans-serif", "system-ui"],
 body: ["Inter", "ui-sans-serif", "system-ui"]
 },
 colors: {
 primary: {
 DEFAULT: "#2563eb",
 foreground: "#fff"
 },
 accent: {
 DEFAULT: "#fbbf24",
 foreground: "#1e293b"
 },
 background: {
 DEFAULT: "#f8fafc"
 },
 dark: {
 DEFAULT: "#1e293b"
 },
 brand: {
 DEFAULT: "#2563eb"
 }
 },
 boxShadow: {
 'xl': '08px32px0 rgba(37,99,235,0.12)',
 },
 backgroundImage: {
 'hero-gradient': 'linear-gradient(90deg, #2563eb0%, #fbbf24100%)',
 }
 }
 },
 plugins: [require("tailwindcss-animate")],
};