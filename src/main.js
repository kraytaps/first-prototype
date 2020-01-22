import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './global.scss'


/* DEPENDENCY IMPORTS */
import BootstrapVue, { IconsPlugin } from 'bootstrap-vue'
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import vuetify from './plugins/vuetify';

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
library.add(fas, far, fab);
Vue.component("font-awesome-icon", FontAwesomeIcon);
/**********************/

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
