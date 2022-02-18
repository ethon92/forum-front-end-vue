<template>
  <div class="container py-5">
    <NavTabs />

    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories"/>
    <Spinner v-if="isLoading" />
    <template v-else>
      <div class="row">
        <!-- 餐廳卡片 RestaurantCard-->
        <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.id" :initial-restaurant="restaurant"/>
      </div>

      <!-- 分頁標籤 RestaurantPagination -->
      <RestaurantsPagination v-if="totalPage.length > 1" :category-id="categoryId" :current-page="currentPage" :total-page="totalPage" :previous-page="previousPage" :next-page="nextPage"/>
    </template>
  </div>
</template>

<script>
// 載入NavTabs component
import NavTabs from '../components/NavTabs.vue'
// 載入RestaurantCard component
import RestaurantCard from '../components/RestaurantCard.vue'
// 載入RestaurantsNavPills component
import RestaurantsNavPills from '../components/RestaurantsNavPills.vue'
// 載入RestaurantsPagination component
import RestaurantsPagination from '../components/RestaurantsPagination.vue'
// 載入restaurantsAPI
import restaurantsAPI from '../apis/restaurants'
// 載入Toast
import { Toast } from '../utils/helpers'
import Spinner from './../components/Spinner'

export default {
  name: 'Restaurants',
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
    Spinner
  },
  // 設定初始資料
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: 0,
      previousPage: -1,
      nextPage: -1,
      isLoading: true
    }
  },
  created() {
    // 取得輸入網址的queryString
    const { page = '', categoryId = '' } = this.$route.query
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId })
  },
  beforeRouteUpdate(to, from, next) {
    // 將page與categoryId從to.query中取出並給予初始值為空字串，就會去抓取全部的資料
    // 若沒有給予初始值則會得到'undefined'，就會發送請求至伺服器去尋找與'undefined'相關的資料
    const { page = '', categoryId = '' } = to.query

    // 重新再次向伺服器取得餐廳資料
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId })
    next()
  },
  methods: {
    // 向伺服器索取資料的函式
    async fetchRestaurants({ queryPage, queryCategoryId }) {
      try {
        this.isLoading = true
        // 向伺服器取得餐廳資料的函式
        const response = await restaurantsAPI.getRestaurants({
          page: queryPage,
          categoryId: queryCategoryId
        })
        
        // 將資料解構賦值取出
        const { restaurants, categories, categoryId, page, totalPage, prev, next } = response.data

        // 將資料放入vue的data中
        this.restaurants = restaurants
        this.categories = categories
        this.categoryId = categoryId
        this.currentPage = page
        this.totalPage = totalPage
        this.previousPage = prev
        this.nextPage = next
        this.isLoading = false
      } catch(error) {
        this.isLoading = false
        // 利用Toast顯示錯誤訊息
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    }
  }
}
</script>