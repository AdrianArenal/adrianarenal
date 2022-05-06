export default {
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en',
      prefix: 'og: http://ogp.me/ns#'
    },
    title: 'Adrian Arenal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        property: 'og:title',
        content: 'Adrian Arenal'
      },
      {
        property: 'og:description',
        content: process.env.npm_package_description || ''
      },
      {
        property: 'og:image',
        content: 'http://adrianarenal.dev/adrian.jpeg'
      },
      {
        property: 'og:image:secure_url',
        content: 'https://adrianarenal.dev/adrian.jpeg'
      },
      {
        property: 'og:url',
        content: 'https://adrianarenal.dev'
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        name: 'twitter:image',
        content: 'http://adrianarenal.dev/adrian.jpeg'
      },
      {
        name: 'twitter:description',
        content: process.env.npm_package_description || ''
      },
      {
        name: 'twitter:site',
        content: 'AdrianArenal.dev'
      },
      {
        name: 'twitter:creator',
        content: 'https://twitter.com/adrianarenal94'
      },
      {
        name: 'theme-color',
        content: '#367062'
      }
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/scss/reset.scss',
    '@/assets/scss/resources.scss',
    '@/assets/scss/default.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/device.client.ts'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/style-resources', '@nuxtjs/sitemap'],
  styleResources: {
    scss: [
      './assets/scss/abstracts/_functions.scss',
      './assets/scss/vars/*.scss',
      './assets/scss/abstracts/_animations.scss',
      './assets/scss/abstracts/_mixins.scss'
    ]
  },
  sitemap: {
    hostname: 'https://adrianarenal.dev',
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
