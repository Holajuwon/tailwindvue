import { createRouter, createWebHistory } from "vue-router";
import Home from "../Pages/Home.vue";
import EditPage from "../Pages/EditPage.vue";
import PostView from "../Pages/PostView.vue";
import ViewPost from "../Pages/ViewPost.vue";
import ErrorPage from "../Pages/ErrorPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/editor",
    name: "editor",
    component: EditPage,
  },
  {
    path: "/posts",
    name: "post",
    component: PostView,
  },
  {
    path: "/post/:slug/:id",
    name: "details",
    component: ViewPost,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: "Error",
    component: ErrorPage,
  },
];

const Router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default Router;
