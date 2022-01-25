<template>
  <div class="card">
    <div class="card-header">
      最新餐廳
    </div>
    <div class="card-body">
      <div  v-for="restaurant in restaurants" :key="restaurant.id">
        <h4>
          <a href="#">{{ restaurant.name }}</a>
          <small>{{ restaurant.Category ? restaurant.Category.name : '未分類' }}</small>
        </h4>
        <p>{{ restaurant.description }}</p>{{ restaurant.createdAt | fromNow }} <!-- 利用filter將時間轉換成距離現在多久時間 -->
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
// 載入moment套件
import moment from "moment";
export default {
  filters: {
    fromNow(datetime) {
      // 如果沒有時間回傳'-'
      if (!datetime) {
        return '-'
      }

      // 利用moment中的fromNow函式回傳距今的多久時間
      return moment(datetime).fromNow()
    }
  },
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