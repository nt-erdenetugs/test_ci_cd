import en from './locales/en'
import mn from './locales/mn'
import ja from './locales/ja'

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  ssr: false,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Nashatech LLC',
    meta: [
      { 'http-equiv': 'Content-Type', charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  loading: true,
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['bootstrap-vue/nuxt', 'nuxt-i18n', '@nuxtjs/style-resources', '@nuxtjs/svg-sprite'],
  i18n: {
    langDir: 'locales/',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.js' },
      { code: 'mn', iso: 'mn-MN', file: 'mn.js' },
      { code: 'ja', iso: 'ja-JP', file: 'ja.js' },
    ],
    strategy: 'no_prefix',
    lazy: true,
    defaultLocale: 'mn',
    vueI18n: {
      fallbackLocale: 'en',
      messages: { en, mn, ja },
    },
  },
  styleResources: {
    scss: ['~/assets/styles/main.scss'],
  },
  svgSprite: {
    input: '~/assets/svgs/',
  },
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    componentPlugins: [],
    components: [
      'BCollapse',
      'BCard',
      'BButton',
      'BCardText',
      'BModal',
      'BDropdown',
      'BDropdownItem',
    ],
    directives: ['VBToggle', 'VBModal'],
    icons: false,
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    // extractCSS: {
    //   ignoreOrder: true
    // },
    // analyze: {
    //   analyzerMode: 'static'
    // },
  },
  transition: {
    css: false,
  },
}
