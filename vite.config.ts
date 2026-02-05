import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@services': fileURLToPath(new URL('./src/services', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
      '@app': fileURLToPath(new URL('./src/app', import.meta.url)),
      '@types': fileURLToPath(new URL('./src/types', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/app/styles', import.meta.url)),
      '@router': fileURLToPath(new URL('./src/app/router', import.meta.url)),
      '@stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
      '@shared': fileURLToPath(new URL('./src/shared', import.meta.url)),
      '@features': fileURLToPath(new URL('./src/features', import.meta.url)),
      '@entities': fileURLToPath(new URL('./src/entities', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@styles/helpers' as *;`,
      },
    },
  },
})