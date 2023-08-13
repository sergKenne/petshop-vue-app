<template>
  <button class="btn" :style="{color, fontSize: size, fontWeight}">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: {
      // bgColor: {
      //   type: String,
      //   default: "#b62052"
      // },
      color: {
        type: String,
        default: "#ffffff"
      },
      size: {
        type: String,
        default: "16px"
      },
      fontWeight: {
        type: Number,
        default: 600
      }

    }
  }
</script>

<style lang="scss" scoped>
  .btn {
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-content: center;
    background-color: #b62052;
    transition: all .2s ease-in-out;
    &:hover {
        background-color: #08284a;
      }
  }
</style>