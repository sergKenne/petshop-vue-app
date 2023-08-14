<template>
  <swiper
    class="banner"
    :slides-per-view="1"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>
      <div class="banner__item banner__item--1">
        <div class="container banner__item-content">
          <div class="banner__item-inner">
            <h2 class="banner__title">PGDog, dry food for your pet's family</h2>
            <div class="banner__nav">
              <div class="banner__nav-item">
                <svg class="banner__nav-icon"><use xlink:href="sprite.svg#cook"></use></svg>
                <span>Easy prepare</span>
              </div>
              <div class="banner__nav-item">
                <svg class="banner__nav-icon"><use xlink:href="sprite.svg#Layer_1"></use></svg>
                <span>100% Natural</span>
              </div>
              <div class="banner__nav-item">
                <svg class="banner__nav-icon"><use xlink:href="sprite.svg#strenger"></use></svg>
                <span>Strengthens immunity</span>
              </div>
            </div>
            <Button :bgColor="'#b62052'" :color="'#ffffff'" class="banner__btn">Shop now</Button>
          </div>
        </div>
        <img src="img/slider-1-1.webp" alt="" class="banner__img banner__img--11">
        <img src="img/slider-1-2.webp" alt="" class="banner__img banner__img--12">
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="banner__item banner__item--2">
        <div class="container banner__item-content">
          <div class="banner__item-inner banner__item-inner--left">
            <h2 class="banner__title banner__title--left">Premium dry food for your cat</h2>
            <div class="banner__nav">
              <div class="banner__nav-item">
                <svg class="banner__nav-icon banner__nav-icon--white"><use xlink:href="sprite.svg#cook"></use></svg>
                <span>Easy prepare</span>
              </div>
              <div class="banner__nav-item">
                <svg class="banner__nav-icon banner__nav-icon--white"><use xlink:href="sprite.svg#Layer_1"></use></svg>
                <span>100% Natural</span>
              </div>
            </div>
            <Button class="banner__btn">Shop now</Button>
          </div>
        </div>
        <img src="img/slide-2-1.webp" alt="" class="banner__img banner__img--21">
        <img src="img/slide-2-2.webp" alt="" class="banner__img banner__img--22">
        <img src="img/slide-2-3.webp" alt="" class="banner__img banner__img--23">
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="banner__item banner__item--3">
        <div class="container banner__item-content">
          <div class="banner__item-inner banner__item-inner--left">
            <h2 class="banner__title banner__title--left"><span :style="{color:'#ffe11f'}">-50%</span> for<br/> all birds food!</h2>
            <div class="banner__nav">
              <div class="banner__nav-item">
                <svg class="banner__nav-icon banner__nav-icon--white"><use xlink:href="sprite.svg#cook"></use></svg>
                <span>Easy prepare</span>
              </div>
            </div>
            <Button :bgColor="'#ffe11f'"  class="banner__btn">Shop now</Button>
          </div>
        </div>
        <img src="img/slide-3-1.webp" alt="" class="banner__img banner__img--31">
        <img src="img/slide-3-2.webp" alt="" class="banner__img banner__img--32">
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
    
    &__item {
      position: relative;
      height: 440px;
      &--1 {
        background: url(/img/slider-1-slide-1-background.webp) no-repeat center/cover;
      }
      &--2 {
        background: url(/img/slider-1-slide-2-background.webp) no-repeat center/cover;
      }
      &--3 {
        background: url(/img/slider-1-slide-3-background.webp) no-repeat center/cover;
      }
    }
    &__item-inner {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &--left {
        align-items: flex-start;
      }
      
      
    }
    &__title {
      font-size: 64px;
      font-weight: 700;
      color: #ffffff;
      text-align: center;
      line-height: 1.2;
      width: 750px;
      margin-bottom: 30px;
      margin-top: 50px;
      &--left {
        text-align: left;
      }
    }
    &__nav {
      display: flex;
      gap: 20px;
      margin-bottom: 40px;
    }
    &__nav-item {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      gap:10px;
    }
    &__nav-icon {
      width: 24px;
      height: 24px;
      fill:#b62052;
      &--white {
        fill: #ffffff;
      }
    }
    &__btn {
      width: 158px;
      height: 48px;
      line-height: 48px;
    }
    &__img {
      position: absolute;
      &--11 {
        bottom: 0;
        right: 130px;
      }
      &--12 {
        top: 0;
        right: -90px;
      }
      &--21 {
        bottom: -20px;
        left: 22%
      }
      &--22 {
        bottom: -20px;
        left: 37%;
      }
      &--23 {
        bottom: -20px;
        left: 55%;
      }
      &--31 {
        top: 0;
        left: 35%;
      }
      &--32 {
        bottom: -20px;
        left: 40%;
      }
    }
  }
</style>