<template>
  <div class="self-center hover:ring-2 cursor-pointer">
    <img v-if="mode" :src="lite" alt="" @click="toLite" />
    <img v-else :src="dark" alt="" @click="toDark" />
  </div>
</template>

<script>
import lite from "../assets/img/lite.svg";
import dark from "../assets/img/dark.svg";

export default {
  name: "ModeButton",
  data() {
    return {
      lite: lite,
      dark: dark,
      mode: document.documentElement.classList.contains("dark"),
    };
  },
  mounted() {
    localStorage?.theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
    this.mode = document.documentElement.classList.contains("dark");
  },
  updated() {
    // this.mode = document.documentElement.classList.contains("dark");
  },
  methods: {
    toDark() {
      document.documentElement.classList.add("dark");
      this.mode = document.documentElement.classList.contains("dark");
      localStorage.theme = "dark";
    },
    toLite() {
      document.documentElement.classList.remove("dark");
      this.mode = document.documentElement.classList.contains("dark");
      localStorage.theme = "light";
    },
  },
};
</script>

<style>
</style>