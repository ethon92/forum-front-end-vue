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
      <!-- 載入人物卡片 -->
      <UsersTopCard  v-for="user in users" :key="user.id" :initial-user="user"/>
     </div>
  </div>
</template>

<script>
// 載入NavTabs component
import NavTabs from '../components/NavTabs.vue'
import UsersTopCard from '../components/UsersTopCard.vue'

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
    NavTabs,
    UsersTopCard
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
    }
  }
}
</script>