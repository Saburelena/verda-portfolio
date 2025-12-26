import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import checker from 'vite-plugin-checker';

export default defineConfig(({ command }) => {
    process.env.NODE_ENV = command === 'build' ? 'production' : 'development';

    return {
        server: {
            port: 3000,
            open: true,
            host: true,
        },
        build: {
            outDir: 'dist',
            assetsDir: 'assets',
        },
        plugins: [
            checker({
                stylelint: {
                    lintCommand: 'stylelint "./src/**/*.scss"',
                }
            })
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
                '@ui': fileURLToPath(new URL('./src/ui', import.meta.url)),
                '@sections': fileURLToPath(new URL('./src/sections', import.meta.url)),
                '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
                '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
            }
        },
        css: {
            postcss: {},
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "@styles/variables" as *;`
                }
            }
        }
    };
});
