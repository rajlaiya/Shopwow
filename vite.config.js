import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/git/demo/' // Use your repo name here, e.g. '/your-repo-name/'
})
