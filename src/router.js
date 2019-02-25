import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Chat from "./components/Chat.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/chat",
      name: "chat",
      component: Chat,
      props: true,
      beforeEnter: (to, from, next) => {
        if (to.params.name) {
          next();
        } else {
          next({ name: "home" });
        }
      }
    }
  ]
});
