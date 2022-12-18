const path = require('path')
import vue from '@vitejs/plugin-vue'

export default {
    plugins: [vue()],
    root: path.resolve(__dirname, 'src'),
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
    },
    server: {
        port: 8080,
        hot: true
    }
}
