export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ПрофПол - укладка напольных покрытий в Ижевске',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'ПрофПол - ваш надежный партнер в мире полов! Строим уют и комфорт с нуля: профессиональная укладка полов всех видов. От современных дизайнов до классики - мы создаем прочные и стильные основы вашего пространства. Доверьте нам свои полы, и каждый шаг станет удовольствием!' },
      { name: 'keywords', content: 'Укладка кварцвинила и SPC, Монтаж плинтуса МДФ и дюрополимер, Укладка ламината, Укладка паркетной доски, Укладка коммерческого линолеума, Укладка ПВХ' },
      // { name: 'yandex-verification', content: 'acc04ad192ac3e00' }
    ],
    link: [
      { rel: 'icon', type: 'image/svg', href: '/favicon.svg' },
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ],
    // script: [
    //   { src: '//code.jivo.ru/widget/CH3AMXtgq9', body: true, async: true, defer: true }
    // ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/main.scss',
    '@/assets/styles/fonts.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/v-scroll-lock',
    '@/plugins/v-mask'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
    // [
    //   '@nuxtjs/yandex-metrika',
    //   {
    //     id: '47185269',
    //     webvisor: true,
    //     clickmap: true,
    //     trackLinks: true,
    //     accurateTrackBounce: true,
    //   }
    // ]
  ],
  styleResources: {
    scss: ['./assets/styles/variables.scss']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  server: {
    port: 3000,
    host: '0.0.0.0'
  }
}
