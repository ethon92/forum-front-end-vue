<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">
          Sign In
        </h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="username"
          required
          autofocus
        >
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="current-password"
          required
        >
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        :disabled="isProcessing"
        type="submit"
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <!-- 因為只是需要透過vue渲染不同組件，所以要將連結改成router-link，除非是要連結到外部網路 -->
          <router-link to="/signup">Sign Up</router-link>  
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">
        &copy; 2017-2018
      </p>
    </form>
  </div>
</template>

<script>
// 載入authorizationAPI
import authorizationAPI from '../apis/authorization'
import { Toast } from '../utils/helpers'

export default {
  // data要是函式的回傳值，vue才可進行控制
  data() {
    return {
      email: "",
      password: "",
      isProcessing: false
    }
  },
  methods: {
    async handleSubmit() {
      try {
        // 當使用者沒有輸入email和password時，顯示的訊息
        if( !this.email || !this.password ) {
          Toast.fire({
            icon: 'warning',
            title: '請輸入 email 和 password'
          })
          return
        }

        // 當使用者點擊送出之後，無法再次點擊，直到伺服器回傳結果
        // 即可避免因為使用者同時間點擊多次所導致的錯誤訊息
        this.isProcessing = true

        // 呼叫signin函式向後端API發送驗證使用者請求
        const response = await authorizationAPI.signIn({
          email: this.email,
          password: this.password
        })

        const { data } = response
        console.log(data)
        // 當狀態不是success時，要丟出錯誤
        if( data.status !== 'success') {
          throw new Error(data.message)
        }

        // 利用vuex mutations中的setCurrentUser方法
        // 將登入的使用者資料放入vuex state中的currentUser
        this.$store.commit('setCurrentUser', data.user)

        // 如果驗證成功，將token儲存至localStorage中
        localStorage.setItem('token', data.token)

        // 將網頁轉至餐廳首頁
        this.$router.push('/restaurants')
      } catch(error) {
        // 將密碼欄位清空
        this.password = ''

        // 由於登入失敗，將送出按鈕轉回可送出的狀態
        this.isProcessing = false

        // 利用Toast顯示錯誤提示
        Toast.fire({
          icon: 'warning',
          title: '請確認您輸入了正確的帳號密碼'
        })

        // 顯示錯誤訊息
        console.log('Error', error)
      }
    }
  }
}
</script>