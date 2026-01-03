import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/MyPortfolio/",
  plugins: [
     tailwindcss(),react()
  ],
   server: {
    host: '0.0.0.0',  // 👈 ये लाइन important है
    port: 5173        // same port रहेगा
  },
  
})
