// vite.config.js
// import { rollupPluginHTML as html } from '@web/rollup-plugin-html';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite'

// export default defineConfig([
//     {
//         input: 'index.html',
//         output: { dir: './' },
//         plugins: [html()],
//     },
//     {
//         input: 'about.html',
//         output: { dir: './' },
//         plugins: [html()],
//     },
// ], {
//     base: '/localcommunity/',
// });

export default defineConfig({
    build: {
    // outDir: 'dist',

    rollupOptions: {
        input: {
            index: fileURLToPath(new URL('index.html', import.meta.url)),
            about: fileURLToPath(new URL('about.html', import.meta.url)),
            amenities: fileURLToPath(new URL('amenities.html', import.meta.url)),
            attractions: fileURLToPath(new URL('attractions.html', import.meta.url)),
            contacts: fileURLToPath(new URL('contacts.html', import.meta.url)),
            newsroom: fileURLToPath(new URL('newsroom.html', import.meta.url)),
            staff: fileURLToPath(new URL('staff.html', import.meta.url)),
        },
    },
    },
},
{
    base: '/localcommunity/',
});
