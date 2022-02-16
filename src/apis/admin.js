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
    }
  },
  // 與restaurants相關的函式
  restaurants: {
    // 新增餐廳的函式
    create({ formData }) {
      return apiHelper.post('/admin/restaurants', formData, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    // 取得所有餐廳的函式
    get() {
      return apiHelper.get('/admin/restaurants', {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    // 移除餐廳的函式
    delete({ restaurantId }) {
      return apiHelper.delete(`/admin/restaurants/${restaurantId}`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    }
  }
}