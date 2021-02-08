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
    // options: [
    //   "Option-000000000000000000000000000",
    //   "Opt-1",
    //   "Opt-2",
    //   "Opt-3.1",
    //   "Opt-3",
    //   "Opt-4",
    //   "Opt-5",
    //   "Opt-6",
    //   "Opt-7",
    //   "Opt-8s"
    // ]
    options: ["Opt-1", "Opt-2", "Opt-3.1", "Opt-3", "Opt-4"]
    // options: []
  }),
  computed: {},
  methods: {}
};
</script>

<style lang="scss">
@import "../styles/catalogFilter.scss";
</style>
