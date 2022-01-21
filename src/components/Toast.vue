<template>
  <div
    class="absolute p-6 bg-green-400 w-3/4 max-w-2xl rounded-lg shadow-lg mx-5 mt-96"
  >
    <h1 class="text-2xl font-bold">{{ title }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "Toast",
  props: {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>