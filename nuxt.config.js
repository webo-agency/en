// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  name: "webo-en",
  extends: ["github:webo-agency/www#main"],
  target: "static",
  modules: ["@nuxthq/studio"],
  site:{
    url: 'https://www.webo.agency',
  },
});
