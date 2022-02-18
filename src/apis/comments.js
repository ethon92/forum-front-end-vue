// 載入apiHelper
import { apiHelper } from "../utils/helpers";

export default {
  create({ restaurandId, text }) {
    return apiHelper.post('/comments', {
      restaurandId,
      text
    })
  },
  delete({ commentId }) {
    return apiHelper.delete(`/comments/${commentId}`)
  }
}