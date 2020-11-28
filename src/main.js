import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//icon
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faUser,
  faBars,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faSearch, faBars, faUser, faTimes);
Vue.component("fontAwesomeIcon", FontAwesomeIcon);

//search
import VueFuse from "vue-fuse";
Vue.use(VueFuse);

//
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
