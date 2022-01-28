<template>
  <div class="container py-5">
    <!-- 共用導覽列 -->
    <NavTabs />

    <!-- UsersTop的Card -->
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>

    <div class="row text-center">
      <div class="col-3" v-for="user in users" :key="user.id">
        <a href="#">
          <img
            :src="user.image"
            width="140px"
            height="140px"
          >
        </a>
        <h2>User</h2>
        <span class="badge badge-secondary">追蹤人數： {{ user.FollowerCount }}</span>
        <p class="mt-3">
          <button
            v-if="user.isFollowed"
            @click.prevent.stop="deleteFollow(user.id)"
            type="button"
            class="btn btn-danger"
          >
            取消追蹤
          </button>
          <button
            v-else
            @click.prevent.stop="addFollow(user.id)"
            type="button"
            class="btn btn-primary"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// 載入NavTabs component
import NavTabs from '../components/NavTabs.vue'

// 模擬向API索取之後的資料
const dummyData = {
    "users": [
        {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$JQvqoUJFVaBalCiinUSTs.2J36IkrUcLdwIopXkGtpPDCp51HM4/G",
            "isAdmin": true,
            "image": "https://randomuser.me/api/portraits/women/21.jpg",
            "createdAt": "2022-01-23T10:09:29.000Z",
            "updatedAt": "2022-01-23T10:09:29.000Z",
            "Followers": [],
            "FollowerCount": 456,
            "isFollowed": false
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$qjW2eJJ5XZSlDB7NCbjur.m6/vbT3SSPoc8L837FpwuswCMcHiTBS",
            "isAdmin": false,
            "image": "https://randomuser.me/api/portraits/women/28.jpg",
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "Followers": [],
            "FollowerCount": 345,
            "isFollowed": false
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$sUV3bR9SnXW8KIPpMVFQG.cwCvmS.HJ/Pf//MHGl7RDh2tVgby3tW",
            "isAdmin": false,
            "image": "https://randomuser.me/api/portraits/women/73.jpg",
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "Followers": [],
            "FollowerCount": 999,
            "isFollowed": false
        }
    ]
}

export default {
  name: 'UsersTop',
  components: {
    NavTabs
  },
  data() {
    return {
      // 建立還未向API索取資料前的users
      users: []
    }
  },
  created() {
    this.fetchUser()
  },
  methods: {
    // 向API索取資料的函式
    fetchUser() {
      this.users = dummyData.users
    },
    // 加入追蹤函式
    addFollow(id) {
      this.users.filter( user => user.id === id )[0].isFollowed = true
    },
    // 退出追蹤函式
    deleteFollow(id) {
      this.users.filter( user => user.id === id )[0].isFollowed = false
    }
  }
}
</script>