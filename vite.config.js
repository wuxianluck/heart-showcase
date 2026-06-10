import { fileURLToPath, URL } from 'node:url'
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    ViteImageOptimizer({
      outputFormats:['webp'],
      image: {
        webp: {
          quality: 80, //质量80
          lossless: false, // 有损压缩
        }
      }

    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  base: '/heart-showcase/',  // 注意：以 / 开头和结尾，仓库名保持一致
  // base: './',  // 本地浏览
})
