// 將axios載入
import axios from 'axios'
// 將sweetAlert2載入
import Swal from 'sweetalert2'

const baseURL = 'http://localhost:3000/api'

// 建立axios instance
export const apiHelper = axios.create({
  baseURL
})

// 定義sweetAlert的樣式設定
export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});