import vituum from 'vituum';
import posthtml from '@vituum/vite-plugin-posthtml';
import mkcert from 'vite-plugin-mkcert';

export default {
    server: { https: true },
    plugins: [
        vituum(),
        posthtml({
            root: './src',
            plugins: [],
        }),
        mkcert()
    ],
};
