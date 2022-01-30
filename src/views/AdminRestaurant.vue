<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-12">
        <h1>{{ restaurant.name }}</h1>
        <span class="badge badge-secondary mt-1 mb-3">
          {{ restaurant.categoryName }}
        </span>
      </div>
      <div class="col-md-4">
        <img
          class="img-responsive center-block"
          :src="restaurant.image | emptyImage"
          style="width: 250px;margin-bottom: 25px;"
        >
        <div class="well">
          <ul class="list-unstyled">
            <li>
              <strong>Opening Hour:</strong>
              {{ restaurant.openingHours }}
            </li>
            <li>
              <strong>Tel:</strong>
              {{ restaurant.tel }}
            </li>
            <li>
              <strong>Address:</strong>
              {{ restaurant.address }}
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-8">
        <p>{{ restaurant.description }}</p>
      </div>
    </div>
    <hr>
    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >回上一頁</button>
  </div>
</template>

<script>
// 從mixins載入emptyImageFilter
import { emptyImageFilter } from '../utils/mixins'

// 模擬向API抓取的資料
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
  name: 'AdminRestaurant',
  mixins: [emptyImageFilter],
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        tel: '',
        address: '',
        openingHours: '',
        description: '',
      }
    }
  },
  // created() {
  //   this.fetchAdminRestaurant()
  // },
  mounted () {
    const { id: restaurantId } = this.$route.params
    this.fetchAdminRestaurant(restaurantId)
  },
  methods: {
    fetchAdminRestaurant(restaurantId) {
      // TODO: 向API抓取餐廳資料

      const { restaurant } = dummyData
      const { id, name, tel, address, opening_hours, description, image, Category } = restaurant

      this.restaurant = {
        ...this.restaurant,
        id,
        name,
        tel,
        address,
        openingHours: opening_hours,
        description,
        image,
        categoryName: Category.name
      }

      console.log(restaurantId)
    }
  }
}
</script>