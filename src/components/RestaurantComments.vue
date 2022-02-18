<template>
  <div>
    <h2 class="my-4">
      所有評論：
    </h2>

    <div v-for="comment in restaurantComments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button
          v-if="currentUser.isAdmin"
          @click.prevent.stop="handleDeleteButtonClick(comment.id)"
          type="button"
          class="btn btn-danger float-right"
        >
          Delete
        </button>
        <h3>
          <a href="#">
           {{ comment.User.name }}
          </a>
        </h3>
        <p>{{ comment.text }}</p>
        <footer class="blockquote-footer">
          {{ comment.createdAt | fromNow }}
        </footer>
      </blockquote>
      <hr>
    </div>
  </div>
</template>

<script>
// 載入mixins
import { fromNowFilter } from '../utils/mixins'
import commentsAPI from './../apis/comments'
import { Toast } from './../utils/helpers'
import { mapState } from 'vuex'

export default {
  mixins: [fromNowFilter],
  props: {
    restaurantComments: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    // 刪除評論的函式
    async handleDeleteButtonClick(commentId) {    
      try {
        // 透過API刪除評論的函式
        const { data } = await commentsAPI.delete({ commentId })

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        // 利用'$emit'將事件從子元件傳遞到父元件
        this.$emit('after-delete-comment', commentId)

        // 當移除評論成功時的訊息
        Toast.fire({
          icon: 'success',
          title: '移除評論成功'
        })
      } catch(error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法移除餐廳評論，請稍後再試'
        })
      }
    }
  }
}
</script>

<style scoped>
h2.my-4 {
  margin-bottom: 1rem !important;
  font-size: 18px;
}

h3 {
  margin-bottom: 3px;
  line-height: 1.3;
}

.blockquote-footer {
  font-size: 12.5px;
}
</style>