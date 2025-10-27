import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@assets': resolve(__dirname, './src/assets')
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    pool: 'forks',
  },

});