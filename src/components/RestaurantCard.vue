<template>
  <div class="col-md-6 col-lg-4">
    <div v-show="!isLoading" class="card mb-4">
      <img
        class="card-img-top"
        :src="restaurant.image | emptyImage"
        alt="Card image cap"
        width="286px"
        height="180px"
        @load="changeLoading"
      >
      <div class="card-body">
        <p class="card-text title-wrap">
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id }}"
          >
            {{ restaurant.name }}
          </router-link>
        </p>
        <span class="badge badge-secondary">{{ restaurant.Category ? restaurant.Category.name : '未分類' }}</span>
        <p class="card-text text-truncate">
          {{ restaurant.description }}
        </p>
      </div>
      <div class="card-footer">
        <button
          v-if="restaurant.isFavorited"
          @click.prevent.stop="deleteFavorite(restaurant.id)"
          :disabled="isProcessing"
          type="button"
          class="btn btn-danger btn-border favorite mr-2"
        >
          移除最愛
        </button>
        <button
          v-else
          @click.prevent.stop="addFavorite(restaurant.id)"
          :disabled="isProcessing"
          type="button"
          class="btn btn-primary btn-border favorite mr-2"
        >
          加到最愛
        </button>
        <button
          v-if="restaurant.isLiked"
          @click.prevent.stop="deleteLike(restaurant.id)"
          :disabled="isProcessing"
          type="button"
          class="btn btn-danger like mr-2"
        >
          Unlike
        </button>
        <button
          v-else
          @click.prevent.stop="addLike(restaurant.id)"
          :disabled="isProcessing"
          type="button"
          class="btn btn-primary like mr-2"
        >
          Like
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// 從mixins中載入emptyImageFilter
import { emptyImageFilter } from '../utils/mixins'
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'
// import Spinner from '../components/Spinner.vue'

export default {
  mixins: [emptyImageFilter],
  // components: {
  //   Spinner
  // },
  props: {
    initialRestaurant: {
      type: Object,
      required: true
    }
  },
  // 將傳入的prop放入data中，才可修改
  data() {
    return {
      restaurant: this.initialRestaurant,
      isLoading: true,
      isProcessing: false
    }
  },
  methods: {
    changeLoading () {
      this.isLoading = false
    },
    // 加入最愛函式
    async addFavorite(restaurantId) {
      try {
        this.isProcessing = true
        // 將data解構賦值取出
        const { data } = await usersAPI.addFavorite({ restaurantId })

        // 當data的狀態不是success時，要產生錯誤訊息
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        // 將餐廳isFavorited狀態轉成true
        this.restaurant = {
          ...this.restaurant,
          isFavorited: true
        }

        this.isProcessing = false
      } catch(error) {
        this.isProcessing = false
        // 將錯誤訊息顯示在dev tool中
        console.log('error', error)

        // 告知使用者無法加入最愛的訊息
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳加入最愛，請稍後再試'
        })
      }
    },
    // 刪除最愛函式
    async deleteFavorite(restaurantId) {
      try {
        this.isProcessing = true
        // 將data解構賦值取出
        const { data } = await usersAPI.deleteFavorite({ restaurantId })

        // 當data的狀態不是success時，要產生錯誤訊息
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        // 將餐廳isFavorited狀態轉成false
        this.restaurant = {
          ...this.restaurant,
          isFavorited: false
        }

        this.isProcessing = false
      } catch(error) {
        this.isProcessing = false
        console.log('error', error)
        // 告知使用者無法加入最愛的訊息
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳移除最愛，請稍後再試'
        })
      }
    },
    // 按讚函式
    async addLike(restaurantId) {
      try {
        this.isProcessing = true
        const { data } = await usersAPI.addLike({ restaurantId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurant = {
          ...this.restaurant,
          isLiked: true
        }

        this.isProcessing = false
      } catch(error) {
        this.isProcessing = false
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳加入喜歡，請稍後再試'
        })
      }
    },
    // 取消讚函式
     async deleteLike(restaurantId) {
      try {
        this.isProcessing = true
        const { data } = await usersAPI.deleteLike({ restaurantId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurant = {
          ...this.restaurant,
          isLiked: false
        }

        this.isProcessing = false
      } catch(error) {
        this.isProcessing = false
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳移除喜歡，請稍後再試'
        })
      }
    }
  }
}
</script>

<style scoped>
.badge.badge-secondary {
  padding: 0;
  margin: 8px 0;
  color: #bd2333;
  background-color: transparent;
}

.btn,
.btn-border.btn:hover {
  margin: 7px 14px 7px 0;
}

.card {
  margin-bottom: 2rem !important;
}
.card-img-top {
  background-color: #EFEFEF;
}

.card-body {
  padding: 17.5px;
}

.card-footer {
  padding: 9px 17.5px;
  border-color: rgb(232, 232, 232);
  background: white;
}
</style>