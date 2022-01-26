<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories"/>
    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.id" :initial-restaurant="restaurant"/>
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
  </div>
</template>

<script>
// 載入NavTabs component
import NavTabs from '../components/NavTabs.vue'
// 載入RestaurantCard component
import RestaurantCard from '../components/RestaurantCard.vue'
import RestaurantsNavPills from '../components/RestaurantsNavPills.vue'

const dummyData = {
    "restaurants": [
        {
            "id": 1,
            "name": "Woodrow Schneider",
            "tel": "1-333-791-8634 x99461",
            "address": "2125 Tyrese Unions",
            "opening_hours": "08:00",
            "description": "Aspernatur labore ducimus et corporis quaerat reru",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=23.008334423548217",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
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
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 3,
            "name": "Luna Parker",
            "tel": "985.431.7024",
            "address": "84611 Hartmann Island",
            "opening_hours": "08:00",
            "description": "Mollitia veniam alias tempore inventore vero labor",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=75.26687670207501",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 4,
            "name": "Jerry Stroman",
            "tel": "1-208-101-4010",
            "address": "507 Greta Corner",
            "opening_hours": "08:00",
            "description": "Velit exercitationem qui et excepturi laborum eum ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=44.66189950102881",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 5,
            "name": "Dameon Schaden V",
            "tel": "889.321.6625 x18716",
            "address": "28862 Shaylee Island",
            "opening_hours": "08:00",
            "description": "Aut in ea nostrum.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=41.57612115358316",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 6,
            "name": "Ramon Zieme",
            "tel": "267.344.9786 x249",
            "address": "49040 Einar Row",
            "opening_hours": "08:00",
            "description": "Magni libero et ab tempora omnis. Odio delectus ip",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=26.39866593182223",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 7,
            "name": "Delta Olson",
            "tel": "1-565-662-8165 x7992",
            "address": "72963 Bechtelar Extensions",
            "opening_hours": "08:00",
            "description": "quo",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=76.40228253834927",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 8,
            "name": "Arianna Hudson",
            "tel": "362-130-0355 x38939",
            "address": "40753 Astrid Glens",
            "opening_hours": "08:00",
            "description": "Sit possimus neque commodi ullam sint accusamus co",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=21.371200569081438",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 9,
            "name": "Bonnie Schimmel",
            "tel": "690-779-9261 x21884",
            "address": "46654 Orval Forest",
            "opening_hours": "08:00",
            "description": "Dolore maiores dolor ut laborum a et et.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=81.6081388778392",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 10,
            "name": "Carleton Swaniawski",
            "tel": "916.198.3948",
            "address": "96026 Pagac Pines",
            "opening_hours": "08:00",
            "description": "Deserunt sint nisi cumque in possimus minus quia. ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=6.741648075153517",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-01-23T10:09:30.000Z",
                "updatedAt": "2022-01-23T10:09:30.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        }
    ],
    "categories": [
        {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z"
        },
        {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z"
        },
        {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z"
        },
        {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z"
        },
        {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z"
        },
        {
            "id": 6,
            "name": "美式料理",
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z"
        },
        {
            "id": 7,
            "name": "複合式料理",
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z"
        }
    ],
    "categoryId": "",
    "page": 1,
    "totalPage": [
        1,
        2,
        3,
        4,
        5
    ],
    "prev": 1,
    "next": 2
}

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills
  },
  // 設定初始資料
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1
    }
  },
  created() {
    this.fetchRestaurants()
  },
  methods: {
    // 向API索取資料的函式
    fetchRestaurants() {
      const {restaurants, categories, categoryId, page, totalPage, prev, next} = dummyData
      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    }
  }
}
</script>