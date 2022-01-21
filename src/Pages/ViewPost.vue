<template>
  <div class="max-w-lg flex flex-col mx-auto lg:max-w-3xl">
    <PostDetails />
  </div>
</template>

<script>
import PostDetails from "../components/PostDetails.vue";
export default {
  name: "ViewPost",
  components: { PostDetails },
};
</script>

<style>
</style>