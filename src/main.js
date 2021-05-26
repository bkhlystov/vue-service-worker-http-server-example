import Vue from "vue";
import App from "./App.vue";
import { register, unregister } from "./registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

if (process.env.NODE_ENV === 'development_sw') {
  register(`service-worker-mock-api.js`);
}
else {
  unregister();
}