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
  padding: 10px 30px;
  border: none;
  border-radius: 21px;
  background-color: $colorTextAccent;
  color: #fff;
  cursor: pointer;
}
</style>
