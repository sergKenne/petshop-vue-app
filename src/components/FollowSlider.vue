<template>
  <div class="follow-slider">
    <div class="container">
      <h3 class="follow-slider__title">Follow us on instagram</h3>
      <swiper
        class="follow-slider__content"
        :slides-per-view="7"
        :space-between="10"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide>
          <div class="follow-slider__item">
            <img src="img/insta1.webp" alt="" class="follow-slider__img">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="follow-slider__item">
            <img src="img/insta1.webp" alt="" class="follow-slider__img">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="follow-slider__item">
            <img src="img/insta1.webp" alt="" class="follow-slider__img">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="follow-slider__item">
            <img src="img/insta1.webp" alt="" class="follow-slider__img">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="follow-slider__item">
            <img src="img/insta1.webp" alt="" class="follow-slider__img">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="follow-slider__item">
            <img src="img/insta1.webp" alt="" class="follow-slider__img">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="follow-slider__item">
            <img src="img/insta1.webp" alt="" class="follow-slider__img">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="follow-slider__item">
            <img src="img/insta1.webp" alt="" class="follow-slider__img">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="follow-slider__item">
            <img src="img/insta1.webp" alt="" class="follow-slider__img">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="follow-slider__item">
            <img src="img/insta1.webp" alt="" class="follow-slider__img">
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="follow-slider__item">
            <img src="img/insta1.webp" alt="" class="follow-slider__img">
          </div>
        </swiper-slide>
      </Swiper> 
    </div>
  </div>
</template>
<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  // Import Swiper styles
  import 'swiper/css';

  export default {
    components: {
      Swiper,
      SwiperSlide,
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
  .follow-slider {
    //background-color: #f2f2f2;
    color: #08284a;
    padding-top: 76px;
    padding-bottom: 40px;
    margin-bottom: 20px;
    &__title {
      font-size: 30px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 50px;
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
    &__img {
      display: block;
      width: 100%;
    }
  }
</style>