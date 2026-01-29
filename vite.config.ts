// vite.config.ts
import tailwindcss from '@tailwindcss/vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { nitro } from 'nitro/vite';
import { viteComponentMapper } from 'step1-tagger';
import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

const isVercel = process.env.VERCEL === '1' || process.env.VERCEL === 'true';

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    viteComponentMapper(),
    tanstackStart(),
    nitro({
      output: {
        // Vercel 需要 Build Output API 产物在 `.vercel/output`
        // 本地默认仍然输出到 `dist`（用于 deno-deploy 预览/调试）
        dir: isVercel ? '.vercel/output' : 'dist',
      },
    }),
    // react's vite plugin must come after start's vite plugin
    viteReact(),
    tailwindcss(),
  ],
  nitro: {
    preset: isVercel ? 'vercel' : 'deno-deploy',
    ...(isVercel
      ? {
          // 显式指定 Vercel Functions runtime（避免默认值变化带来的差异）
          vercel: {
            functions: {
              runtime: 'nodejs22.x',
            },
          },
        }
      : {}),
  },
  build: {
    sourcemap: 'hidden',
    rollupOptions: {
      external(source) {
        if (source.startsWith('node:')) {
          return true;
        }
        return false;
      },
    },
  },
});
