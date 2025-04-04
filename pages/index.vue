<template>
  <div class="bg-white">
    <!-- Hero Section -->
    <div class="relative isolate overflow-hidden bg-gradient-to-b from-indigo-50/50">
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>

      <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Level up your portfolio with AI-powered feedback
          </h1>
          <p class="mt-8 text-lg leading-8 text-gray-600 sm:text-xl">
            Get personalized feedback on your resume, portfolio, and case studies from Jay, our AI mentor.
            Perfect your presentation and stand out in your job search.
          </p>
          <div class="mt-12 flex items-center justify-center gap-x-6">
            <NuxtLink
              to="/auth/signin"
              class="rounded-xl bg-indigo-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </NuxtLink>
            <NuxtLink
              to="/pricing"
              class="text-base font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors"
            >
              View pricing <span aria-hidden="true">→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="py-24 sm:py-32 bg-white">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-base font-semibold leading-7 text-indigo-600 tracking-wide uppercase">Supercharge Your Career</h2>
          <p class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Everything you need to perfect your professional presence
          </p>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Get comprehensive feedback and insights to make your portfolio stand out from the competition.
          </p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl class="grid max-w-xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div class="flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-lg transition">
              <dt class="flex flex-col items-center gap-y-3 text-lg font-semibold leading-7 text-gray-900">
                <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                Resume Review
              </dt>
              <dd class="mt-6 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p class="flex-auto">Get detailed feedback on your resume from our AI mentor Jay. Understand what works and what needs improvement.</p>
                <p class="mt-6">
                  <NuxtLink to="/features" class="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                    Learn more <span aria-hidden="true">→</span>
                  </NuxtLink>
                </p>
              </dd>
            </div>
            <div class="flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-lg transition">
              <dt class="flex flex-col items-center gap-y-3 text-lg font-semibold leading-7 text-gray-900">
                <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                </div>
                Portfolio Analysis
              </dt>
              <dd class="mt-6 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p class="flex-auto">Submit your portfolio for comprehensive analysis. Get insights on presentation, content structure, and impact.</p>
                <p class="mt-6">
                  <NuxtLink to="/features" class="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                    Learn more <span aria-hidden="true">→</span>
                  </NuxtLink>
                </p>
              </dd>
            </div>
            <div class="flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-lg transition">
              <dt class="flex flex-col items-center gap-y-3 text-lg font-semibold leading-7 text-gray-900">
                <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                </div>
                AI Mentor Chat
              </dt>
              <dd class="mt-6 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p class="flex-auto">Chat with Jay, our AI mentor, to get personalized advice and suggestions for improvement.</p>
                <p class="mt-6">
                  <NuxtLink to="/features" class="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                    Learn more <span aria-hidden="true">→</span>
                  </NuxtLink>
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

    <!-- Testimonials Section -->
    <div class="py-24 sm:py-32 bg-gradient-to-b from-white to-indigo-50/50">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Trusted by professionals worldwide</h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            See how Protege has helped professionals like you improve their portfolios and advance their careers.
          </p>
        </div>
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article class="flex flex-col items-start">
            <div class="relative w-full">
              <img
                src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                class="aspect-[3/2] w-full rounded-2xl bg-gray-100 object-cover"
              >
              <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
            </div>
            <div class="max-w-xl">
              <div class="mt-8 flex items-center gap-x-4 text-xs">
                <time datetime="2023-03-16" class="text-gray-500">Mar 16, 2023</time>
                <span class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">Software Engineer</span>
              </div>
              <div class="group relative">
                <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900">
                  "Protege helped me land my dream job at a top tech company"
                </h3>
                <p class="mt-5 text-sm leading-6 text-gray-600">The AI feedback was incredibly detailed and helped me identify areas of improvement I hadn't considered. Within weeks of implementing the suggestions, I started getting more interview calls.</p>
              </div>
              <div class="relative mt-8 flex items-center gap-x-4">
                <div class="text-sm leading-6">
                  <p class="font-semibold text-gray-900">David Kim</p>
                  <p class="text-gray-600">Senior Software Engineer at Google</p>
                </div>
              </div>
            </div>
          </article>

          <article class="flex flex-col items-start">
            <div class="relative w-full">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                class="aspect-[3/2] w-full rounded-2xl bg-gray-100 object-cover"
              >
              <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
            </div>
            <div class="max-w-xl">
              <div class="mt-8 flex items-center gap-x-4 text-xs">
                <time datetime="2023-04-20" class="text-gray-500">Apr 20, 2023</time>
                <span class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">UX Designer</span>
              </div>
              <div class="group relative">
                <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900">
                  "The portfolio review feature is a game-changer"
                </h3>
                <p class="mt-5 text-sm leading-6 text-gray-600">I was struggling to present my work effectively. Protege's AI analysis helped me restructure my portfolio and highlight my best projects. The results were immediate.</p>
              </div>
              <div class="relative mt-8 flex items-center gap-x-4">
                <div class="text-sm leading-6">
                  <p class="font-semibold text-gray-900">Sarah Chen</p>
                  <p class="text-gray-600">Lead Designer at Airbnb</p>
                </div>
              </div>
            </div>
          </article>

          <article class="flex flex-col items-start">
            <div class="relative w-full">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                class="aspect-[3/2] w-full rounded-2xl bg-gray-100 object-cover"
              >
              <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
            </div>
            <div class="max-w-xl">
              <div class="mt-8 flex items-center gap-x-4 text-xs">
                <time datetime="2023-05-25" class="text-gray-500">May 25, 2023</time>
                <span class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">Product Manager</span>
              </div>
              <div class="group relative">
                <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900">
                  "The AI chat feature provided invaluable guidance"
                </h3>
                <p class="mt-5 text-sm leading-6 text-gray-600">Being able to chat with the AI mentor about specific career questions was incredibly helpful. It helped me prepare for interviews and make better career decisions.</p>
              </div>
              <div class="relative mt-8 flex items-center gap-x-4">
                <div class="text-sm leading-6">
                  <p class="font-semibold text-gray-900">Michael Thompson</p>
                  <p class="text-gray-600">Senior PM at Microsoft</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="relative isolate bg-gradient-to-b from-indigo-50/50 to-white px-6 py-24 sm:py-32 lg:px-8">
      <div class="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
        <div class="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
      </div>
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ready to elevate your career?</h2>
        <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
          Join thousands of professionals who have improved their job search materials with Protege.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <NuxtLink
            to="/auth/signin"
            class="rounded-xl bg-indigo-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started now
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>