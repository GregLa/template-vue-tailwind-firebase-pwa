<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12 bg-gray-300">
    <div
      class="relative dark:bg-slate-800 bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
      <div class="mx-auto max-w-md">
        <div class="divide-y divide-gray-300/50">
          <div class="space-y-6 py-8 text-base leading-7 text-white">
            <RouterView />
          </div>
            <nav class="pt-8 text-base font-semibold leading-7 flex flex-row justify-around">
              <RouterLink class="link flex rounded p-3 bg-blue-200 text-black" to="/">Home</RouterLink>
              <RouterLink class="link flex rounded p-3 bg-blue-200 text-black" to="/about">About</RouterLink>
            </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
