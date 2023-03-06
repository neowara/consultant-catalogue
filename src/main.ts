import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import router from "./router";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faMusic,
  faCamera,
  faCat,
  faBook,
  faCubes,
  faCampground,
  faPenFancy,
  faDrumstickBite,
  faDumbbell,
  faPizzaSlice,
  faMitten,
  faLightbulb,
  faPaintBrush,
  faHeart,
  faPersonSnowboarding,
  faBowlRice,
  faEarthAmericas,
  faBeerMugEmpty,
  faHeadphonesSimple,
  faCompactDisc,
  faUtensils,
  faRoute,
  faPaw
} from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";

Vue.use(Vuex);

const store = new Vuex.Store({
  state() {
    return {
      active: 0,
      menuOpen: false
    };
  },
  mutations: {
    setActive(state: any, payload) {
      state.active = payload;
    },
    toggleMenu(state, payload) {
      state.menuOpen = payload;
    }
  },
  actions: {
    setActive(context, payload) {
      context.commit("setActive", payload);
    },
    toggleMenu(context, payload) {
      context.commit("toggleMenu", payload);
    }
  },
  getters: {
    active(state) {
      return state.active;
    },
    menuOpen(state) {
      return state.menuOpen;
    }
  }
});

library.add(
  faMusic,
  faCamera,
  faCat,
  faBook,
  faCubes,
  faCampground,
  faMitten,
  faPenFancy,
  faDrumstickBite,
  faDumbbell,
  faPizzaSlice,
  faLightbulb,
  faPaintBrush,
  faHeart,
  faPersonSnowboarding,
  faBowlRice,
  faEarthAmericas,
  faBeerMugEmpty,
  faHeadphonesSimple,
  faCompactDisc,
  faUtensils,
  faRoute,
  faPaw
);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  store: store,
  router: router,
  render: (h) => h(App)
}).$mount("#app");

/* new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
  store: store
}); */
