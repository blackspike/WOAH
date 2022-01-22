export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Work Out At Home | warmup & workout timer | WOAH',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover',
      },
      { hid: 'author', name: 'author', content: 'blackspike.com' },
      {
        hid: 'description',
        name: 'description',
        content: 'Warmup & workout timer',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Work Out At Home | WOAH',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Warmup & workout timer',
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Work Out At Home | WOAH',
      },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:url', name: 'og:url', content: 'https://woah.monster/' },
      {
        hid: 'og:image',
        name: 'og:image',
        content: `https://woah.monster/social_1200x630.png`,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: `https://woah.monster/social_1200x630.png`,
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'color-scheme',
        content: 'dark',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'theme-color', name: 'theme-color', content: '#212529' },
      {
        hid: 'apple-mobile-web-app-capable',
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: 'W.O.A.H',
      },
      {
        hid: 'apple-mobile-web-app-status-bar-style',
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'translucent',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'manifest', type: 'image/x-icon', href: '/manifest.json' },
    ],
  },

  // Loading bar color
  loading: { color: 'var(--brand)' },

  server: {
    host: '0.0.0.0',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.scss'],

  // https://github.com/nuxt-community/style-resources-module
  styleResources: {
    scss: ['~assets/css/abstracts/_mixins.scss'],
  },

  // css: ['@/assets/css/main.scss'],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '~/plugins/vendor/persistedState.client.js' },
    { src: '~/plugins/vendor/vue-draggable.js' },
    { src: '~/plugins/vendor/splide', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],
  stylelint: {
    fix: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['vue-plausible'],

  // Plausible
  plausible: {
    domain: 'woah.monster',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
