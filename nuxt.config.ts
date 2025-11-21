// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css:['./app/assets/css/main.css'],
  modules:[
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt'
  ],
  vite:{
    plugins:[
      tailwindcss()
    ]
  },
})