<template>
  <a class="btn btn-primary hover:-translate-y-0.5 transform transition">{{
    text
  }}</a>
  <!-- <a class="btn btn-secondary">Learn more</a> -->
</template>

<script >
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>