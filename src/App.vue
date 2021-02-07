<template>
  <div id="app">
    <h1>Каталог товаров</h1>
    <ProductFilter></ProductFilter>
  </div>
</template>

<script>
import ProductFilter from "./components/ProductFilter";
export default {
  name: "App",
  components: { ProductFilter },
  data: () => ({})
};
</script>

<style lang="scss">
@import "~normalize.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  max-width: 900px;
  margin: 0 auto;
  background-color: #fff;
  height: 100vh;
  padding: 20px;
}
</style>
