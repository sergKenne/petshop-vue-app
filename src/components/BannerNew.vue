<template>
  <div class="banner__item banner__item--2">
        <div class="container banner__item-content">
          <div class="banner__item-inner banner__item-inner--left">
            <h2 class="banner__title banner__title--left">We care for the healthy and standardized development of your pet.</h2>
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
            <Button :bgColor="'#b62052'" :color="'#ffffff'" class="banner__btn">About</Button>
          </div>
        </div>
        <img src="img/row-back.webp" alt="" class="banner__img">
      </div>
</template>

<script>
import Button from "../components/Button.vue"
  export default {
    components: {
      Button
    }
  }
</script>

<style lang="scss" scoped>
  .banner {
    
    &__item {
      position: relative;
      height: 440px;
      background: #ebf0f5;
      overflow: hidden;
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
      font-size: 40px;
      line-height: 48px;
      font-weight: 700;
      color: #08284a;
      text-align: center;
      line-height: 1.2;
      width: 550px;
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
      color: #08284a;
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
      font-size: 16px;
      font-weight: 400;
    }
    &__img {
      position: absolute;
      width: 50vw;
      right: 0;
      top: -120px;
      
    }
  }
</style>