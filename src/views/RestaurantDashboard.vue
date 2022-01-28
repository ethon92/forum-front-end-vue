<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{ restaurant.commentsLength }} </li>
      <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
    </ul>

    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >
      回上一頁
    </button>
  </div>
</template>

<script>
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
        "updatedAt": "2022-01-27T04:56:13.000Z",
        "CategoryId": 1,
        "Category": {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2022-01-23T10:09:30.000Z",
            "updatedAt": "2022-01-23T10:09:30.000Z"
        },
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
    }
}

export default {
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        commentsLength: 0,
        viewCounts: 0,
      }
    }
  },
  created() {
    this.fetchDashboardData()
  },
  methods: {
    fetchDashboardData() {
      // TODO: 向API索取restaurant dashboard資料

      const { restaurant } = dummyData
      const { id, name, Category, Comments, viewCounts } = restaurant

      this.restaurant = {
        id,
        name,
        categoryName: Category.name,
        commentsLength: Comments.length,
        viewCounts
      }
    }
  }
}
</script>