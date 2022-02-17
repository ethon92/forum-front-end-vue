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
        :disabled="isProcessing"
      >
        {{ isProcessing ? '資料更新中...' : 'Submit' }}
      </button>
    </form>
  </div>
</template>

<script>
// 載入mapState
import { mapState } from 'vuex'
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'

export default {
  name: 'UserEdit',
  data () {
    return {
      id: 0,
      image: '',
      name: '',
      email: '',
      isProcessing: false
    }
  },
  created() {
    if (this.currentUser.id === -1) return
    const { id } = this.$route.params
    this.setUser(id)
  },
  // 利用watch監控currentUser
  // 若有改變就重新將currentUser放入vue的data中
  watch: {
    currentUser (user) {
      if (user.id === -1) return
      const { id } = this.$route.params
      this.setUser(id)
    }
  },
  // 利用mapState取出currentUser
  computed: {
    ...mapState(['currentUser'])
  },
  beforeRouteUpdate (to, next) {
    if (this.currentUser.id === -1) return
    const { id } = to.params
    this.setUser(id)
    next()
  },
  methods: {
    // 將currentUser的data放回vue的data中
    setUser (userId) {
      const { id, image, name, email } = this.currentUser
      
      // 判斷currentUser的id是否與路由中的id相同
      // 若不同則轉址到not-found頁面
      if (id.toString() !== userId.toString()) {
        this.$router.push({ name: 'not-found' })
        return
      }

      this.id = id
      this.name = name
      this.email = email
      this.image = image
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
    // 向伺服器
    async handleSubmit (e) {
      try {
        // 當使用者未填姓名時的提示訊息
        if (!this.name) {
          Toast.fire({
            icon: 'warning',
            title: '您尚未填寫姓名'
          })
          return
        }

        const form = e.target
        const formData = new FormData(form)
        this.isProcessing = true

        // 透過API更新使用者資料
        const { data } = await usersAPI.update({
          userId: this.id,
          formData
        })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        // 轉址到個人頁面
        this.$router.push({ name: 'user', params: { id: this.id } })
      } catch (error) {
        console.error(error.message)
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法更新使用者資料，請稍後再試'
        })
      }
    }
  }
}
</script>