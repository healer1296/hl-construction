import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import storyblok from '@storyblok/astro';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import image from '@astrojs/image';

const env = loadEnv('', process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  site: 'https://xaydungkhanhhoa.vn',
  integrations: [
    tailwind(),
    image(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        page: 'storyblok/page',
        hero: 'storyblok/hero',
        service: 'storyblok/services',
        project: 'storyblok/projects',
        feedback: 'storyblok/feedbacks',
        feedbackcard: 'storyblok/feedbacks-card',
      },
    }),
  ],
});
