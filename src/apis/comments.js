// 載入apiHelper
import { apiHelper } from "../utils/helpers";

// 將token從localStorage中取出
const getToken = () => localStorage.getItem('token')

export default {
  create({ restaurandId, text }) {
    return apiHelper.post('/comments', {
      restaurandId,
      text
    },{
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  delete({ commentId }) {
    return apiHelper.delete(`/comments/${commentId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}