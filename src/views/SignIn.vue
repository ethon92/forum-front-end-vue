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
export default {
  // data要是函式的回傳值，vue才可進行控制
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    handleSubmit() {
      // 將email/password轉成JSON的格式
      const data = JSON.stringify({
        email: this.email,
        password: this.password
      })

      console.log('data', data)
    }
  }
}
</script>