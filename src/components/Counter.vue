<script setup>
import { useCounterStore } from "../stores/counter"

const store = useCounterStore();
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="text-2xl font-bold border-2 border-gray-800 rounded-lg p-2">
      Number of counts : {{ store.count }}
    </div>
    <div class="mt-4 space-x-4">
      <button @click="store.increment()"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Increment
      </button>
      <button @click="store.decrement()"
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Decrement</button>
      <button @click="store.reset()"
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Reset</button>
    </div>
  </div>
</template>
