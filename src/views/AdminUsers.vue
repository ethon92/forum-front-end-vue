<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <Spinner v-if="isLoading" />
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
              @click.prevent.stop="toggleUserRole(user.id, user.isAdmin)"
              type="button"
              class="btn btn-link"
            >
              set as user
            </button>
            <button
              v-else
              @click.prevent.stop="toggleUserRole(user.id, user.isAdmin)"
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
import adminAPI from '../apis/admin'
import { Toast } from '../utils/helpers'
import { mapState } from 'vuex'
import Spinner from './../components/Spinner'

export default {
  name: 'AdminUsers',
  components: {
    AdminNav,
    Spinner
  },
  data() {
    return {
      users: [],
      isLoading: true
    }
  },
  created() {
    this.fetchUsers()
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    // 向伺服器抓取所有使用者的函式
    async fetchUsers() {
      try {
        const { data } = await adminAPI.users.get()
        this.users = data.users
        this.isLoading = false
      } catch(error) {
        this.isLoading = false
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法取得所有使用者，請稍後再試'
        })
      }
    },
    // 向伺服器改變使用者權限的函式
    async toggleUserRole(userId, isAdmin) {
      try {
        // 透過API改變使用者權限的函式
        const { data } = await adminAPI.users.update({ userId, isAdmin: (!isAdmin).toString()})

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.users = this.users.map( user => {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin: !user.isAdmin
          }
        }

        return user
      })

      } catch(error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法更新使用者權限，請稍後再試'
        })
      }
    }
  }
}
</script>