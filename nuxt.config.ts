// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false }, // Disabled to prevent cross-origin issues
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/google-fonts'
  ],
  app: {
    head: {
      title: 'Protege - AI-Powered Portfolio & Resume Feedback',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Get AI-powered feedback on your portfolio, resume, and case studies with Protege.'
        }
      ]
    }
  },
  googleFonts: {
    families: {
      'Inter': [400, 500, 600, 700],
      'Space Grotesk': [500, 700]
    },
    display: 'swap'
  },
  runtimeConfig: {
    public: {
      firebaseApiKey: 'AIzaSyAO28va4n3uwoKUThaqGFwa6EKBrf4ygjc',
      firebaseAuthDomain: 'brista-b6649.firebaseapp.com',
      firebaseProjectId: 'brista-b6649',
      firebaseStorageBucket: 'brista-b6649.firebasestorage.app',
      firebaseMessagingSenderId: '107788372746',
      firebaseAppId: '1:107788372746:web:1c544e09ab9bdafb7ea533',
    }
  },
  nitro: {
    output: {
      dir: 'dist',
      serverDir: 'dist/server',
      publicDir: 'dist/public'
    }
  }
})