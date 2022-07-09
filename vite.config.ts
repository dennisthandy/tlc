import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    VitePWA({
      manifest: {
        short_name: 'TLC UTM',
        name: 'Cek Nilai TLC UTM',
        icons: [
          {
            src: '/favicon-32x32.png',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon',
          },
          {
            src: '/android-chrome-192x192.png',
            type: 'image/png',
            sizes: '192x192',
          },
          {
            src: '/android-chrome-512x512.png',
            type: 'image/png',
            sizes: '512x512',
          },
        ],
        start_url: '.',
        display: 'standalone',
        theme_color: '#f7bf01',
        background_color: '#f7bf01',
      },
    }),
  ],
  server: {
    host: true,
    proxy: {
      '/ss': {
        target: 'http://pusatbahasa.trunojoyo.ac.id',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
      '/dd': {
        target: 'http://pusatbahasa.trunojoyo.ac.id',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
});
