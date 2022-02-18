<template>
  <div id="restaurant-forum">
    <Navbar />
    <!-- 調整Navbar與下方內容的距離與背景顏色 -->
    <main class="mt-5 bg-white">
      <router-view/>
    </main>
  </div>
</template>

<script>
// 載入bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// 載入bootstrap javascript，由於在bootstrap的package.json中的main，
// 已經寫好直接載入bootstrap時要執行哪一個程式，所以可以直接載入即可
import 'bootstrap'
// 載入Navbar元件
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style scoped>
  main {
    margin-top: 65px !important;
  }
</style>