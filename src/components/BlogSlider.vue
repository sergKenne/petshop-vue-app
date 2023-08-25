<template>
  <div class="blog-slider">
    <div class="container">
      <h3 class="blog-slider__title">From the blog</h3>
      <swiper
        class="blog-slider__content"
        :slides-per-view="3"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide>
          <div class="blog-slider__item">
            <img src="img/blog1.jpg" alt="" class="blog-slider__img">
            <div class="blog-slider__body">
              <h6 class="blog-slider__subtitle">Tips for Taking Holiday Photos with Your Pets</h6>
              <p class="blog-slider__date">August 26, 2022 Jørgen J. Hansen</p>
              <button class="blog-slider__btn">
                <span>Read more</span>
                <svg class="blog-slider__svg-icon"><use xlink:href="sprite.svg#array"></use></svg>
              </button>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="blog-slider__item">
            <img src="img/blog1.jpg" alt="" class="blog-slider__img">
            <div class="blog-slider__body">
              <h6 class="blog-slider__subtitle">Tips for Taking Holiday Photos with Your Pets</h6>
              <p class="blog-slider__date">August 26, 2022 Jørgen J. Hansen</p>
              <button class="blog-slider__btn">
                <span>Read more</span>
                <svg class="blog-slider__svg-icon"><use xlink:href="sprite.svg#array"></use></svg>
              </button>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="blog-slider__item">
            <img src="img/blog1.jpg" alt="" class="blog-slider__img">
            <div class="blog-slider__body">
              <h6 class="blog-slider__subtitle">Tips for Taking Holiday Photos with Your Pets</h6>
              <p class="blog-slider__date">August 26, 2022 Jørgen J. Hansen</p>
              <button class="blog-slider__btn">
                <span>Read more</span>
                <svg class="blog-slider__svg-icon"><use xlink:href="sprite.svg#array"></use></svg>
              </button>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="blog-slider__item">
            <img src="img/blog1.jpg" alt="" class="blog-slider__img">
            <div class="blog-slider__body">
              <h6 class="blog-slider__subtitle">Tips for Taking Holiday Photos with Your Pets</h6>
              <p class="blog-slider__date">August 26, 2022 Jørgen J. Hansen</p>
              <button class="blog-slider__btn">
                <span>Read more</span>
                <svg class="blog-slider__svg-icon"><use xlink:href="sprite.svg#array"></use></svg>
              </button>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="blog-slider__item">
            <img src="img/blog1.jpg" alt="" class="blog-slider__img">
            <div class="blog-slider__body">
              <h6 class="blog-slider__subtitle">Tips for Taking Holiday Photos with Your Pets</h6>
              <p class="blog-slider__date">August 26, 2022 Jørgen J. Hansen</p>
              <button class="blog-slider__btn">
                <span>Read more</span>
                <svg class="blog-slider__svg-icon"><use xlink:href="sprite.svg#array"></use></svg>
              </button>
            </div>
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
  .blog-slider {
    background-color: #ffffff;
    color: #08284a;
    padding-top: 76px;
    padding-bottom: 40px;
    &__title {
      font-size: 32px;
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
      border-radius: 4px;
      display: block;
      width: 100%;
    }
    &__subtitle {
      font-size: 24px;
      font-weight: 700;
      line-height: 1.5em;
      margin-bottom: 10px;
    }
    &__date {
      font-size: 12px;
      font-weight: 400;
      margin-bottom: 20px;
    }
    &__btn {
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      color: #b62052;
      font-size: 12px;
      font-weight: 400;
      cursor: pointer;
    }
    &__svg-icon {
      fill: #b62052;
      transform: rotateZ(-90deg);
      width: 8px;
      height: 6px;
      margin-top: 2px;
      margin-left: 2px;
      
    }
  }
</style>