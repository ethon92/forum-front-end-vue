import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import Restaurants from '../views/Restaurants.vue'

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
    component: () => import('../views/RestaurantsFeeds.vue')
  },
  // 建立人氣餐廳的路由
  {
    path: '/restaurants/tops',
    name: 'restaurants-tops',
    component: () => import('../views/RestaurantsTop.vue')
  },
  // 建立動態路由，由於是路由是由上往下匹配，若將動態路由往上擺，則會造成'/restaurants'後方接的路由都會進到動態路由中
  {
    path: '/restaurants/:id',
    name: 'restaurant',
    component: () => import('../views/Restaurant.vue')
  },
  // 建立各個餐廳評論和瀏覽的次數頁面路由
  {
    path: '/restaurants/:id/dashboard',
    name: 'restaurant-dashboard',
    component: () => import('../views/RestaurantDashboard.vue')
  },
  // 建立美食達人的路由
  {
    path: '/users/tops',
    name: 'users-top',
    component: () => import('../views/UsersTop.vue')
  },
  // 建立個人頁面的路由
  {
    path: '/users/:id',
    name: 'user',
    component: () => import('../views/User.vue')
  },
  {
    path: '/users/:id/edit',
    name: 'user-edit',
    component: () => import('../views/UserEdit.vue')
  },
  // 建立只輸入'/admin'，轉址去'/admin/restaurants'
  {
    path: '/admin',
    exact: true,
    redirect: '/admin/restaurants'
  },
  // 建立admin的路由
  {
    path: '/admin/restaurants',
    name: 'admin',
    component: () => import('../views/AdminRestaurants.vue')
  },
  // 建立admin餐廳類別的路由
  {
    path: '/admin/categories',
    name: 'admin-categories',
    component: () => import('../views/AdminCategories.vue')
  },
  // 建立admin新增餐廳的路由
  {
    path: '/admin/restaurants/new',
    name: 'admin-restaurant-new',
    component: () => import('../views/AdminRestaurantNew.vue')
  },
  // 建立admin修改餐廳的路由
  {
    path: '/admin/restaurants/:id/edit',
    name: 'admin-restaurant-edit',
    component: () => import('../views/AdminRestaurantEdit.vue')
  },
  // 建立admin各個restaurant的路由
  {
    path: '/admin/restaurants/:id',
    name: 'admin-restaurant',
    component: () => import('../views/AdminRestaurant.vue')
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
