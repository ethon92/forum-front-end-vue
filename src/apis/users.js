// 載入apiHelper
import { apiHelper } from "../utils/helpers";

export default {
  // 取得目前使用者的函式
  getCurrentUser() {
    return apiHelper.get(`/get_current_user`)
  },
  // 取得特定id的使用者完整資料
  get({ userId }) {
    apiHelper.get(`/users/${userId}`)
  },
  // 更新使用者資料的函式
  update({ userId, formData }) {
    return apiHelper.put(`/users/${userId}`, formData)
  },
  addFavorite({ restaurantId }) {
    // 因為使用POST時，通常會要將資料傳送至伺服器，所以連接在網址後方第一個參數會是data(要上傳的資料)
    // data之後才會是config
    return apiHelper.post(`/favorite/${restaurantId}`, null)
  },
  deleteFavorite({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`)
  },
  addLike({ restaurantId }) {
    return apiHelper.post(`/like/${restaurantId}`, null)
  },
  deleteLike({ restaurantId }) {
    return apiHelper.delete(`/like/${restaurantId}`)
  },
  addFollowing({ userId }) {
    return apiHelper.post(`/following/${userId}`, null)
  },
  deleteFollowing({ userId }) {
    return apiHelper.delete(`/following/${userId}`)
  },
  getTopUsers() {
    return apiHelper.get('users/top')
  }
}