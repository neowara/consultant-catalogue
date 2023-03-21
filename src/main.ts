import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";

import { library, IconPack, IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(fas as IconPack, far as IconPack, fab as IconPack)

Vue.config.productionTip = false;

new Vue({
  store: store,
  router: router,
  render: (h) => h(App)
}).$mount("#app");
