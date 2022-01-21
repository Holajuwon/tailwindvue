<template>
  <div class="flex flex-col space-y-8 max-w-2xl mt-4 mx-auto">
    <input
      v-model="post.title"
      type="text"
      name="title"
      class="w-full form-textarea p-5 text-center text-4xl font-extrabold bg-gray-300 outline-none border-b-4 border-indigo-900"
      placeholder="Title"
      autofocus
      autocomplete
    />
    <div class="">
      <textarea
        v-model="post.content"
        name="content"
        class="rounded text-xl font-light w-full p-8 shadow-lg outline-none"
        cols=""
        rows="20"
        placeholder="Write away..............."
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "Editor",
  data() {
    return {
      post: {
        title: "",
        content: "",
      },
    };
  },
  updated() {
    this.$emit("post", this.post);
  },
};
</script>

<style>
</style>