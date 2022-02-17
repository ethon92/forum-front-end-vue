<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>

    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant"/>
    <hr>

    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments :restaurant-comments="restaurantComments" @after-delete-comment="afterDeleteComment" />

    <!-- 新增評論 CreateComment -->
    <CreateComment :restaurant-id="restaurant.id" @after-create-comment="afterCreateComment" />
  </div>
</template>

<script>
import RestaurantDetail from '../components/RestaurantDetail.vue'
import RestaurantComments from '../components/RestaurantComments.vue'
import CreateComment from '../components/CreateComment.vue'
import restaurantAPI from '../apis/restaurants'
import { Toast } from '../utils/helpers'
import { mapState } from 'vuex'

export default {
  name: "Restaurant",
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment
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
      restaurantComments: [],
    }
  },
  created() {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  beforeRouteUpdate(to, next) {
    const { id: restaurantId } = to.params
    this.fetchRestaurant(restaurantId)
    next()
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    // 向伺服器索取餐廳詳細資料的函式
    async fetchRestaurant(restaurantId) {
      try {
        // 透過API取得餐廳詳細資料的函式
        const { data } = await restaurantAPI.getRestaurant({ restaurantId })

        // 將data以解構賦值取出
        const { restaurant, isFavorited, isLiked } = data
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
      } catch(error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    },
    afterDeleteComment(commentId) {
      // 利用filter刪除點擊到的comment
      this.restaurantComments = this.restaurantComments.filter( comment => comment.id !== commentId)
    },
    afterCreateComment(payload) {
      // 將資料解構賦值取出
      const { commentId, restaurantId, text } = payload

      // 再將資料放入restaurantComments陣列中
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        },
        text,
        createdAt: new Date()
      })
    }
  }
}
</script>