<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
      </div>
    </header>

    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <!-- Welcome section -->
        <div class="overflow-hidden rounded-lg bg-white shadow">
          <div class="px-4 py-5 sm:p-6">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img
                  v-if="user?.photoURL"
                  :src="user.photoURL"
                  :alt="user?.name"
                  class="h-12 w-12 rounded-full"
                />
                <div
                  v-else
                  class="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-lg font-semibold"
                >
                  {{ userInitials }}
                </div>
              </div>
              <div class="ml-4">
                <h2 class="text-xl font-semibold text-gray-900">Welcome back, {{ user?.name }}!</h2>
                <p class="text-sm text-gray-500">{{ user?.email }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Stats -->
        <div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div class="overflow-hidden rounded-lg bg-white shadow">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <DocumentTextIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="truncate text-sm font-medium text-gray-500">Resume Reviews</dt>
                    <dd class="text-3xl font-semibold tracking-tight text-gray-900">0</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div class="overflow-hidden rounded-lg bg-white shadow">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <CodeBracketIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="truncate text-sm font-medium text-gray-500">Portfolio Reviews</dt>
                    <dd class="text-3xl font-semibold tracking-tight text-gray-900">0</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div class="overflow-hidden rounded-lg bg-white shadow">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <ChatBubbleLeftRightIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="truncate text-sm font-medium text-gray-500">AI Chat Sessions</dt>
                    <dd class="text-3xl font-semibold tracking-tight text-gray-900">0</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="mt-8">
          <h2 class="text-lg font-medium text-gray-900">Quick Actions</h2>
          <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:border-indigo-600 hover:ring-1 hover:ring-indigo-600 cursor-pointer transition-all">
              <div class="flex-shrink-0">
                <DocumentPlusIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
              </div>
              <div class="min-w-0 flex-1">
                <NuxtLink to="/resume/upload" class="focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true" />
                  <p class="text-sm font-medium text-gray-900">Upload Resume</p>
                  <p class="text-sm text-gray-500">Get feedback on your resume</p>
                </NuxtLink>
              </div>
            </div>

            <div class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:border-indigo-600 hover:ring-1 hover:ring-indigo-600 cursor-pointer transition-all">
              <div class="flex-shrink-0">
                <GlobeAltIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
              </div>
              <div class="min-w-0 flex-1">
                <NuxtLink to="/portfolio/analyze" class="focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true" />
                  <p class="text-sm font-medium text-gray-900">Analyze Portfolio</p>
                  <p class="text-sm text-gray-500">Submit your portfolio for review</p>
                </NuxtLink>
              </div>
            </div>

            <div class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:border-indigo-600 hover:ring-1 hover:ring-indigo-600 cursor-pointer transition-all">
              <div class="flex-shrink-0">
                <ChatBubbleBottomCenterTextIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
              </div>
              <div class="min-w-0 flex-1">
                <NuxtLink to="/chat" class="focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true" />
                  <p class="text-sm font-medium text-gray-900">Chat with AI</p>
                  <p class="text-sm text-gray-500">Get personalized advice</p>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { 
  DocumentTextIcon, 
  CodeBracketIcon, 
  ChatBubbleLeftRightIcon,
  DocumentPlusIcon,
  GlobeAltIcon,
  ChatBubbleBottomCenterTextIcon
} from '@heroicons/vue/24/outline'
import { useFirebaseAuth } from '~/composables/useFirebaseAuth'

definePageMeta({
  middleware: ['auth']
})

const { user } = useFirebaseAuth()

const userInitials = computed(() => {
  if (!user.value?.name) return ''
  return user.value.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
})
</script>