// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    ['@nuxtjs/google-fonts', {
      
  }],
  ],
})

