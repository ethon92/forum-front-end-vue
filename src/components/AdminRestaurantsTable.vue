<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">
          #
        </th>
        <th scope="col">
          Category
        </th>
        <th scope="col">
          Name
        </th>
        <th
          scope="col"
          width="300"
        >
          操作
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="restaurant in restaurants"
        :key="restaurant.id"
      >
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : '未分類' }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{ name: 'admin-restaurant', params: { id: restaurant.id }}"
            class="btn btn-link"
          >Show</router-link>

          <router-link
            :to="{ name: 'admin-restaurant-edit', params: { id: restaurant.id }}"
            class="btn btn-link"
          >Edit</router-link>

          <button
            type="button"
            class="btn btn-link"
            @click.prevent.stop="deleteRestaurants(restaurant.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import adminAPI from '../apis/admin'
import { Toast } from '../utils/helpers'

export default {
  name: 'AdminRestaurantsTable',
  data() {
    return {
      // 建立餐廳初始資料
      restaurants: []
    }
  },
  created() {
    this.fetchRestaurants()
  },
  methods: {
    // 向伺服器索取餐廳列表的函式
    async fetchRestaurants() {
      try {
        const { data } = await adminAPI.restaurants.get()

        this.restaurants = data.restaurants
      } catch(error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法取得後台餐廳列表，請稍後再試'
        })
      }
    },
    // 向伺服器移除餐廳的函式
    async deleteRestaurants(restaurantId) {
      try {
        // 透過API向伺服器移除餐廳
        const { data } = await adminAPI.restaurants.delete({ restaurantId })
        
        // 回傳的訊息不是success時，顯示錯誤訊息
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        
        // 將餐廳從vue的資料中移除
        this.restaurants = this.restaurants.filter( restaurant => restaurant.id !== restaurantId )
      } catch(error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法移除餐廳，請稍後再試'
        })
      }
        
    }
  }
}
</script>