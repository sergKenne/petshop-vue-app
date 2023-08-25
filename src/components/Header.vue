<template>
  <header class="header">
        <div class="container header__inner">
          <a href="/" class="header__logo-link">
            <img src="img/logo.svg" class="header__logo" alt="">
          </a>
          <div class="header__navbar" :class="{hide: !show }">
            <div class="header__navbar-content" @click="closeSidebar">
              <div class="header__close-btn">
                <svg class="header__close-icon"><use xlink:href="sprite.svg#close"></use></svg>
              </div>
              <nav class="header__nav">
                <router-link to="/" class="header__nav-item">Home</router-link>
                <router-link to="/shop" class="header__nav-item">Shop</router-link>
                <router-link to="/blog" class="header__nav-item">Blog</router-link>
              </nav>
            </div>
          </div>
          <div class="header__right-icons">
            <div class="header__icon">
              <div class="header__cart">
                <svg class="header__svg-icon"><use xlink:href="sprite.svg#favorite"></use></svg>
                <span class="header__badge">12</span>
              </div>
            </div>
            <div class="header__icon header__icon--cart" @click="toggleDropdown">
              <div class="header__cart">
                <svg class="header__svg-icon"><use xlink:href="sprite.svg#cart"></use></svg>
                <span class="header__badge">16</span>
              </div>
              <span>Cart</span> 
              <svg class="header__svg-icon header__svg-icon--down"><use xlink:href="sprite.svg#array"></use></svg>
              <div class="header__dropdown" :class="{show: isDown}">
                <div class="header__dropdown-inner">
                  <div class="header__card">
                    <img class="header__card-img" src="img/product32.jpg" alt="">
                    <div class="header__card-body">
                      <h6 class="header__card-title">Aqueon QuietFlow 20 Internal..</h6>
                      <div class="header__card-subtitle">
                        <span>Quantity:</span>
                        <span>1</span>
                        <span>x</span>
                        <span class="header__card-price">$120</span>
                      </div>
                    </div>
                  </div>
                  <div class="header__card">
                    <img class="header__card-img" src="img/product32.jpg" alt="">
                    <div class="header__card-body">
                      <h6 class="header__card-title">Aqueon QuietFlow 20 Internal..</h6>
                      <div class="header__card-subtitle">
                        <span>Quantity:</span>
                        <span>1</span>
                        <span>x</span>
                        <span class="header__card-price">$120</span>
                      </div>
                    </div>
                  </div>
                  <div class="header__dropdown-footer">
                    <h6>Subtotal: <span>$75.66</span></h6>
                    <div class="header__dropdown-btns">
                      <button class="header__dropdown-btn">View cart</button>
                      <button class="header__dropdown-btn">Checkout</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="header__icon header__icon--bar" @click="openSidebar">
              <svg class="header__svg-icon"><use xlink:href="sprite.svg#bar"></use></svg>
            </div>
          </div>
        </div>
    </header>
</template>

<script>
  export default {
    data: () => {
      return {
        show: false,
        isDown: false
        
      }
    },
    methods: {
      openSidebar()  {
        this.show = true
      },
      closeSidebar() {
        this.show = false
      },
      toggleDropdown() {
        this.isDown = !this.isDown
      }

    }
  }
</script>

<style lang="scss" scoped>

</style>