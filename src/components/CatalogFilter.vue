<template>
  <div>
    <div class="filter__container">
      <form class="filter__form form" action="">
        <p>Поиск</p>
        <div>
          <input
            class="form__input"
            autocomplete="off"
            name="search"
            placeholder="Поиск по категории"
            @input="updateSearch($event.target.value)"
          />
        </div>
        <p>Бренд</p>
        <Multiselect v-model="multiselectValue" :options="multiselectOptions" />
        <p>Параметры</p>
        <div class="form__checkbox">
          <div
            class="form__checkbox-item"
            v-for="option of checkboxValue"
            :key="option.name"
          >
            <input
              :id="option.name"
              type="checkbox"
              :checked="option.selected"
              @change="changeChackbox(option.name)"
            />
            <label :for="option.name">{{ option.name }}</label>
          </div>
        </div>
        <p>Цена</p>
        <div class="form__range">
          <input class="form__range-input" type="number" placeholder="От" />
          <input class="form__range-input" type="number" placeholder="До" />
        </div>
      </form>
      <p>{{ searchValue }}</p>
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
    searchValue: "",
    multiselectValue: [],
    multiselectOptions: [
      "Opt-1",
      "Opt-2",
      "Opt-3.1",
      "Opt-3",
      "Opt-4",
      "Opt-5",
      "Opt-6",
      "Opt-7",
      "Opt-8s"
    ],
    checkboxValue: [
      { name: "Opt-1", selected: null },
      { name: "Opt-2", selected: null },
      { name: "Opt-3", selected: null },
      { name: "Opt-4", selected: null },
      { name: "Opt-5", selected: null },
      { name: "Opt-6", selected: null }
    ],
    rangeValue: {
      from: null,
      to: null
    }
  }),
  computed: {},
  methods: {
    updateSearch(value) {
      const search = value.toLowerCase().trim() || "";
      this.searchValue = search;
    },
    changeChackbox(option) {
      const newArray = this.checkboxValue.map(elem => {
        if (elem.name === option) {
          return {
            name: elem.name,
            selected: !elem.selected
          };
        } else return elem;
      });
      this.checkboxValue = newArray;
    },
    updateRange(value) {
      const search = value.toLowerCase().trim() || "";
      this.searchValue = search;
    }
  }
};
</script>

<style lang="scss">
@import "../styles/catalogFilter.scss";
</style>
