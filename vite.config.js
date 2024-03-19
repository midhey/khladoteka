import vituum from 'vituum';
import posthtml from '@vituum/vite-plugin-posthtml';
import mkcert from 'vite-plugin-mkcert';
import imagemin from 'vite-plugin-imagemin';

const base = process.env.NODE_ENV === 'production' ? '/khladoteka/' : '/';

export default {
    base,
    server: { https: true },
    plugins: [
        vituum(),
        posthtml({
            root: './src',
            plugins: [],
        }),
        mkcert(),
        imagemin({
            gifsicle: {
                optimizationLevel: 1,
                interlaced: true,
                colors: 'auto'
            }
        })
    ],

};
