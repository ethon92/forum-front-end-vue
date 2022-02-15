// 載入apiHelper
import { apiHelper } from "../utils/helpers";

// 將token從localStorage中取出
const getToken = () => localStorage.getItem('token')

export default {
  // 向伺服器取得餐廳資料的函式
  getRestaurants({ page, categoryId }) {
    // 利用URLSearchParams建構子，建立出page跟categoryId的queryString
    const searchParams = new URLSearchParams({ page, categoryId })

    // 回傳伺服器回傳結果
    return apiHelper.get(`/restaurants?${searchParams.toString()}`, {
      // 將token按照JWT規範以Bearer類別放在header屬性中
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getRestaurantFeeds() {
    return apiHelper.get('/restaurants/feeds', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getTopRestaurants() {
    return apiHelper.get('/restaurants/top', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}