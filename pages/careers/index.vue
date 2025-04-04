<template>
  <div class="bg-white">
    <div class="relative isolate overflow-hidden">
      <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Join our team</h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Help us revolutionize how professionals present themselves and advance their careers. We're looking for passionate individuals to join our mission.
          </p>
        </div>
      </div>
    </div>

    <!-- Open positions -->
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900">Open positions</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          We're always looking for talented individuals to join our team. Check out our current openings below.
        </p>
      </div>
      <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <article class="flex max-w-xl flex-col items-start">
          <div class="flex items-center gap-x-4 text-xs">
            <time datetime="2023-03-16" class="text-gray-500">Remote</time>
            <a
              href="#"
              class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >Engineering</a>
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <a href="#">
                <span class="absolute inset-0"></span>
                Senior Full Stack Engineer
              </a>
            </h3>
            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
              We're looking for a senior full stack engineer to help build and scale our AI-powered platform.
            </p>
          </div>
        </article>

        <article class="flex max-w-xl flex-col items-start">
          <div class="flex items-center gap-x-4 text-xs">
            <time datetime="2023-03-16" class="text-gray-500">Remote</time>
            <a
              href="#"
              class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >Product</a>
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <a href="#">
                <span class="absolute inset-0"></span>
                Product Manager
              </a>
            </h3>
            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
              Join us as a product manager to help shape the future of career development tools.
            </p>
          </div>
        </article>
      </div>
    </div>

    <!-- Values section -->
    <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our values</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          These principles guide everything we do at Protege.
        </p>
      </div>
      <dl class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div>
          <dt class="font-semibold text-gray-900">Innovation First</dt>
          <dd class="mt-1 text-gray-600">We believe in pushing boundaries and exploring new possibilities in career development.</dd>
        </div>
        <div>
          <dt class="font-semibold text-gray-900">User-Centered</dt>
          <dd class="mt-1 text-gray-600">Everything we build is focused on delivering value to our users.</dd>
        </div>
        <div>
          <dt class="font-semibold text-gray-900">Continuous Learning</dt>
          <dd class="mt-1 text-gray-600">We're committed to growth and learning, both for our users and our team.</dd>
        </div>
      </dl>
    </div>
  </div>
</template>