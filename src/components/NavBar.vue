<template>
  <div class="flex justify-between mx-10 my-5">
    <img
      src="../assets/img/logo-brand.svg"
      alt="workcation logo"
      class="h-10"
    />
    <ModeButton />
  </div>
</template>

<script>
import ModeButton from "../components/ModeButton.vue";

export default {
  name: "NavBar",
  components: { ModeButton },
};
</script>

<style>
</style>