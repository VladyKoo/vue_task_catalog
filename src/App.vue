<template>
  <div class="app">
    <div class="app__container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
@import "./styles/style.scss";
</style>
