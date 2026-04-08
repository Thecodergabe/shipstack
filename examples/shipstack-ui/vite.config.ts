import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      shipstack: path.resolve(__dirname, '../..', 'src', 'index.ts'),
      '@': path.resolve(__dirname, '../..', 'src')
    }
  }
});
