import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

/** PostCSS config condivisa tra Next.js e Vite (Sanity Studio) */
const config = {
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
}

export default config
