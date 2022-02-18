// 載入apiHelper
import { apiHelper } from "../utils/helpers";

export default {
  // 取得特定id的餐廳資料函式
  getRestaurant({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`)
  },
  // 向伺服器取得餐廳資料的函式
  getRestaurants({ page, categoryId }) {
    // 利用URLSearchParams建構子，建立出page跟categoryId的queryString
    const searchParams = new URLSearchParams({ page, categoryId })

    // 回傳伺服器回傳結果
    return apiHelper.get(`/restaurants?${searchParams.toString()}`)
  },
  getRestaurantFeeds() {
    return apiHelper.get('/restaurants/feeds')
  },
  getTopRestaurants() {
    return apiHelper.get('/restaurants/top')
  }
}