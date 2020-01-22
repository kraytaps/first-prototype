import Vue from 'vue'
import App from './App.vue'

// Design Dependencies
import VueMq from 'vue-mq'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/scss/main.scss'

// Functional Dependencies
import router from './router'
import store from './store'

// VueMq
Vue.use(VueMq, {
	breakpoints: {
	  mobile: 600,
	  // tablet: 900,
	  // laptop: 1250,
	  desktop: Infinity,
	}
  })

// Load Vue Bootstrap
Vue.use(BootstrapVue)

// Disable Development Mode
Vue.config.productionTip = false

// Mount vue on 'app' DOM
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
