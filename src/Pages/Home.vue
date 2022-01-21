<template >
  <div class="">
    <div
      class="lg:grid lg:grid-cols-2 bg-green-100 dark:bg-gray-500 2xl:grid-cols-5"
    >
      <div
        class="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2"
      >
        <div class="xl:max-w-xl">
          <div class="flex justify-between">
            <img
              src="../assets/img/logo-brand.svg"
              alt="workcation logo"
              class="h-10"
            />
            <ModeButton />
          </div>
          <img
            src="../assets/img/beach-work.jpg"
            alt="a woman at a beach"
            class="rounded-lg shadow-xl mt-6 sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
          />
          <h1
            class="text-gray-900 text-xl font-semibold mt-6 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl font-headline dark:text-gray-300"
          >
            You can work from anywhere.
            <br class="hidden md:inline" />
            <span class="text-brand"> Take advantage of it. </span>
          </h1>
          <p
            class="text-gray-600 mt-2 sm:text-xl sm:mt-4 lg:text-lg xl:text-xl dark:text-gray-50"
          >
            Workcation helps you find work-friendly rentals in beautiful
            locations so you can enjoy some nice weather even when you are not
            on vacation.
          </p>
          <div class="mt-4 sm:mt-6 space-x-2">
            <Button text="BOOK YOUR ESCAPE" />
            <Button text="LEARN MORE" class="btn-secondary" />
          </div>
        </div>
      </div>
      <div class="hidden lg:block 2xl:col-span-3">
        <img
          src="../assets/img/beach-work.jpg"
          alt="a woman at a beach"
          class="w-full h-full object-cover object-center"
        />
      </div>
    </div>
    <div class="max-w-md mx-auto sm:max-w-xl lg:max-w-6xl px-8 py-8">
      <h2 class="text-2xl font-bold dark:text-gray-300">
        Popular destinations.
      </h2>
      <p class="text-gray-600 mt-2 dark:text-gray-50">
        A selection of great work-friendly cities with lots to see and explore
      </p>
      <div class="grid mt-6 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        <DestinationCard
          v-for="destination in destinations"
          :key="destination.city"
          :destination="destination"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
import DestinationCard from "../components/DestinationCard.vue";
import ModeButton from "../components/ModeButton.vue";
import destinations from "../assets/data/popularDestination";
export default {
  name: "Home",
  components: { Button, DestinationCard, destinations, ModeButton },
  data() {
    return { destinations: destinations };
  },
  mounted() {},
};
</script>

<style>
</style>