<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">
          Sign Up
        </h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="name">Name</label>
        <input
          id="name"
          name="name"
          v-model="name"
          type="text"
          class="form-control"
          placeholder="name"
          autocomplete="username"
          required
          autofocus
        >
      </div>

      <div class="form-label-group mb-2">
        <label for="email">Email</label>
        <input
          id="email"
          name="email"
          v-model="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="email"
          required
        >
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          name="password"
          v-model="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          required
        >
      </div>

      <div class="form-label-group mb-3">
        <label for="password-check">Password Check</label>
        <input
          id="password-check"
          name="passwordCheck"
          v-model="passwordCheck"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          required
        >
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signin">
            Sign In
          </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">
        &copy; 2017-2018
      </p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from '../apis/authorization'
import { Toast } from '../utils/helpers'

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      passwordCheck: ""
    }
  },
  methods: {
    async handleSubmit() {
      try {
        // 當未填姓名/email/密碼/確定密碼時，無法註冊
        // 並且顯示提示訊息
        if (
          !this.name ||
          !this.email ||
          !this.password ||
          !this.passwordCheck
        ) {
          Toast.fire({
            icon: 'warning',
            title: '請確認已填寫所有欄位'
          })
          return
        }

        // 當兩次密碼不相同時，顯示提示訊息
        if (this.password !== this.passwordCheck) {
          Toast.fire({
            icon: 'warning',
            title: '兩次輸入的密碼不同'
          })
          this.passwordCheck = ''
          return
        }

        // 向signUp的API註冊帳號
        const { data } = await authorizationAPI.signUp({
          name: this.name,
          email: this.email,
          password: this.password,
          passwordCheck: this.passwordCheck
        })

        // 當回傳的狀態是error時，顯示錯誤訊息
        if (data.status === 'error') {
          throw new Error(data.message)
        }

        // 顯示註冊成功時的訊息
        Toast.fire({
          icon: 'success',
          title: '註冊成功'
        })

        // 將網址轉址到登入頁面
        this.$router.push({ name: 'sign-in'})
      } catch(error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法註冊，請稍後再試'
        })
      }
    }
  }
}
</script>