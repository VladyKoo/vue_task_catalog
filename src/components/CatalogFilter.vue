<template>
  <div>
    <div class="filter__container">
      <form class="filter__form form" action="">
        <!-- <p>Поиск</p> -->
        <div>
          <input
            class="form__input"
            autocomplete="off"
            name="input"
            placeholder="Поиск по категории"
          />
        </div>

        <p>Бренд:</p>
        <Multiselect v-model="value" :options="options" />

        <!-- <select class="form__select" name="select">
          <option value="a">a</option>
          <option value="b">b</option>
          <option value="c">c</option>
          <option value="d">d</option>
          <option value="e">e</option>
        </select>
        <p>Форма</p>
        <div class="form_checkbox">
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
        </div> -->
        <p>{{ value }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import Multiselect from "./Multiselect";
export default {
  name: "ProductFilter",
  components: { Multiselect },
  props: {},
  data: () => ({
    value: [],
    options: ["opt-0", "opt-1", "opt-2", "opt-3"]
    // options: []
  }),
  computed: {},
  methods: {}
};
</script>

<style lang="scss">
@import "../styles/catalogFilter.scss";
</style>
