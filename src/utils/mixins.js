// 載入momonet
import moment from 'moment'

// 利用export引出
export const fromNowFilter = {
  filters: {
    fromNow(datetime) {
      // 利用moment中的fromNow函式回傳距離現在多久的時間，如果沒有時間則回傳'-'
      return datetime ? moment(datetime).fromNow() : '-'
    }
  }
}