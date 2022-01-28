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
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
// 引入uuid製造原本從API取得的commentId
import { v4 as uuidv4 } from "uuid"

export default {
  props: {
    restaurantId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      text: "",
    }
  },
  methods: {
    handleSubmit() {
      // 當使用者未輸入以及輸入空白時無法新增comment
      if (!this.text.trim()) return
      // TODO: 向API傳遞新增comment的資料

      // API新增comment成功之後，將commentID/restaurantId/text傳遞到父元件
      this.$emit('after-create-comment', {
        commentId: uuidv4(), // 由於尚未串接API，所以使用uuid
        restaurantId: this.restaurantId,
        text: this.text
      })

      // 將表單內容清空
      this.text = ''
    }
  }
}
</script>