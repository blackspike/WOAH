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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'manifest', type: 'image/x-icon', href: '/manifest.json' },
      { rel: "apple-touch-startup-image", type: "image/x-icon", href: "/splashscreens/apple-splash-2048-2732.jpg", media: "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
      { rel: "apple-touch-startup-image", type: "image/x-icon", href: "/splashscreens/apple-splash-2732-2048.jpg", media: "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" },
      { rel: "apple-touch-startup-image", type: "image/x-icon", href: "/splashscreens/apple-splash-1668-2388.jpg", media: "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
      { rel: "apple-touch-startup-image", type: "image/x-icon", href: "/splashscreens/apple-splash-2388-1668.jpg", media: "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" },
      { rel: "apple-touch-startup-image", type: "image/x-icon", href: "/splashscreens/apple-splash-1536-2048.jpg", media: "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
      { rel: "apple-touch-startup-image", type: "image/x-icon", href: "/splashscreens/apple-splash-2048-1536.jpg", media: "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" },
      { rel: "apple-touch-startup-image", type: "image/x-icon", href: "/splashscreens/apple-splash-1668-2224.jpg", media: "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
      { rel: "apple-touch-startup-image", type: "image/x-icon", href: "/splashscreens/apple-splash-2224-1668.jpg", media: "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" },
      { rel: "apple-touch-startup-image", type: "image/x-icon", href: "/splashscreens/apple-splash-1620-2160.jpg", media: "(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
      { rel: "apple-touch-startup-image", type: "image/x-icon", href: "/splashscreens/apple-splash-2160-1620.jpg", media: "(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" },
      { rel: "apple-touch-startup-image", type: "image/x-icon", href: "/splashscreens/apple-splash-1284-2778.jpg", media: "(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" },
      { rel: "apple-touch-startup-image", type: "image/x-icon", href: "/splashscreens/apple-splash-2778-1284.jpg", media: "(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" },
      { rel: "apple-touch-startup-image", type: "image/x-icon", href: "/splashscreens/apple-splash-1170-2532.jpg", media: "(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" },
      { rel: "apple-touch-startup-image", type: "image/x-icon", href: "/splashscreens/apple-splash-2532-1170.jpg", media: "(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" },
      { rel: "apple-touch-startup-image", type: "image/x-icon", href: "/splashscreens/apple-splash-1125-2436.jpg", media: "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" },
      { rel: "apple-touch-startup-image", type: "image/x-icon", href: "/splashscreens/apple-splash-2436-1125.jpg", media: "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" },
      { rel: "apple-touch-startup-image", type: "image/x-icon", href: "/splashscreens/apple-splash-1242-2688.jpg", media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" },
      { rel: "apple-touch-startup-image", type: "image/x-icon", href: "/splashscreens/apple-splash-2688-1242.jpg", media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" },
      { rel: "apple-touch-startup-image", type: "image/x-icon", href: "/splashscreens/apple-splash-828-1792.jpg", media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
      { rel: "apple-touch-startup-image", type: "image/x-icon", href: "/splashscreens/apple-splash-1792-828.jpg", media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" },
      { rel: "apple-touch-startup-image", type: "image/x-icon", href: "/splashscreens/apple-splash-1242-2208.jpg", media: "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" },
      { rel: "apple-touch-startup-image", type: "image/x-icon", href: "/splashscreens/apple-splash-2208-1242.jpg", media: "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" },
      { rel: "apple-touch-startup-image", type: "image/x-icon", href: "/splashscreens/apple-splash-750-1334.jpg", media: "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
      { rel: "apple-touch-startup-image", type: "image/x-icon", href: "/splashscreens/apple-splash-1334-750.jpg", media: "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" },
      { rel: "apple-touch-startup-image", type: "image/x-icon", href: "/splashscreens/apple-splash-640-1136.jpg", media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
      { rel: "apple-touch-startup-image", type: "image/x-icon", href: "/splashscreens/apple-splash-1136-640.jpg", media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" },
    ],
  },

  // Transitions
  pageTransition: {
    name: 'fade',
    mode: 'out-in',
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
    { src: '~/plugins/vendor/persistedState.client.js' },
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
    '@nuxtjs/pwa',
  ],

  pwa: {
    icon: false,
    meta: false,
    manifest: false,
  },

  // fixes pwa video on safari
  workbox: {
    cachingExtensions: '@/plugins/vendor/workbox-range-request.js'
  },

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
