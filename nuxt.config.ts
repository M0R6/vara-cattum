import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
export default defineNuxtConfig({
  app: {
    baseURL: process.env.BASE_URL || '/vara-cattum/', // Adjust dynamically
    buildAssetsDir: 'vara-cattum'
  },
  experimental: {
    payloadExtraction: true
  },
  nitro: {
    preset: 'github-pages',
    serveStatic: true,
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    }
  },
  //   publicAssets: [
  //     {
  //       baseURL: process.env.BASE_URL || '/vara-cattum/', // Dynamic mapping
  //       dir: 'public',
  //     },
  //   ],
  // },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    '@/assets/css/main.css',
    'vuetify/styles',
  ],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins = config.plugins || [];
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    plugins: [
      vuetify({
        autoImport: true,
      }),
    ],
  },
});
