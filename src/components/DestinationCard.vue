<template>
  <div
    class="flex items-center bg-white    dark:bg-gray-800 col-span-1"
  >
    <img
      class="w-32 h-32 flex-shrink-0"
      :src="destination.imageUrl"
      :alt="destination.imageAlt"
    />
    <div class="px-6 py-4 ">
      <h3 class="text-gray-800 text-xl font-semibold dark:text-gray-400">
        {{ destination.city }}
      </h3>
      <p class="text-gray-600 dark:text-gray-50">
        ${{ destination.averagePrice }} / night average.
      </p>
      <div class="mt-5">
        <a class="text-brand-dark hover:text-brand-light font-semibold text-sm"
          >Explore {{ destination.propertyCount }} properties.</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DestinationCard",
  props: {
    destination: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>