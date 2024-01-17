import colors from "vuetify/es5/util/colors";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - push-notification",
    title: "push-notification",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/firebase",
    '@nuxtjs/pwa',
  ],
  pwa: {
    meta: {
      title: 'My PWA',
      author: 'Me',
    },
    manifest: {
      name: 'Nuxt.js PWAs are so easy',
      short_name: 'Nuxt.js PWA',
      lang: 'en',
    },
  },
  // firebase FCM starts here
  firebase: {
    lazy: false,
    config: {
      apiKey: "AIzaSyAOUZn3JvtGxdWIvGnmfSLwXd_quZq_3mw",
      authDomain: "nuxt-notification-12345.firebaseapp.com",
      projectId: "nuxt-notification-12345",
      storageBucket: "nuxt-notification-12345.appspot.com",
      messagingSenderId: "210612044348",
      appId: "1:210612044348:web:a064171b7027751c38f939",
      measurementId: "G-L951BN0GE5",
    },
    onFirebaseHosting: false,
    services: {
      messaging: true,
    },
  },
  messaging: {
    createServiceWorker: true,
    actions: [
      {
        action: "goHome",
        url: "https://localhost:3000",
      },
    ],
    fcmPublicVapidKey:
      "BKR33wKsu8nldPVaeIaA5dJ9_omaY4LD8Y0yJWCdv1e4Z3prsxbf3OP1NvsAbCUrEeAVVjx1ddFbVPgUeUgfh7Q",
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
