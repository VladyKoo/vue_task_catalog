import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/brake-rotor/:id",
      name: "brake-rotor",
      component: Product
    }
  ]
});
