import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'

export default defineConfig({
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
                dev: {
                    overlay: false
                }
            }
        })
    ]
})
