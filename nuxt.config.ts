import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/vara-cattum/',
    buildAssetsDir: '/vara-cattum/_nuxt/' // Add this line
  },
  nitro: {
    preset: 'static',

    prerender: {
      crawlLinks: true,
      routes: ['/']
    },
    
    // Add this configuration
    publicAssets: [{
      baseURL: '/vara-cattum',
      dir: 'public'
    }]
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    '~/assets/css/main.css',
    'vuetify/styles',
  ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  tailwindcss: {
    viewer: true
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
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
  },
})
