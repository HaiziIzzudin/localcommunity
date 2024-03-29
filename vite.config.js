import { fileURLToPath } from 'url';
import { defineConfig } from 'vite'

export default defineConfig({
    // base: '/localcommunity/',
    build: {

        rollupOptions: {
            input: {
                index: fileURLToPath(new URL('index.html', import.meta.url)),
                about: fileURLToPath(new URL('about.html', import.meta.url)),
                attractions: fileURLToPath(new URL('attractions.html', import.meta.url)),
                amenities: fileURLToPath(new URL('departments.html', import.meta.url)),
                staff: fileURLToPath(new URL('ahli-majlis.html', import.meta.url)),
                contacts: fileURLToPath(new URL('contacts.html', import.meta.url)),
                newsroom: fileURLToPath(new URL('newsroom.html', import.meta.url)),
            },
        },
        // assetsInclude: ['CNAME'],
    },
});


// git push git@github.com:HaiziIzzudin/localcommunity.git --delete gh-pages
// npm run build && cp CNAME -Destination ./dist && git add dist -f && git commit -m "MASUKKAN_NOMBOR_VERSI" && git subtree push --prefix dist origin gh-pages;