<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>
    <hr>

    <div
      v-for="restaurant in restaurants" :key="restaurant.id"
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img
              class="card-img"
              :src="restaurant.image | emptyImage"
            >
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              Mrs. Mckenzie Johnston
            </h5>
            <span class="badge badge-secondary">收藏數： {{ restaurant.FavoriteCount }}</span>
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              :to="{ name: 'restaurant', params: {id: restaurant.id}}"
              class="btn btn-primary mr-2"
            >Show</router-link>

            <button
              v-if="restaurant.isFavorited"
              @click.prevent.stop="deleteFavorite(restaurant.id)"
              type="button"
              class="btn btn-danger mr-2"
            >
              移除最愛
            </button>
            <button
              v-else
              @click.prevent.stop="addFavorite(restaurant.id)"
              type="button"
              class="btn btn-primary"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 載入NavTabs component
import NavTabs from '../components/NavTabs.vue'
// 從mixins載入emptyImageFilter
import { emptyImageFilter } from '../utils/mixins'

const dummyData = {
    "restaurants": [
        {
            "id": 50,
            "name": "Remington Abshire",
            "tel": "(785) 164-6045 x64688",
            "address": "8828 Goyette Extension",
            "opening_hours": "08:00",
            "description": "Minima dolores eaque earum ratione. Cum nemo archi",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=14.119813074760934",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 49,
            "name": "Miss Fabian Terry",
            "tel": "474-399-3435 x389",
            "address": "4875 Chanelle Skyway",
            "opening_hours": "08:00",
            "description": "Quia nihil voluptas voluptate adipisci.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=56.4503255498275",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 48,
            "name": "Ms. Christa Purdy",
            "tel": "(219) 536-0819",
            "address": "0762 Bruen Throughway",
            "opening_hours": "08:00",
            "description": "sed dolores ex",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=41.1523663347304",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 47,
            "name": "Savannah Braun DDS",
            "tel": "1-561-885-6048",
            "address": "48341 Aufderhar Locks",
            "opening_hours": "08:00",
            "description": "et voluptates occaecati",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=82.68209474940767",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 46,
            "name": "Abdullah Berge",
            "tel": "473.907.1761",
            "address": "342 Bailey Point",
            "opening_hours": "08:00",
            "description": "Veniam voluptatem et. Deserunt consequatur sint re",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=5.094317897788381",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 45,
            "name": "Leonardo Moore",
            "tel": "1-735-855-6741",
            "address": "211 Candice Hill",
            "opening_hours": "08:00",
            "description": "et",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=38.93828421622854",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 44,
            "name": "Verner Runolfsson",
            "tel": "313-712-3514 x022",
            "address": "074 Nelle Stream",
            "opening_hours": "08:00",
            "description": "Officiis natus modi consequatur non corporis quos ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=45.98537160535421",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 43,
            "name": "Mr. Lindsay Ryan",
            "tel": "190.723.5975 x14605",
            "address": "53220 Homenick Plaza",
            "opening_hours": "08:00",
            "description": "Ipsum consequatur non quia esse quam voluptatem pl",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=99.20164706190151",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 42,
            "name": "Mrs. Reanna McGlynn",
            "tel": "1-185-745-8197 x779",
            "address": "693 Willms Turnpike",
            "opening_hours": "08:00",
            "description": "consequatur quo quidem",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=82.51451645148428",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 41,
            "name": "Yoshiko Morissette",
            "tel": "(802) 350-1771",
            "address": "42757 Bernadine Ramp",
            "opening_hours": "08:00",
            "description": "Autem corporis libero magni mollitia totam ut quis",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=56.19779215201817",
            "viewCounts": 0,
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        }
    ]
}


export default {
  name: 'RestaurantsTop',
  mixins: [emptyImageFilter],
  components: {
    NavTabs,
    // RestaurantsTopCard
  },
  data() {
    return {
      // 建立還未向API索取資料之前的陣列
      restaurants: []
    }
  },
  created() {
    this.fetchRestaurantsTop()
  },
  methods: {
    fetchRestaurantsTop() {
      // TODO: 向API索取人氣餐廳資料

      this.restaurants = dummyData.restaurants
    },
    addFavorite(id) {
      this.restaurants.filter( restaurant => restaurant.id === id )[0].isFavorited = true
    },
    deleteFavorite(id) {
      this.restaurants.filter( restaurant => restaurant.id === id )[0].isFavorited = false
    }
  }
}
</script>