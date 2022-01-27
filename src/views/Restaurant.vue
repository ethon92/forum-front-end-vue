<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant"/>
    <hr>
    <!-- 餐廳評論 RestaurantComments -->
    <!-- 新增評論 CreateComment -->
  </div>
</template>

<script>
import RestaurantDetail from '../components/RestaurantDetail.vue'

// 模擬API的資料
const dummyData = {
    "restaurant": {
        "id": 1,
        "name": "Woodrow Schneider",
        "tel": "1-333-791-8634 x99461",
        "address": "2125 Tyrese Unions",
        "opening_hours": "08:00",
        "description": "Aspernatur labore ducimus et corporis quaerat rerum repellendus vitae. Id tempore veniam nemo eius. Repellendus minus debitis laboriosam repellat. Ea ipsam quod ducimus autem.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=23.008334423548217",
        "viewCounts": 1,
        "createdAt": "2022-01-23T10:09:30.000Z",
        "updatedAt": "2022-01-27T04:56:13.402Z",
        "CategoryId": 1,
        "Category": {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z"
        },
        "FavoritedUsers": [],
        "LikedUsers": [],
        "Comments": [
            {
                "id": 101,
                "text": "Est esse ut aut.",
                "UserId": 2,
                "RestaurantId": 1,
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$qjW2eJJ5XZSlDB7NCbjur.m6/vbT3SSPoc8L837FpwuswCMcHiTBS",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-01-23T10:09:30.000Z",
                    "updatedAt": "2022-01-23T10:09:30.000Z"
                }
            },
            {
                "id": 1,
                "text": "Facere reiciendis commodi eligendi.",
                "UserId": 3,
                "RestaurantId": 1,
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$sUV3bR9SnXW8KIPpMVFQG.cwCvmS.HJ/Pf//MHGl7RDh2tVgby3tW",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-01-23T10:09:30.000Z",
                    "updatedAt": "2022-01-23T10:09:30.000Z"
                }
            },
            {
                "id": 51,
                "text": "Possimus nesciunt quo est consequuntur.",
                "UserId": 3,
                "RestaurantId": 1,
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$sUV3bR9SnXW8KIPpMVFQG.cwCvmS.HJ/Pf//MHGl7RDh2tVgby3tW",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-01-23T10:09:30.000Z",
                    "updatedAt": "2022-01-23T10:09:30.000Z"
                }
            }
        ]
    },
    "isFavorited": false,
    "isLiked": false
}

export default {
  name: "Restaurant",
  components: {
    RestaurantDetail,
  },
  // 建立restaurant資料
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false
      },
      restaurantComments: []
    }
  },
  created() {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    // 向API索取資料的函式
    fetchRestaurant(restaurantId) {
      console.log('fetchRestaurant id: ', restaurantId)
      const { restaurant, isFavorited, isLiked } = dummyData
      const { id, name, Category, image, opening_hours, tel, address, description, Comments } = restaurant

      this.restaurant = {
        id,
        name,
        categoryName: Category.name ? Category.name : '未分類',
        image,
        openingHours: opening_hours,
        tel,
        address,
        description,
        isFavorited,
        isLiked
      }

      this.restaurantComments = Comments
    }
  }
}
</script>