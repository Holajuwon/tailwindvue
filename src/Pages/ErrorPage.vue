<template>
  <div
    class="flex justify-center h-96 text-2xl items-center sm:text-5xl space-x-4"
  >
    <p class="dark:text-gray-50">404</p>
    <p class="font-extralight text-7xl sm:text-9xl dark:text-gray-50">|</p>
    <router-link to="/" class="text-brand-light cursor-pointer sm:text-3xl"
      >Go Back Home</router-link
    >
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
};
</script>

<style>
</style>