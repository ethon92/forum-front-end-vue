<template>
  <form @submit.prevent.stop="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea
      v-model="text"
        class="form-control"
        rows="3"
        name="text"
      />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button
        type="button"
        class="btn btn-link"
        @click="$router.back()"
      >回上一頁</button>
      <button
        type="submit"
        class="btn btn-primary mr-0"
        :disabled="isProcessing"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import commentsAPI from '../apis/comments'
import { Toast } from '../utils/helpers'

export default {
  name: 'createComment',
  props: {
    restaurantId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      text: '',
      isProcessing: false
    }
  },
  methods: {
    // 新增評論的函式
    async handleSubmit() {
      try {
         // 當使用者未輸入以及輸入空白時無法新增comment
        if (!this.text.trim()) {
          Toast.fire({
            icon: 'warning',
            title: '您尚未填寫任何評論'
          })
          return
        }

        // 當進入傳送評論資料時，將submit按鈕disabled
        this.isProcessing = true

        // 透過API新增評論的函式
        const { data } = await commentsAPI.create({
          restaurantId: this.restaurantId,
          text: this.text
        })
        
        // API新增comment成功之後，將commentID/restaurantId/text傳遞到父元件
        this.$emit('after-create-comment', {
          commentId: data.commentId,
          restaurantId: this.restaurantId,
          text: this.text
        })

        // 傳送成功之後，將submit按鈕解除disabled
        this.isProcessing = false

        // 將表單內容清空
        this.text = ''
      } catch(error) {
        console.log('error', error)

        // 傳送失敗時，將submit按鈕解除disabled
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法新增評論，請稍後再試'
        })
      }
    }
  }
}
</script>