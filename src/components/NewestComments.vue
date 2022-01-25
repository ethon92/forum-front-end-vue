<template>
  <div class="card">
    <div class="card-header">
      最新評論
    </div>
    <div class="card-body">
      <div v-for="comment in comments" :key="comment.id">
        <h4>
          <a href="#">
           {{ comment.Restaurant.name }}
          </a>
        </h4>
        <p>{{ comment.text }}</p>by
        <a href="#">
          {{ comment.User.name }}
        </a>
        <!-- 利用filter將時間轉換成距離現在多久的時間 -->
        at {{ comment.createdAt | fromNow }}
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
      // 如果沒有時間則回傳'-'
      if(!datetime) {
        return '-'
      }

      // 利用moment中的fromNow函式回傳距離現在多久的時間
      return moment(datetime).fromNow()
    }
  },
  props: {
    comments: {
      type: Array,
      required: true
    }
  }
}
</script>