// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  name: "webo-en",
  extends: ["@webo-agency/theme"],
  target: "static",
  modules: ["@nuxthq/studio"],
  site:{
    url: 'https://www.webo.agency',
  },
});
