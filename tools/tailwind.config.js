// Rebuild CSS after editing HTML classes. From the repo root:
//   npx tailwindcss@3.4.17 -c tools/tailwind.config.js -i tools/tailwind.input.css -o styles.css --minify
module.exports = {
  content: ['./index.html', './blog/*.html'],
  safelist: ['hidden', 'translate-y-full'],
  theme: { extend: {
    colors: { brand: { dark: '#0A2F25', accent: '#10B981', hover: '#059669', light: '#F4F7F6' } },
    fontFamily: { sans: ['Inter', 'sans-serif'] }
  } }
}
