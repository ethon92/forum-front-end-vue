<template>
  <div id="restaurant-forum">
    <router-view/>
  </div>
</template>

<script>
// 載入bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// 載入bootstrap javascript，由於在bootstrap的package.json中的main，
// 已經寫好直接載入bootstrap時要執行哪一個程式，所以可以直接載入即可
import 'bootstrap'

export default {
  name: 'App'
}
</script>