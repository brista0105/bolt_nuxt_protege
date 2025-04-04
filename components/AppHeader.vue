<template>
  <header class="sticky top-0 z-50 backdrop-blur-lg bg-white/75 supports-[backdrop-filter]:bg-white/75 border-b border-gray-200/50">
    <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div class="flex w-full items-center justify-between py-3">
        <div class="flex items-center space-x-8">
          <NuxtLink to="/" class="flex items-center">
            <Logo />
          </NuxtLink>
          <div class="hidden md:flex items-center space-x-6">
            <NuxtLink to="/features" class="text-sm font-medium text-gray-700 hover:text-gray-900">Features</NuxtLink>
            <NuxtLink to="/pricing" class="text-sm font-medium text-gray-700 hover:text-gray-900">Pricing</NuxtLink>
            <NuxtLink to="/about" class="text-sm font-medium text-gray-700 hover:text-gray-900">About</NuxtLink>
            <NuxtLink to="/blog" class="text-sm font-medium text-gray-700 hover:text-gray-900">Blog</NuxtLink>
            <NuxtLink to="/contact" class="text-sm font-medium text-gray-700 hover:text-gray-900">Contact</NuxtLink>
          </div>
        </div>
        <div class="ml-10 space-x-4">
          <template v-if="isAuthenticated">
            <NuxtLink
              to="/dashboard"
              class="inline-block rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-base font-medium text-white hover:bg-indigo-700"
            >
              Dashboard
            </NuxtLink>
            <button
              @click="handleSignOut"
              class="inline-block rounded-md border border-transparent bg-gray-100 py-2 px-4 text-base font-medium text-gray-800 hover:bg-gray-200"
            >
              Sign Out
            </button>
          </template>
          <template v-else>
            <NuxtLink
              to="/auth/signin"
              class="inline-block rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-base font-medium text-white hover:bg-indigo-700"
            >
              Sign In
            </NuxtLink>
          </template>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useFirebaseAuth } from '~/composables/useFirebaseAuth'
import { useRouter } from 'vue-router'

const { auth, isAuthenticated } = useFirebaseAuth()
const router = useRouter()

const handleSignOut = async () => {
  try {
    await auth.signOut()
    router.push('/auth/signin')
  } catch (error) {
    console.error('Error signing out:', error)
  }
}
</script>