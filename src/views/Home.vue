<template>
  <div>
    <Banner/>
    <CategorySlider/>
    <MainSlider/>
    <BlogSlider/>
    <FollowSlider/>
    <BannerNew/>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue"
import CategorySlider from '../components/CategorySlider.vue'
import MainSlider from '../components/MainSlider.vue'
import BlogSlider from '../components/BlogSlider.vue'
import FollowSlider from '../components/FollowSlider.vue'
import BannerNew from "../components/BannerNew.vue"
  export default {

    components: {
      Banner,
      CategorySlider,
      MainSlider,
      BlogSlider,
      FollowSlider,
      BannerNew
    }
  }
</script>

<style lang="scss" scoped>

</style>