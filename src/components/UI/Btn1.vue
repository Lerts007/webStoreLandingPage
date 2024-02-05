<template>
  <button>
    {{ textBtn }}
  </button>
</template>

<script>
export default {
  props: {
    textBtn: String,
  },
};
</script>

<style lang="scss" scoped>
button {
  @include RobotoBA16;
  padding: 10px 26px;
  border: 2px solid #979ba6;
  border-radius: 21px;
  background-color: #fff;
  cursor: pointer;
  transition: color .5s, border .5s, background-color .5s ;
  @media (hover: hover) {
    &:hover{
      color: #fff;
      border: 2px solid $colorTextAccent;
      background-color: $colorTextAccent;
    }
  }
}
</style>
