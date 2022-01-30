<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <router-link
      class="navbar-brand"
      to="/"
    >
      餐廳評論網
    </router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div
      id="navbarSupportedContent" 
      class="navbar-collapse collapse"
    >
      <div class="ml-auto d-flex align-items-center">
        <!-- 當使用者是管理員時才需要顯示 -->
        <router-link
             v-if="currentUser.isAdmin"
             to="/admin/restaurants" 
             class="text-white mr-3"
        >
         管理員後台
       </router-link>
       <!-- 如果是使用者才需要顯示的部份 -->
        <template v-if="isAuthenticated">
          <!-- is user is login -->
          <router-link
            to="#" 
            class="text-white mr-3"
          > 
          {{ currentUser.name || '使用者' }} 您好
        </router-link>
        <button
          type="button" 
          class="btn btn-sm btn-outline-success my-2 my-sm-0"
          >
          登出
          </button>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
  // 模擬API的資料
  const dummyUser = {
    currentUser: {
      id: 1,
      name: '管理者',
      email: 'root@example.com',
      image: 'https://i.pravatar.cc/300',
      isAdmin: true
    },
    isAuthenticated: true
  }

  export default {
    // 以下為預設值並回傳使用者的資料
    data() {
      return {
        currentUser: {
          id: -1,
          name: '',
          email: '',
          image: '',
          isAdmin: false
        },
        isAuthenticated: false
      }
    },
    // 向API抓取的資料
    created() {
      this.fetchUser()
    },
    methods: {
      // 抓取資料的方法並將模擬資料代入
      fetchUser() {
        this.currentUser = {
          ...this.currentUser,
          ...dummyUser.currentUser
        }
        this.isAuthenticated = dummyUser.isAuthenticated
      }
    }
  }
</script>
