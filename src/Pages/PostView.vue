<template>
  <h1 class="text-3xl font-extrabold text-brand-light text-center">POSTS</h1>
  <div v-if="posts.length" class="space-y-8 max-w-xl mx-auto my-10">
    <div v-for="post in posts" :key="post.id">
      <div
        class="
          bg-white
          p-8
          rounded-lg
          shadow-lg
          overflow-hidden
          space-y-4
          dark:bg-gray-100
          cursor-pointer
          hover:bg-brand-light
          dark:hover:bg-blue-200
        "
      >
        <router-link
          :to="{
            name: 'details',
            params: {
              slug: post?.post_title.trim().split(' ').join('_'),
              id: post.post_id,
            },
          }"
        >
          <h1 class="text-lg font-bold">{{ post.post_title }}</h1>
          <p class="text-gray-600 whitespace-">
            {{
              post?.post_content.length > 300
                ? post?.post_content.slice(0, 300) + "..."
                : post?.post_content
            }}
          </p>
        </router-link>
      </div>
    </div>
  </div>
  <div v-else class="text-center mt-40 font-light text-2xl">
    Loading Posts....
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PostView",
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async signup() {
      try {
        const response = await axios.post(
          "https://wishfulapi.herokuapp.com/api/v1/auth/signup",
          {
            username: "jane",
            password: "jane123456789",
            email: "jane@test.com",
          }
        );
        console.log(response.data);
      } catch (e) {
        console.log(e.response.data);
      }
    },
  },
  mounted() {
    fetch("https://compassed-api.herokuapp.com/api/post/")
      .then((res) => res.json())
      .then((res) => (this.posts = res));

    this.signup();
  },
};
</script>

<style>
</style>