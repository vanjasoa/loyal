// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-directus'],
  runtimeConfig: {
    public: {
        baseURL: process.env.BASE_URL || 'https://directus-production-2a05.up.railway.app/',
    },
    directus: {
      url: "https://directus-production-2a05.up.railway.app/"
    }
  },
  directus: {
    url: "https://directus-production-2a05.up.railway.app/"
  }
})
