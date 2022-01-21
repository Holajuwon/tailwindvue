<template>
  <h1 class="text-center text-3xl font-extrabold text-brand-dark ">
    {{ title }}
  </h1>
  <p class="font-light text-xl dark:text-gray-50 whitespace-pre-wrap mx-5 my-5">{{ content }}</p>
</template>

<script>
export default {
  name: "PostDetails",
  data() {
    return {
      id: this.$route.params.id,
      title: "",
      content: "",
    };
  },
  mounted() {
    fetch(`https://compassed-api.herokuapp.com/api/post/${this.id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.title = res[0].post_title;
        this.content = res[0].post_content;
      });
  },
  updated() {
    console.log(this.title);
  },
};
</script>

<style>
</style>