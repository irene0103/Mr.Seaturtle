import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes= [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: '/product',
      redirect: '/product/machi' 
    },
    {
      path: "/product/:category",
      name: "product",
      props:true,
      component: () => import("../views/ProductView.vue"),
    },
    {
      path: "/delivery",
      name: "delivery",
      component: () => import("../views/DeliveryView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
  ];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
