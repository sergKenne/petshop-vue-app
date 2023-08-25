<template>
  <div class="main-slider">
    <div class="container">
      <h3 class="main-slider__title">Fresh delivery</h3>
      <swiper
        class="follow-slider__content"
        :slides-per-view="5"
        :space-between="10"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide>
          <div class="main-slider__item">
            <Card/>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="main-slider__item">
            <Card/>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="main-slider__item">
            <Card/>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="main-slider__item">
            <Card/>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="main-slider__item">
            <Card/>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="main-slider__item">
            <Card/>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="main-slider__item">
            <Card/>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="main-slider__item">
            <Card/>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="main-slider__item">
            <Card/>
          </div>
        </swiper-slide>
      </Swiper> 
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
  import Card from "../components/Card.vue"
  // Import Swiper styles
  import 'swiper/css';

  export default {
    components: {
      Swiper,
      SwiperSlide,
      Card
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
  .main-slider {
    //background-color: #f2f2f2;
    padding-top: 76px;
    padding-bottom: 40px;
    margin-bottom: 20px;
    &__title {
      font-size: 14px;
      line-height: 1.8em;
      letter-spacing: 0;
      color: #08284a;
      font-size: 30px;
      font-weight: 700;
      text-align: left;
      margin-bottom: 50px;
      color: #08284a;
    }
    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      font-size: 16px;
      line-height: 24px;
      font-weight: 700;
    }
  }
</style>