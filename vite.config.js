import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: './',
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                blog: resolve(__dirname, 'blog-list.html'),
                post: resolve(__dirname, 'blog-post.html'),
            },
        },
    },
    server: {
        port: 3000,
        open: true,
    }
});
