<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{ restaurant.name }} </h1>
      <p class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block" 
        :src="restaurant.image | emptyImage"
        style="width: 250px;margin-bottom: 25px;"
      >
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            08:00
          </li>
          <li>
            <strong>Tel:</strong>
            (918) 827-1962
          </li>
          <li>
            <strong>Address:</strong>
            98138 Elisa Road
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ restaurant.description }}</p>
      <router-link
        :to="{ name: 'restaurant-dashboard', params: { id: restaurant.id }}"
        class="btn btn-primary btn-border mr-2"
      >Dashboard</router-link>

      <button
        v-if="restaurant.isFavorited"
        @click.prevent.stop="deleteFavorite(restaurant.id)"
        type="button"
        class="btn btn-danger btn-border mr-2"
      >
        移除最愛
      </button>
      <button
        v-else
        @click.prevent.stop="addFavorite(restaurant.id)"
        type="button"
        class="btn btn-primary btn-border mr-2"
      >
        加到最愛
      </button>
      <button
        v-if="restaurant.isLiked"
        @click.prevent.stop="deleteLike(restaurant.id)"
        type="button"
        class="btn btn-danger like mr-2"
      >
        Unlike
      </button>
      <button
        v-else
        @click.prevent.stop="addLike(restaurant.id)"
        type="button"
        class="btn btn-primary like mr-2"
      >
        Like
      </button>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from '../utils/mixins'
import userAPI from '../apis/users'
import { Toast } from '../utils/helpers'

export default {
  mixins: [emptyImageFilter],
  props: {
    initialRestaurant: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      restaurant: this.initialRestaurant
    }
  },
  watch: {
    initialRestaurant (newValue) {
      this.restaurant = {
        ...this.restaurant,
        ...newValue
      }
    }
  },
  methods: {
    // 加入最愛的函式
    async addFavorite(restaurantId) {
      try {
        // 透過API將餐廳加入最愛的函式
        const { data } = await userAPI.addFavorite({ restaurantId })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.restaurant = {
          ...this.restaurant,
          isFavorited: true
        }
      } catch(error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '餐廳無法加入最愛，請稍後再試'
        })
      }
    },
    // 移除最愛的函式
    async deleteFavorite(restaurantId) {
      try {
        // 透過API餐廳移除最愛的函式
        const { data } = await userAPI.deleteFavorite({ restaurantId })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.restaurant = {
          ...this.restaurant,
          isFavorited: false
        }
      } catch(error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '餐廳無法移除最愛，請稍後再試'
        })
      }
    },
    // 加入喜愛的函式
    async addLike(restaurantId) {
      try {
        // 透過API餐廳加入喜愛的函式
        const { data } = await userAPI.addLike({ restaurantId })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.restaurant = {
          ...this.restaurant,
          isLiked: true
        }
      } catch(error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '餐廳無法加入喜愛，請稍後再試'
        })
      }
    },
    // 移除喜愛的函式
    async deleteLike(restaurantId) {
      try {
        // 透過API餐廳移除喜愛的函式
        const { data } = await userAPI.deleteLike({ restaurantId })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.restaurant = {
          ...this.restaurant,
          isLiked: false
        }
      } catch(error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '餐廳無法移除喜愛，請稍後再試'
        })
      }
    }
  }
}
</script>

<style scoped>
.col-lg-8 p,
.contact-info-wrap li,
.contact-info-wrap strong {
  font-family: serif;
  font-size: 17px;
}
</style>