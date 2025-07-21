// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss'; // Importa el paquete tailwindcss
import autoprefixer from 'autoprefixer'; // Importa el paquete autoprefixer

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: { // Configuración de PostCSS directamente dentro de Vite
      plugins: [
        tailwindcss, // Pasa el plugin de Tailwind CSS
        autoprefixer, // Pasa el plugin de Autoprefixer
      ],
    },
  },
});
