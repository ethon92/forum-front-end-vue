// 將axios載入
import axios from 'axios'
// 將sweetAlert2載入
import Swal from 'sweetalert2'

const baseURL = 'http://localhost:3000/api'

// 建立axios物件
const axiosInstance = axios.create({
  baseURL
})

// 利用interceptors在每次發送request時，加上token
axiosInstance.interceptors.request.use(
  config => {
    // 從 localStorage 將 token 取出
    const token = localStorage.getItem('token')

    // 如果 token 存在的話，則帶入到 headers 當中
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
  },
  err => Promise.reject(err)
)

// 建立axios instance
export const apiHelper = axiosInstance

// 定義sweetAlert的樣式設定
export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});