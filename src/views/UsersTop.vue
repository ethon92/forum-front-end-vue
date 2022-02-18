<template>
  <div class="container py-5">
    <!-- 共用導覽列 -->
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <!-- UsersTop的Card -->
      <h1 class="mt-5">
        美食達人
      </h1>
      <hr>

      <div class="row text-center">
        <div class="col-3" v-for="user in users" :key="user.id">
          <a href="#">
            <img
              :src="user.image | emptyImage"
              width="140px"
              height="140px"
            >
          </a>
          <h2>User</h2>
          <span class="badge badge-secondary">追蹤人數： {{ user.followerCount }}</span>
          <p class="mt-3">
            <button
              v-if="user.isFollowed"
              @click.prevent.stop="deleteFollowing(user.id)"
              type="button"
              class="btn btn-danger"
            >
              取消追蹤
            </button>
            <button
              v-else
              @click.prevent.stop="addFollowing(user.id)"
              type="button"
              class="btn btn-primary"
            >
              追蹤
            </button>
          </p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
// 載入NavTabs component
import NavTabs from '../components/NavTabs.vue'
// 從mixins載入emptyImageFilter
import { emptyImageFilter } from '../utils/mixins'
import usersAPI from '../apis/users'
import { Toast } from '../utils/helpers'
import Spinner from './../components/Spinner'

export default {
  name: 'UsersTop',
  mixins: [emptyImageFilter],
  components: {
    NavTabs,
    Spinner
  },
  data() {
    return {
      // 建立還未向API索取資料前的users
      users: [],
      isLoading: true
    }
  },
  created() {
    this.fetchTopUsers()
  },
  methods: {
    // 向伺服器取得美食達人的函式
    async fetchTopUsers() {
      try {
        const { data } = await usersAPI.getTopUsers()

        // 將data中users的資料放入vue的users中
        this.users = data.users.map( user => {
          return {
            ...user,
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
            followerCount: user.FollowerCount,
            isFollowed: user.isFollowed
          }
        })
        this.isLoading = false
      } catch(error) {
        console.log('error', error)
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得美食達人，請稍後再試'
        })
      }
    },
    // 加入追蹤函式
    async addFollowing(userId) {
      try {
        // 將data解構賦值取出
        const { data } = await usersAPI.addFollowing({ userId })

        // 當data的狀態不是success時，顯示錯誤在dev tool中
        if (data.status !== 'success') {
          throw new Error('data.message')
        }

        // 將所有users取出並當userId相同時，追蹤人數加一/追蹤狀態轉成true
        this.users = this.users.map(user => {
          if (user.id !== userId) {
            return user
          } else {
            return {
              ...user,
              followerCount: user.followerCount + 1,
              isFollowed: true
            }
          }
        })
      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法加入追蹤，請稍後再試'
        })
      }
    },
    // 取消追蹤函式
    async deleteFollowing(userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({ userId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        // 將所有users取出並當userId相同時，追蹤人數減一/追蹤狀態轉成false
        this.users = this.users.map(user => {
          if (user.id !== userId) {
            return user
          } else {
            return {
              ...user,
              followerCount: user.followerCount - 1,
              isFollowed: false
            }
          }
        })
      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法取消追蹤，請稍後再試'
        })
      }
    }
  }
}
</script>