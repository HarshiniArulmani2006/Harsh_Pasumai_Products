import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],

  /* to run this in ubunto server
server:{
  host:'0.0.0.0',
  port:3000
}
*/
})
