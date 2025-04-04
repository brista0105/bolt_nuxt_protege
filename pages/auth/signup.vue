<template>
  <div class="min-h-[calc(100vh-4rem)] flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-50 via-indigo-50 to-blue-50 relative overflow-hidden">
    <!-- Abstract background patterns -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
    </div>

    <div class="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
      <h2 class="mt-6 text-center text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">Create account</h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Already have an account?
        <NuxtLink to="/auth/signin" class="font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
          Sign in here
        </NuxtLink>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
      <div class="bg-white/70 backdrop-blur-lg py-8 px-4 shadow-2xl shadow-indigo-500/10 sm:rounded-2xl sm:px-10 border border-white/20">
        <form class="space-y-6" @submit.prevent="handleSubmit">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Full name</label>
            <div class="mt-1">
              <input
                id="name"
                v-model="name"
                name="name"
                type="text"
                autocomplete="name"
                required
                class="block w-full appearance-none rounded-xl border border-gray-300/50 px-4 py-3 placeholder-gray-400 shadow-sm transition-colors focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-white/50 backdrop-blur-sm"
                placeholder="John Doe"
              />
            </div>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
            <div class="mt-1">
              <input
                id="email"
                v-model="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="block w-full appearance-none rounded-xl border border-gray-300/50 px-4 py-3 placeholder-gray-400 shadow-sm transition-colors focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-white/50 backdrop-blur-sm"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <div class="mt-1">
              <input
                id="password"
                v-model="password"
                name="password"
                type="password"
                autocomplete="new-password"
                required
                class="block w-full appearance-none rounded-xl border border-gray-300/50 px-4 py-3 placeholder-gray-400 shadow-sm transition-colors focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-white/50 backdrop-blur-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div>
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm password</label>
            <div class="mt-1">
              <input
                id="confirmPassword"
                v-model="confirmPassword"
                name="confirmPassword"
                type="password"
                autocomplete="new-password"
                required
                class="block w-full appearance-none rounded-xl border border-gray-300/50 px-4 py-3 placeholder-gray-400 shadow-sm transition-colors focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-white/50 backdrop-blur-sm"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div class="flex items-center">
            <input
              id="terms"
              v-model="acceptTerms"
              name="terms"
              type="checkbox"
              required
              class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 transition-colors"
            />
            <label for="terms" class="ml-2 block text-sm text-gray-700">
              I agree to the
              <NuxtLink to="/terms" class="font-medium text-indigo-600 hover:text-indigo-500 transition-colors">Terms of Service</NuxtLink>
              and
              <NuxtLink to="/privacy" class="font-medium text-indigo-600 hover:text-indigo-500 transition-colors">Privacy Policy</NuxtLink>
            </label>
          </div>

          <div>
            <button
              type="submit"
              :disabled="isLoading || !isFormValid"
              class="relative flex w-full justify-center rounded-xl border border-transparent bg-gradient-to-r from-indigo-600 to-violet-600 py-3 px-4 text-sm font-medium text-white shadow-lg shadow-indigo-500/30 transition-all hover:from-indigo-500 hover:to-violet-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl hover:shadow-indigo-500/40 hover:-translate-y-0.5"
            >
              <template v-if="isLoading">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating account...
              </template>
              <template v-else>
                Create account
              </template>
            </button>
          </div>
        </form>

        <div v-if="error" class="mt-4 rounded-xl bg-red-50 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-red-800">{{ error }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAuthStore } from '~/stores/auth'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const acceptTerms = ref(false)
const isLoading = ref(false)
const error = ref('')

const isFormValid = computed(() => {
  return (
    name.value.length > 0 &&
    email.value.length > 0 &&
    password.value.length >= 8 &&
    password.value === confirmPassword.value &&
    acceptTerms.value
  )
})

const handleSubmit = async () => {
  if (!isFormValid.value) {
    error.value = 'Please fill in all fields correctly and accept the terms.'
    return
  }

  if (password.value !== confirmPassword.value) {
    error.value = 'Passwords do not match.'
    return
  }

  try {
    isLoading.value = true
    error.value = ''
    
    await auth.signUp({
      name: name.value,
      email: email.value,
      password: password.value
    })
    
    router.push('/dashboard')
  } catch (err) {
    error.value = err.message || 'Failed to create account. Please try again.'
  } finally {
    isLoading.value = false
  }
}
</script>

<style>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>