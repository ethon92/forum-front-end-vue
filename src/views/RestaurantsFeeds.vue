<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />

    <template v-else>
      <h1 class="mt-5">
        最新動態
      </h1>
      <hr>
      <div class="row">
        <div class="col-md-6">
          <!-- 最新餐廳 NewestRestaurants -->
          <h3>最新餐廳</h3>
          <NewestRestaurants :restaurants="restaurants" />
        </div>
        <div class="col-md-6">
          <!-- 最新評論 NewestComments-->
          <h3>最新評論</h3>
          <NewestComments :comments="comments" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
// 載入NavTabs component
import NavTabs from '../components/NavTabs.vue'
import NewestRestaurants from '../components/NewestRestaurants.vue'
import NewestComments from '../components/NewestComments.vue';
import restaurantFeedsAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers'
import Spinner from '../components/Spinner.vue'

export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
    Spinner
  },
  // 初始資料
  data() {
    return {
      restaurants: [],
      comments: [],
      isLoading: true
    }
  },
  created() {
    this.fetchFeeds()
  },
  methods: {
    // 向伺服器取得最新動態資料的函式
    async fetchFeeds() {
      try {
        this.isLoading = true
        // 呼叫getRestaurantFeeds函式向伺服器取得最新動態的資料
        const response = await restaurantFeedsAPI.getRestaurantFeeds()
        const { restaurants, comments } = response.data

        this.restaurants = restaurants
        this.comments = comments.filter( comment => comment.Restaurant && comment.text )
        this.isLoading = false
      } catch(error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得最新動態，請稍後再試'
        })
      }
    }
  }
}
</script>