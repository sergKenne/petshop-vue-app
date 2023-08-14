<template>
  <div>
    <Banner/>
    <CategorySlider/>
    <BlogSlider/>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue"
import CategorySlider from '../components/CategorySlider.vue'
import BlogSlider from '../components/BlogSlider.vue'
  export default {

    components: {
      Banner,
      CategorySlider,
      BlogSlider
    }
  }
</script>

<style lang="scss" scoped>

</style>