import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const TITLE =
  "TypeRunner（タイプランナー） - いままでキーボードを叩いた回数数えます.";
const DESCRIPTION = `いままで打ったキーボードの数、気になりませんか？
TypeRunnerはそんな気になるタイピング数を記録するmacOSアプリです。`;

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: TITLE,
      desc: DESCRIPTION,
    },
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
