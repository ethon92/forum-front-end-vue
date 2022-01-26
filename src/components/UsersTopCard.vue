<template>
  <div class="col-3">
    <a href="#">
      <img
        :src="user.image"
        width="140px"
        height="140px"
      >
    </a>
    <h2>{{ user.name }}</h2>
    <span class="badge badge-secondary">追蹤人數： {{ user.FollowerCount }}</span>
    <p class="mt-3">
      <button
        v-if="user.isFollowed"
        @click.prevent.stop="deleteFollow"
        type="button"
        class="btn btn-danger"
      >
        取消追蹤
      </button>
      <button
        v-else
        @click.prevent.stop="addFollow"
        type="button"
        class="btn btn-primary"
      >
        追蹤
      </button>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    initialUser: {
      type: Object,
      required: true
    }
  },
  // 將傳入的初始資料放入user中
  data() {
    return {
      user: this.initialUser
    }
  },
  methods: {
    // 加入追蹤函式
    addFollow() {
      this.user = {
        ...this.user,
        isFollowed: true
      }
    },
    // 刪除追蹤函式
    deleteFollow() {
      this.user = {
        ...this.user,
        isFollowed: false
      }
    }
  }
}
</script>
