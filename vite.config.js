import vituum from 'vituum';
import posthtml from '@vituum/vite-plugin-posthtml';
import mkcert from 'vite-plugin-mkcert';

// Определение базового пути в зависимости от окружения
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
        mkcert()
    ],
};
