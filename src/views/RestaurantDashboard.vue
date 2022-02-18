<template>
  <div class="container py-5">
    <Spinner v-if="isLoading" />
    <template v-else>
      <div>
        <h1>{{ restaurant.name }}</h1>
        <span class="badge badge-secondary mt-1 mb-3">
          {{ restaurant.categoryName }}
        </span>
      </div>

      <hr>

      <ul>
        <li>評論數： {{ restaurant.commentsLength }} </li>
        <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
      </ul>

      <button
        type="button"
        class="btn btn-link"
        @click="$router.back()"
      >
        回上一頁
      </button>
    </template>
  </div>
</template>

<script>
import restaurantAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers'
import Spinner from './../components/Spinner'

export default {
  components: {
    Spinner
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        commentsLength: 0,
        viewCounts: 0,
      },
      isLoading: true
    }
  },
  created() {
    // 利用route.params將路由中的id取出
    const { id: restaurantId } = this.$route.params
    this.fetchDashboardData(restaurantId)
  },
  methods: {
    // 向伺服器取得餐廳資料的函式
    async fetchDashboardData(restaurantId) {
      try {
        this.isLoading = true
        // 透過API取得餐廳資料的函式
        const { data } = await restaurantAPI.getRestaurant({ restaurantId })

        // 將data解構賦值取出
        const { restaurant } = data
        const { id, name, Category, Comments, viewCounts } = restaurant

        this.restaurant = {
          id,
          name,
          categoryName: Category.name,
          commentsLength: Comments.length,
          viewCounts
        }
        this.isLoading = false
      } catch(error) {
        this.isLoading = false
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    }
  }
}
</script>