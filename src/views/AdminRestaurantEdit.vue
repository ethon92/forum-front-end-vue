<template>
  <div class="container py-5">
    <AdminRestaurantForm :initial-restaurant="restaurant" @after-submit="handleAfterSubmit" />
  </div>
</template>

<script>
import AdminRestaurantForm from '../components/AdminRestaurantForm.vue'

const dummyData = {
    "restaurant": {
        "id": 2,
        "name": "Major Bechtelar",
        "tel": "1-966-146-5470 x92471",
        "address": "746 Scot Drive",
        "opening_hours": "08:00",
        "description": "odio",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=32.49389388411667",
        "viewCounts": 0,
        "createdAt": "2022-01-23T10:09:30.000Z",
        "updatedAt": "2022-01-23T10:09:30.000Z",
        "CategoryId": 4,
        "Category": {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z"
        }
    }
}

export default {
  name: 'AdminRestaurantEdit',
  components: {
    AdminRestaurantForm
  },
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryId: '',
        tel: '',
        address: '',
        description: '',
        image: '',
        openingHours: ''
      }
    }
  },
  created() {
    const { id } = this.$route.params
    this.fetchRestaurant(id)
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log('fetchRestaurant id:', restaurantId)
      const { restaurant } = dummyData
      const { id, name, CategoryId: categoryId, tel, address, description, image, opening_hours:openingHours } = restaurant
      this.restaurant = {
        ...this.restaurant,
        id,
        name,
        categoryId,
        tel,
        address,
        description,
        image,
        openingHours
      }
    },
    handleAfterSubmit (formData) {
      // TODO: 透過 API 將表單資料送到伺服器
      for (let [name, value] of formData.entries()) {
        console.log(name + ': ' + value)
      }
    }
  }
}
</script>