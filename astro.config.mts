import {defineConfig} from 'astro/config';

// https://astro.build/config
import react from '@astrojs/react';

// https://astro.build/config
import mdx from "@astrojs/mdx";

import autoprefixer from 'autoprefixer';

// https://astro.build/config
export default defineConfig({
    integrations: [react(), mdx()],
    vite: {
        css: {
            postcss: {
                plugins: [autoprefixer()],
            },
            modules: {
                localsConvention: 'camelCaseOnly'
            }
        }
    }
});
