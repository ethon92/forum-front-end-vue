// 載入apiHelper
import { apiHelper } from './../utils/helpers'
// 載入token
const getToken = () => localStorage.getItem('token')

export default {
  // 與categories相關的函式
  categories: {
    // 取得餐廳類別的函式
    get() {
      return apiHelper.get('/admin/categories', {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    // 新增餐廳類別的函式
    create(categoryData) {
      return apiHelper.post('/admin/categories', categoryData, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    // 移除餐廳類別的函式
    delete(categoryId) {
      return apiHelper.delete(`/admin/categories/${categoryId}`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    // 修改餐廳類別的函式
    update({ categoryId, name }) {
      return apiHelper.put(`/admin/categories/${categoryId}`, { name }, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    }
  },
  // 與restaurants相關的函式
  restaurants: {
    // 取得所有餐廳的函式
    get() {
      return apiHelper.get('/admin/restaurants', {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    // 取得餐廳詳細資料的函式
    getDetail({ restaurantId }) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    // 新增餐廳的函式
    create({ formData }) {
      return apiHelper.post('/admin/restaurants', formData, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    // 更新餐廳資料的函式
    update({ restaurantId, formData }) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    // 移除餐廳的函式
    delete({ restaurantId }) {
      return apiHelper.delete(`/admin/restaurants/${restaurantId}`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
  },
  users: {
    get() {
      return apiHelper.get('/admin/users', {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    update({ userId, isAdmin }) {
      return apiHelper.put(`/admin/users/${userId}`, { isAdmin }, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    }
  }
}