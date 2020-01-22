import Vue from 'vue'
import Router from 'vue-router'

import Welcome from './components/Welcome.vue'
import SignUp from './components/SignUp.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'onboarding',
      component: Welcome,
    },
    {
      path: '/signup',
      name: 'sign-up',
      component: SignUp,
    },
  ]
})

export default router