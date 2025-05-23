import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // base: '/geneve/',
  server: {
    host: '0.0.0.0',  // Permite conexiones desde otros dispositivos
    port: 5173,       // Asegura que el puerto sea el correcto
    strictPort: true  // Evita que cambie el puerto automáticamente
  },
  base: process.env.NODE_ENV === 'production' ? '/geneve/' : '/',
  define: {
    '__VUE_OPTIONS_API__': true,
    '__VUE_PROD_DEVTOOLS__': false
  },

  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), 
    },
  },
 
})
