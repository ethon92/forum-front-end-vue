<template>
 <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm  @after-submit="handleAfterSubmit"/>
  </div>
</template>

<script>
import AdminRestaurantForm from '../components/AdminRestaurantForm.vue'

export default {
  name: 'AdminRestaurantNew',
  components: {
    AdminRestaurantForm
  },
  methods: {
    handleAfterSubmit(formData) {
      // TODO: 透過 API 將表單資料送到伺服器
      // 先用console.log檢查是否有將formData傳送出去
      for (let [name, value] of formData.entries()) {
        console.log(name + ': ' + value)
      }
    }
  }
}
</script>