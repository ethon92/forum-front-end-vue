// 載入apiHelper
import { apiHelper } from "../utils/helpers";

// 將token從localStorage中取出
const getToken = () => localStorage.getItem('token')

export default {
  addFavorite({ restaurantId }) {
    // 因為使用POST時，通常會要將資料傳送至伺服器，所以連接在網址後方第一個參數會是data(要上傳的資料)
    // data之後才會是config
    return apiHelper.post(`/favorite/${restaurantId}`, null, {
      headers: { Authorization: `Bearer ${getToken()}`}
    })
  },
  deleteFavorite({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  addLike({ restaurantId }) {
    return apiHelper.post(`/like/${restaurantId}`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  deleteLike({ restaurantId }) {
    return apiHelper.delete(`/like/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}