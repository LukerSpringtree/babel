import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// const reactPlugin = react()
// console.log('react()', reactPlugin)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // react()
  ],
  optimizeDeps: {
    // entries: '',
    // exclude: ['lodash-es'],
    // include: ['lodash-es', 'lodash']
  },
  resolve: {
    // alias: {
    //   'lodash': "lodash-es"
    // }
  },
  server: {
    hmr: {
      overlay: false
    }
  }
})
