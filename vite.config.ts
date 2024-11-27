import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist', // ビルド出力先
    },
});