import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'

Vue.use(VueRouter)

const routes = [
  // 建立sign in的路由
  {
    path: '/signin',
    name: 'sign-in',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'sign-up',
    // 利用動態路由載入sign up component，由於使用者只會sign up一次
    component: () => import('../views/SignUp.vue')
  },
  // 由於路由是由上往下匹配，所以只要上方都匹配不到路由就會進到not-found
  // 則將not-found路由放在最後一個，並且path是放入"*"(萬用字元)
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
