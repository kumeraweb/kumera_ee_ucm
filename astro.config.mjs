// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  // REEMPLAZA ESTO CON TU DOMINIO REAL CUANDO LO TENGAS
  // Si aún no lo tienes, pon el temporal de Netlify/Vercel
  site: 'https://www.rescatesmedicos.cl',

  vite: {
    plugins: [tailwindcss()]
  }
})
