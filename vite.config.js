// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    base: '/localcommunity/',

    build: {
        rollupOptions: {
            input: 'index.html',
            input: 'about.html',
            input: 'amenities.html',
            input: 'attractions.html',
            input: 'contacts.html',
            input: 'newsroom.html',
            input: 'staff.html',
        },
    },
})