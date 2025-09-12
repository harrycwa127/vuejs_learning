import { createRouter, createWebHashHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/home",
    name: "home",
    components: {
      default: () =>
        import(/* webpackChunkName: "home" */ "../views/AppContent.vue"),
    },
    children: [
      {
        path: "",
        name: "homeContent",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "@/components/appContentViews/HomeView.vue"
          ),
      },
      {
        path: "about",
        name: "about",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "@/components/appContentViews/AboutView.vue"
          ),
      },
      {
        path: "services",
        name: "services",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "@/components/appContentViews/ServicesView.vue"
          ),
      },
      {
        path: "contact",
        name: "contact",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "@/components/appContentViews/ContactView.vue"
          ),
      },
      {
        path: "help",
        name: "help",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "@/components/appContentViews/HelpView.vue"
          ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
