// 載入apiHelper
import { apiHelper } from "../utils/helpers";

export default {
  // 建立signin函式並放入參數
  signIn({ email, password }) {
    // 回傳從API抓取的promise結果
    return apiHelper.post('/signin', { email, password })
  },
  signUp(data) {
    return apiHelper.post('/signup', {
      ...data
    })
  },
}