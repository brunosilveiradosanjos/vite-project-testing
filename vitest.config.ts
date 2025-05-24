import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup',
    alias: {
      '@': '/src', // garante que @ aponta para a pasta src
    },
  },
})
