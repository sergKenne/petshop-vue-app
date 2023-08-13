<template>
  <swiper
    class="banner"
    :slides-per-view="1"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>
      <div class="banner__item banner__item--1">
        Slide 1
        <Button class="banner__btn">Solde</Button>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="banner__item banner__item--2">
        Slide 2
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="banner__item banner__item--3">
        Slide 3
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
  import Button from "../components/Button.vue"

  // Import Swiper styles
  import 'swiper/css';

export default {
    components: {
      Swiper,
      SwiperSlide,
      Button
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
  };
</script>

<style lang="scss" scoped>
  .banner {
    //border: 2px solid red;
    &__item {
      height: 420px;
      &--1 {
        background: url(../../public/img/slider-1-slide-1-background.webp) no-repeat center/cover;
      }
      &--2 {
        background: url(../../public/img/slider-1-slide-2-background.webp) no-repeat center/cover;
      }
      &--3 {
        background: url(../../public/img/slider-1-slide-3-background.webp) no-repeat center/cover;
      }
    }
    &__btn {
      width: 158px;
      height: 48px;
      line-height: 48px;
      
    }
  }
</style>