import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import Restaurants from '../views/Restaurants'

Vue.use(VueRouter)

const routes = [
  // 設定根目錄的路由是導向'/restaurants'
  {
    path: '/',
    name: 'root',
    redirect: 'restaurants'
  },
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
  // 建立餐廳列表的路由
  {
    path: '/restaurants',
    name: 'restaurants',
    component: Restaurants
  },
  // 建立最新動態的路由
  {
    path: '/restaurants/feeds',
    name: 'restaurants-feeds',
    component: () => import('../views/RestaurantsFeeds')
  },
  // 建立人氣餐廳的路由
  {
    path: '/restaurants/tops',
    name: 'restaurants-tops',
    component: () => import('../views/RestaurantsTop')
  },
  // 建立美食達人的路由
  {
    path: '/users/tops',
    name: 'users-tops',
    component: () => import('../views/UsersTop')
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
  linkExactActiveClass: 'active',
  routes
})

export default router
