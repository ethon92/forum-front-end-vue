<template>
  <div class="container py-5">
    <Spinner v-if="isLoading" />
    <div v-else class="row">
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
import adminAPI from '../apis/admin'
import { Toast } from '../utils/helpers'
import Spinner from '../components/Spinner.vue'

export default {
  name: 'AdminRestaurant',
  mixins: [emptyImageFilter],
  components: {
    Spinner
  },
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
      },
      isLoading: true
    }
  },
  // created() {
  //   this.fetchAdminRestaurant()
  // },
  mounted () {
    const { id: restaurantId } = this.$route.params
    this.fetchAdminRestaurant(restaurantId)
  },
  beforeRouteUpdate(to, next) {
    const { id } = to.params
    this.fetchAdminRestaurant(id)
    // console.log(to)
    next()
  },
  methods: {
    async fetchAdminRestaurant(restaurantId) {
      this.isLoading = true
      try {
        const { data } = await adminAPI.restaurants.getDetail({ restaurantId })
        
        const { 
          id, 
          name, 
          tel, 
          address, 
          opening_hours, 
          description, 
          image, 
          Category 
        } = data.restaurant

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
        this.isLoading = false
      } catch(error) {
        this.isLoading = false
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    }
  }
}
</script>