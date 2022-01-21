<template>
  <div class="my-5 flex flex-col items-center">
    <h1 class="text-center text-4xl text-brand-light font-extrabold">Editor</h1>
    <Editor class="w-full" @post="handleInput" />
    <Button
      text="submit"
      @click="handleSubmit"
      class="w-full text-center max-w-2xl mt-3 cursor-pointer active:cursor-wait"
    />
  </div>
  <Toast title="Sucess" message="sucess" v-show="show" />
</template>

<script>
import Button from "../components/Button.vue";
import Editor from "../components/Editor.vue";
import Toast from "../components/Toast.vue";
export default {
  components: { Button, Editor, Toast },
  name: "EditPage",
  data() {
    return {
      post: {},
      show: false,
    };
  },
  methods: {
    async handleSubmit() {
      if (this.post) {
        try {
          const res = await fetch(
            "https://compassed-api.herokuapp.com/api/post/",
            {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(this.post),
            }
          );
          const response = await res.json();
          console.log(response);
          if (response.length) await this.$router.push("/posts");
        } catch (error) {
          console.log(error);
        }
      }
    },
    handleInput(post) {
      this.post = post;
    },
  },
};
</script>

<style>
</style>