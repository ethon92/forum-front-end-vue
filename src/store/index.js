import Vue from 'vue'
import Vuex from 'vuex'
// 載入usersAPI
import usersAPI from './../apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
  // store中存放資料的地方
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false,
    token: ''
  },
  // 呼叫mutations中的方法要用commit
  // mutations是放變更state中資料的方法
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 將 API 取得的 currentUser 覆蓋掉 Vuex state 中的 currentUser
        ...currentUser
      }
      // 將使用者的登入狀態改為 true
      state.isAuthenticated = true
      
      // 將使用者驗證用的 token 儲存在 state 中
      state.token = localStorage.getItem('token')
    },
    // 登出使用者的函式
    revokeAuthentication(state) {
      // 將currentUser清空
      state.currentUser = {}

      // 將isAuthenticated轉為false
      state.isAuthenticated = false

      // 將localStorage中的token清除
      localStorage.removeItem('token')
    }
  },
  // 呼叫actions中的方法要用dispatch
  // actions是放拉取API資料的方法
  actions: {
    // 向伺服器取得currentUser的函式
    async fetchCurrentUser({ commit }) {
      try {
        // 透過API取得currentUser的函式
        const { data } = await usersAPI.getCurrentUser()
        
        // 利用解構賦值將data中的資料取出
        const { id, name, email, image, isAdmin } = data
        
        // 利用commit呼叫setCurrentUser
        commit('setCurrentUser', {
          id,
          name,
          email,
          image,
          isAdmin
        })
        
        // 如果有token時進行驗證
        return true
      } catch (error) {
        console.error(error.message)

        // 登入失敗時
        return false
      }
    }
  },
  modules: {
  }
})
