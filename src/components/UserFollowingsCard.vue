<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ followings.length }}</strong> followings (追蹤者)
    </div>
    <div class="d-flex flex-wrap">
      <div class="p-1"  v-for="following in followings" :key="following.id">
        <router-link :to="{ name: 'user', params: { id: following.id }}">
          <img :src="following.image" width="60" height="60" >
        </router-link>
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  props: {
    followings: {
      type: Array,
      required: true
    }
  }
}
</script>
