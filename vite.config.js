import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   port: 4000,
  //   strictPort: true,
  //   host: '0.0.0.0',
  // },
});
