import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // 代理配置
  server: {
  	https: false,
    proxy: {
      '/image': { 
        target: 'http://localhost:5952', // 目标地址 --> 服务器地址
        changeOrigin: true, // 允许跨域
        ws: true,  // 允许websocket代理
      }
      // '/image': { 
      //   target: 'http://127.0.0.1:5952', // 目标地址 --> 服务器地址
      //   changeOrigin: true, // 允许跨域
      //   ws: true,  // 允许websocket代理
      // }
     },
  },
})
