<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th
            scope="col"
            width="140"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">
            {{ user.id }}
          </th>
          <td>{{ user.email }}</td>
          <td v-if="user.isAdmin">admin</td>
          <td v-else>user</td>
          <td>
            <button
              v-if="user.isAdmin"
              v-show="user.id !== currentUser.id"
              @click.prevent.stop="toggleUserRole(user.id)"
              type="button"
              class="btn btn-link"
            >
              set as user
            </button>
            <button
              v-else
              @click.prevent.stop="toggleUserRole(user.id)"
              type="button"
              class="btn btn-link"
            >
              set as admin
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "../components/AdminNav.vue";

const dummyData = {
    "users": [
        {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$JQvqoUJFVaBalCiinUSTs.2J36IkrUcLdwIopXkGtpPDCp51HM4/G",
            "isAdmin": true,
            "image": null,
            "createdAt": "2022-01-23T10:09:29.000Z",
            "updatedAt": "2022-01-23T10:09:29.000Z"
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$qjW2eJJ5XZSlDB7NCbjur.m6/vbT3SSPoc8L837FpwuswCMcHiTBS",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z"
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$sUV3bR9SnXW8KIPpMVFQG.cwCvmS.HJ/Pf//MHGl7RDh2tVgby3tW",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z"
        }
    ]
}

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
  name: 'AdminUsers',
  components: {
    AdminNav
  },
  data() {
    return {
      users: [],
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
  created() {
    this.fetchUsers()
  },
  methods: {
    fetchUsers() {
      // TODO: 向API抓取users的資料

      this.users = dummyData.users
      this.currentUser = dummyUser.currentUser
      this.isAuthenticated = dummyUser.isAuthenticated
    },
    toggleUserRole(userId) {
      this.users = this.users.map( user => {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin: !user.isAdmin
          }
        }

        return user
      })
    }
  }
}
</script>