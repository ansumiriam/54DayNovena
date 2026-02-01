import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: "/54DayNovena/",
  css: {
    postcss: {
      plugins: [
        tailwindcss,
      ],
    },
  },
})
