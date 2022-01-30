<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ comments.length }}</strong> 已評論餐廳
    </div>
    <div class="d-flex flex-wrap">
      <div class="p-1" v-for="comment in comments" :key="comment.id">
        <router-link :to="{ name: 'restaurant', params: { id: comment.RestaurantId}}">
          <img :src="comment.Restaurant.image | emptyImage" width="60" height="60" class="avatar">
        </router-link>
      </div>
    </div>
    
  </div>
</template>

<script>
// 從mixins載入emptyImageFilter
import { emptyImageFilter } from "../utils/mixins";

export default {
  mixins: [emptyImageFilter],
  props: {
    comments: {
      type: Array,
      required: true
    }
  }
}
</script>