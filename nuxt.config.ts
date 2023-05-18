// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",

    "nuxt-icons",
    "@vee-validate/nuxt",
    "@nuxt/image-edge",
  ],

  css: ["@/styles/main.scss"],
  runtimeConfig: {
    public: {
      apiBase: "http://localhost:7000/training",
    },
  },

  vite: { vue: { script: { defineModel: true, propsDestructure: true } } },
});
