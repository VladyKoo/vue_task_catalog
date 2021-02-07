<template>
  <div>
    <div class="filter__container">
      <form class="filter__form" action="">
        <input type="number" name="input" />
        <select class="filter__select" name="select">
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
          <option value="d">d</option>
          <option value="e">e</option>
        </select>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductFilter",
  components: {},
  props: {},
  data: () => ({}),
  computed: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.filter__container {
  max-width: 400px;
}

.filter__form {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.filter__select {
  width: 100px;
}
</style>
