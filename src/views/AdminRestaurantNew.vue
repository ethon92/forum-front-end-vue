<template>
 <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm  @after-submit="handleAfterSubmit" :is-processing="isProcessing"/>
  </div>
</template>

<script>
import AdminRestaurantForm from '../components/AdminRestaurantForm.vue'
import { Toast } from '../utils/helpers'
import adminAPI from '../apis/admin'

export default {
  name: 'AdminRestaurantNew',
  components: {
    AdminRestaurantForm
  },
  data() {
    return {
      isProcessing: false
    }
  },
  methods: {
    // 新增餐廳的函式
    async handleAfterSubmit(formData) {
      try {
        // 當已經送出之後，將isProcessing狀態轉為true，達到disabled送出按鈕
        this.isProcessing = true

        const { data } = await adminAPI.restaurants.create({ formData })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        // 當完成送出並且成功新增餐廳之後，將會轉址到admin-restaurants
        this.$router.push({ name: 'admin-restaurants' })
      } catch(error) {
        console.log('error', error)
        // 當進入錯誤時，要將isProcessing轉回false
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法新增餐廳，請稍後再試'
        })
      }
    }
  }
}
</script>