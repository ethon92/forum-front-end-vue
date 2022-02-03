<template>
  <div class="container py-5">
    <form @submit.prevent.stop="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          v-model="currentUser.name"
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        >
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
        v-if="currentUser.image"
        :src="currentUser.image"
        class="d-block img-thumbnail mb-3"
        width="200"
        height="200"
      >
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        >
      </div>

      <button
        type="submit"
        class="btn btn-primary"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
// 模擬向API抓取的使用者資料
const dummyUser = {
  currentUser: {
    "id": 1,
    "name": "root",
    "email": "root@example.com",
    "image": 'https://i.imgur.com/58ImzMM.png',
    "isAdmin": true
  },
  isAuthenticated: true
}

export default {
  name: 'UserEdit',
  data() {
    return {
      currentUser: {
        name: '',
        image: ''
      }
    }
  },
  created() {
    const { id } = this.$route.params
    this.fetchUser(id)
  },
  methods: {
    fetchUser(userId) {
      console.log('fetchUser id', userId)
      const { name, image } = dummyUser.currentUser
      this.currentUser = {
        ...this.currentUser,
        name,
        image
      }
    },
    handleFileChange (e) {
      // 利用解構賦值將files選出
      const { files } = e.target

      if (files.length === 0) {
        // 使用者沒有選擇上傳的檔案
        this.currentUser.image = ''
      } else {
        // 否則產生預覽圖
        const imageURL = window.URL.createObjectURL(files[0])
        this.currentUser.image = imageURL
      }
    },
    handleSubmit(e) {
      // 將form表單選出
      const form = e.target
      // 將form表單轉成FormData的格式
      const formData = new FormData(form)
      // 先console出formData內容模擬傳送資料給伺服器
      for ( let [name, value] of formData.entries() ) {
        console.log(name + ':' + value)
      }
    }
  }
}
</script>