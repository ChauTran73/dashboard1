import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import dashboard from "./components/dashboard.vue";
import login from "./components/login.vue";
import register from "./components/register.vue";
import sendingEmail from "./components/sendingEmail.vue";
import VeeValidate from "vee-validate";
import vuetify from './plugins/vuetify';

Vue.use(VeeValidate);

Vue.use(VueRouter);

const routes = [
  { path: "/login", component: login },
  { path: "/", component: dashboard },
  { path: "/register", component: register },
  { path: "/sendingEmail", component: sendingEmail }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
