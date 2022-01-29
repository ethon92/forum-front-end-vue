<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
          <img :src="userProfile.image" width="300px" height="300px">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ userProfile.name }}</h5>
          <p class="card-text">
            {{ userProfile.email }}
          </p>
          <ul class="list-unstyled list-inline">
            <li><strong>{{ userProfile.commentedRestaurantsCount }}</strong> 已評論餐廳</li>
            <li><strong>{{ userProfile.favoritedRestaurantsCount }}</strong> 收藏的餐廳</li>
            <li><strong>{{ userProfile.followings }}</strong> followings (追蹤者)</li>
            <li><strong>{{ userProfile.followers }}</strong> followers (追隨者)</li>
          </ul>
          <button v-if="userProfile.user.isAuthenticated" type="submit" class="btn btn-success">Edit</button>
          <template v-else>
            <button v-if="userProfile.isFollowed" @click="switchFollowedValue(false)" type="submit" class="btn btn-danger">取消追蹤</button>
            <button v-else type="submit" @click="switchFollowedValue(true)" class="btn btn-primary">追蹤</button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialUserProfile: {
      type: Object,
      required: true
    }
  },
  data() {
    return  {
      userProfile: this.initialUserProfile
    }
  },
  methods: {
    switchFollowedValue(value) {
      return this.userProfile.isFollowed = value
    }
  }
}
</script>