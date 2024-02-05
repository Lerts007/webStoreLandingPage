<template>
  <AppHeader />
  <main>
    <ContentPage />
  </main>
  <AppFooter />
</template>

<script>
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";
import ContentPage from "./components/ContentPage.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    ContentPage,
    AppFooter,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;
}
a {
  text-decoration: none;
  transition: color 0.5s;
  @media (hover: hover) {
    &:hover {
      color: $colorTextAccent !important;
    }
  }
}
.content {
  width: 960px;
  margin: 0 auto;
}
</style>
