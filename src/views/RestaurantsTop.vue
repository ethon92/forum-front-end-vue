<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>
    <hr>

    <div
      v-for="restaurant in restaurants" :key="restaurant.id"
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img
              class="card-img"
              :src="restaurant.image | emptyImage"
            >
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              Mrs. Mckenzie Johnston
            </h5>
            <span class="badge badge-secondary">收藏數： {{ restaurant.favoriteCount }}</span>
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              :to="{ name: 'restaurant', params: {id: restaurant.id}}"
              class="btn btn-primary mr-2"
            >Show</router-link>

            <button
              v-if="restaurant.isFavorited"
              @click.prevent.stop="deleteFavorite(restaurant.id)"
              type="button"
              class="btn btn-danger mr-2"
            >
              移除最愛
            </button>
            <button
              v-else
              @click.prevent.stop="addFavorite(restaurant.id)"
              type="button"
              class="btn btn-primary"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 載入NavTabs component
import NavTabs from '../components/NavTabs.vue'
// 從mixins載入emptyImageFilter
import { emptyImageFilter } from '../utils/mixins'
import restaurantAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers'


export default {
  name: 'RestaurantsTop',
  mixins: [emptyImageFilter],
  components: {
    NavTabs,
    // RestaurantsTopCard
  },
  data() {
    return {
      // 建立還未向API索取資料之前的陣列
      restaurants: []
    }
  },
  created() {
    this.fetchRestaurantsTop()
  },
  methods: {
    // 向伺服器取得人氣餐廳的函式
    async fetchRestaurantsTop() {
      try {
        const { data } = await restaurantAPI.getTopRestaurants()

        // 將data中的restaurants展開後，
        // 重新把FavoriteCount命名為favoriteCount
        // 最後再放回vue的restaurants中
        this.restaurants = data.restaurants.map( restaurant => {
          return {
            ...restaurant,
            id: restaurant.id,
            image: restaurant.image,
            favoriteCount: restaurant.FavoriteCount,
            description: restaurant.description,
            isFavorited: restaurant.isFavorited
          }
        })

      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得人氣餐廳，請稍後再試'
        })
        console.log('error', error)
      }
    },
    // 加入最愛的函式
    async addFavorite(restaurantId) {
      try {
        const { data } = await restaurantAPI.addFavorite({ restaurantId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurants = this.restaurants.map( restaurant => {
          if (restaurant.id !== restaurantId) {
            return restaurant
          } else {
            return {
              ...restaurant,
              isFavorited: true,
              favoriteCount: restaurant.favoriteCount + 1
            }
          }
        })
      } catch(error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '餐廳無法加入最愛，請稍後再試'
        })
      }
    },
    // 取消最愛的函式
    async deleteFavorite(restaurantId) {
      try {
        const { data } = await restaurantAPI.deleteFavorite({ restaurantId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurants = this.restaurants.map( restaurant => {
          if (restaurant.id !== restaurantId) {
            return restaurant
          } else {
            return {
              ...restaurant,
              isFavorited: false,
              favoriteCount: restaurant.favoriteCount - 1
            }
          }
        })
      } catch(error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '餐廳無法加入最愛，請稍後再試'
        })
      }
    },
  }
}
</script>