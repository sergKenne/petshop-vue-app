<template>
  <div class="category-slider">
    <div class="container">
      <h3 class="category-slider__title">Shop by categories</h3>
      <swiper
        class="category-slider__content"
        :slides-per-view="5"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide>
          <div class="category-slider__item">
            <img src="img/cat1.webp" alt="" class="category-slider__img">
            <p class="category-slider__desc">Dog</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="category-slider__item">
            <img src="img/cat1.webp" alt="" class="category-slider__img">
            <p class="category-slider__desc">Dog</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="category-slider__item">
            <img src="img/cat1.webp" alt="" class="category-slider__img">
            <p class="category-slider__desc">Dog</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="category-slider__item">
            <img src="img/cat1.webp" alt="" class="category-slider__img">
            <p class="category-slider__desc">Dog</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="category-slider__item">
            <img src="img/cat1.webp" alt="" class="category-slider__img">
            <p class="category-slider__desc">Dog</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="category-slider__item">
            <img src="img/cat1.webp" alt="" class="category-slider__img">
            <p class="category-slider__desc">Dog</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="category-slider__item">
            <img src="img/cat1.webp" alt="" class="category-slider__img">
            <p class="category-slider__desc">Dog</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="category-slider__item">
            <img src="img/cat1.webp" alt="" class="category-slider__img">
            <p class="category-slider__desc">Dog</p>
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
  .category-slider {
    background-color: #f2f2f2;
    color: #08284a;
    padding-top: 76px;
    padding-bottom: 40px;
    &__title {
      font-size: 20px;
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
  }
</style>