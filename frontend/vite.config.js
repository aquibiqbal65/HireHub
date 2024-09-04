import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path'; // Import the path module
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Convert import.meta.url to __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
