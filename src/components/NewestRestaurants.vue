<template>
  <div class="card">
    <div class="card-header">
      最新餐廳
    </div>
    <div class="card-body">
      <div  v-for="restaurant in restaurants" :key="restaurant.id">
        <h4>
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id }}"
          >
            {{ restaurant.name }}
          </router-link>
          <small>{{ restaurant.Category ? restaurant.Category.name : '未分類' }}</small>
        </h4>
        <p>{{ restaurant.description }}</p>{{ restaurant.createdAt | fromNow }} <!-- 利用filter將時間轉換成距離現在多久時間 -->
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
// 載入mixins
import { fromNowFilter } from '../utils/mixins'
export default {
  mixins: [fromNowFilter],
  props: {
    restaurants: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
small {
  font-size: 10px;
}
</style>