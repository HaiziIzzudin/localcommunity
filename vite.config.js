// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    base: '/localcommunity/',

    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                main: resolve(__dirname, 'about.html'),
                main: resolve(__dirname, 'amenities.html'),
                main: resolve(__dirname, 'attractions.html'),
                main: resolve(__dirname, 'contacts.html'),
                main: resolve(__dirname, 'newsroom.html'),
                main: resolve(__dirname, 'staff.html'),
            },
        },
    },
})