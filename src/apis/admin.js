// 載入apiHelper
import { apiHelper } from './../utils/helpers'

export default {
  // 與categories相關的函式
  categories: {
    // 取得餐廳類別的函式
    get() {
      return apiHelper.get('/admin/categories')
    },
    // 新增餐廳類別的函式
    create(categoryData) {
      return apiHelper.post('/admin/categories', categoryData)
    },
    // 移除餐廳類別的函式
    delete(categoryId) {
      return apiHelper.delete(`/admin/categories/${categoryId}`)
    },
    // 修改餐廳類別的函式
    update({ categoryId, name }) {
      return apiHelper.put(`/admin/categories/${categoryId}`, { name })
    }
  },
  // 與restaurants相關的函式
  restaurants: {
    // 取得所有餐廳的函式
    get() {
      return apiHelper.get('/admin/restaurants')
    },
    // 取得餐廳詳細資料的函式
    getDetail({ restaurantId }) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`)
    },
    // 新增餐廳的函式
    create({ formData }) {
      return apiHelper.post('/admin/restaurants', formData)
    },
    // 更新餐廳資料的函式
    update({ restaurantId, formData }) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData)
    },
    // 移除餐廳的函式
    delete({ restaurantId }) {
      return apiHelper.delete(`/admin/restaurants/${restaurantId}`)
    },
  },
  users: {
    get() {
      return apiHelper.get('/admin/users')
    },
    update({ userId, isAdmin }) {
      return apiHelper.put(`/admin/users/${userId}`, { isAdmin })
    }
  }
}