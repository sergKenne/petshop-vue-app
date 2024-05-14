<template>
  <div class="shop">
    <div class="container shop__inner">
      <nav class="breadcrumb shop__breadcrumb">
        <div class="breadcrumb__item">Home</div>
        <div class="breadcrumb__item">
          <svg class="breadcrumb__icon"><use xlink:href="sprite.svg#array"></use></svg>
        </div>
        <div class="breadcrumb__item">Shop</div>
      </nav> 
      <div>
        <h4 class="shop__title">Shop</h4>
        <svg class="shop__icon-filter"><use xlink:href="sprite.svg#filter"></use></svg>
      </div>
      <div class="shop__content">
        <div class="aside shop__aside">
          <h5 class="aside__main-title">Shop by Categories</h5>
          <ul class="aside__list">
            <li class="aside__item">Care</li>
            <li class="aside__item">Dry food</li>
            <li class="aside__item">Grooming</li>
            <li class="aside__item"></li>
            <li class="aside__item">Supplements</li>
            <li class="aside__item">Transporters</li>
            <li class="aside__item">Uncategorized</li>
            <li class="aside__item">Wet food</li>
          </ul>
          <div class="aside__filter-price">
            <h6 class="aside__title">Prices</h6>

          </div>
          <div class="aside__filter-price">
            <h6 class="aside__title">Brand</h6>

          </div>
          <div class="aside__filter-price">
            <h6 class="aside__title">Color</h6>

          </div>
          <div class="aside__brand">
            <h6 class="aside__title">Pets</h6>

          </div>
          <div class="aside__color">
            <h6 class="aside__title">Packaging type</h6>

          </div>
          <div class="aside__filter-weight">
            <h6 class="aside__title">Weight</h6>

          </div>
          <div class="rating">
            <h6 class="aside__title">Rating</h6>

          </div>
        </div>
        <div class="shop__products">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  
</style>