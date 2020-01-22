import Vue from 'vue'
import Router from 'vue-router'

import SignIn from './components/SignIn.vue'
import Welcome from './components/Welcome.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'sign-in',
      component: SignIn,
    },
    {
      path: '/onboarding',
      name: 'onboarding',
      component: Welcome,
    }
  ]
})

export default router