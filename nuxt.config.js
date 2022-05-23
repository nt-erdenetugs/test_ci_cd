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
      {
        hid: 'description',
        name: 'description',
        content: 'We aim to bring every advantage of innovative technologies, internet and e-commerce being beneficial regardless of location or country for our clients.',
      },
      { hid: 'author', name: 'author', content: 'Nashatech LLC' },
      { hid: 'og:image', property: 'og:image', content: 'https://nashatech.com/logo.png' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'Nashatech LLC' },
      { hid: 'og:url', property: 'og:url', content: 'https://nashatech.com/' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'We aim to bring every advantage of innovative technologies, internet and e-commerce being beneficial regardless of location or country for our clients.',
      },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      { hid: 'title', name: 'title', content: 'Nashatech LLC' },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'Nashatech LLC, Nashatech, nashatech llc, nashatech, nasha, tech, technology, technologies, software, software engineering, it, information technology, developer, digital marketing, marketing, website, system development, ナシャ　テック, ナシャテック',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400;500;700&family=Nunito:wght@300;400;600;700&display=swap', as: 'style' }
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
  plugins: [
    { src: '~/plugins/google-analytics.js' },
    { src: '~/plugins/rtoaster.js' },
    { src: '~/plugins/fullpage', ssr: false },
    { src: '~/plugins/swiper', ssr: false },
  ],
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
