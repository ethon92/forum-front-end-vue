<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ followers.length }}</strong> followers (追隨者)
    </div>
    <div class="p-1" v-for="follower in followers" :key="follower.id">
      <router-link :to="{ name: 'user', params: { id: follower.id }}">
        <img :src="follower.image | emptyImage" width="60" height="60" class="avatar">
      </router-link>
    </div>
  </div>
</template>

<script>
// 從mixins載入emptyImageFilter
import { emptyImageFilter } from '../utils/mixins'

export default {
  mixins: [emptyImageFilter],
  props: {
    followers: {
      type: Array,
      required: true
    }
  }
}
</script>