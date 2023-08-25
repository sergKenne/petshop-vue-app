<template>
  <div class="card">
    <a href="#" class="card__link-img">
      <img src="img/product15-300x300.jpg" alt="product" class="card__img">
    </a>
    <ul class="card__action-list">
      <li class="card__action-item">
        <svg class="card__action-icon"><use xlink:href="sprite.svg#eye"></use></svg>
      </li>
      <li class="card__action-item">
        <svg class="card__action-icon"><use xlink:href="sprite.svg#heart"></use></svg>
      </li>
      <li class="card__action-item">
        <svg class="card__action-icon"><use xlink:href="sprite.svg#compare"></use></svg>
      </li>
    </ul>
    <div class="card__body">
      <h6 class="card__title">Dry food</h6>
      <div class="card__desc">Purina Pro Plan Sensitive Skin & Stomach</div>
      <!-- <star-rating></star-rating> -->
      <lv-rating 
        :star-size="16"
        :increment="0.1"
        :rating="3.5"
        :readOnly="true"
        activeColor="#ffa600"
        inactiveColor="#d8d8d8"
      ></lv-rating>
      <div class="card__footer">
        <div class="card__prices">
          <span class="card__old-price">$39.99</span>
          <span class="card__current-price">$37.99</span>
        </div>
        <div class="card__svg">
          <svg v-if="!isAdded" class="card__svg-icon" @click="addToCart"><use xlink:href="sprite.svg#cart-plus"></use></svg>
          <svg v-else class="card__svg-icon"><use xlink:href="sprite.svg#cart"></use></svg>
        </div>
      </div>
    </div>
    <ul class="card__status-list">
      <li class="card__status-item card__status-item--sale">Sale</li>
      <li class="card__status-item card__status-item--new">New</li>
      <li class="card__status-item card__status-item--hot">Hot</li>
    </ul>
  </div>
</template>

<script>
  import LvRating from 'lightvue/rating';
    export default {
      components: {
        //StarRating
        LvRating
    },
    data() {
      return {
          isAdded: false
        }
    },
    methods: {
      addToCart() {
        this.isAdded = true
      }
    }
      
  }
</script>

<style lang="scss" scoped>
  .card {
    border-radius: 3px !important;
    box-shadow: inset 0 0 0 1px #ebebeb;
    background-color: #fff;
    padding: 16px;
    position: relative;
    &:hover .card__action-list {
      display: flex;
    }
    &__link-img {
      display: block;
      width: 100%;
    }
    &__img {
      display: block;
      width: 100%;
    }
   
    &__title {
      font-size: 13px;
      font-weight: 700;
      margin-top: 10px;
      margin-bottom: 10px;
      //color: #8393a4;
      cursor: pointer;
      &:hover {
        color: #b62052;
      }
    }
    &__desc {
      font-size: 14px;
      line-height: 22px;
      font-weight: 400;
      margin-bottom: 10px; 
      cursor: pointer;
      &:hover {
        color: #b62052;
      }
    }
    &__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
    }
    &__prices {
      display: inline-flex;
      width: 100%;
      font-weight: 700;
      font-size: 16px;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      color: #b62052;
    }
    &__old-price {
      color: #8393a4;
      text-decoration: line-through;
      margin-right: 4px;
    }
    &__current-price {

    }
    &__card-svg {
      display: inline-flex;
      align-items: center;
    }
    &__svg-icon {
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
    &__action-list {
      display: none;
      flex-direction: column;
      gap: 6px;
      position: absolute;
      top: 8px;
      right: 8px;
      z-index: 9;
      @media  (max-width: 1280px) {
        display: flex;
        flex-direction: row;
        position: static;
        margin-top: 20px;
      }
    }
    &__action-item {
      height: 32px;
      width: 32px;
      border-radius: 100%;
      display: flex;
      
      justify-content: center;
      align-items: center;
      background-color: #fff;
      box-shadow: inset 0 0 0 1px #ebebeb;
      text-align: center;
      transition: box-shadow .2s ease-out;
      &:hover {
        box-shadow: inset 0 0 0 1px #08284a;
      }
    }
    &__action-icon {
      height: 14px;
      width: 14px;
    }
    &__status-list {
      display: flex;
      align-items: center;
      position: absolute;
      left: 8px;
      top: 8px;
      gap: 6px;
    }
    &__status-item {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      font-size: 12px;
      font-weight: 600;
      &--sale {
        background-color: #b62052;
      }
      &--new {
        background-color: #05894d;
      }
      &--hot {
        background-color: #ffa600;
      }
    }
  }

</style>