<template>
  <div class="filter">
    <div class="filter__content-wrapper">
      <div class="filter__content">
        <p>Поиск</p>
        <div>
          <input
            class="filter__search"
            autocomplete="off"
            placeholder="Поиск по названию"
            @input="updateSearch($event.target.value)"
          />
        </div>
        <p>Бренд</p>
        <Multiselect v-model="selectValue" :options="selectOptions" />
        <p>Параметры</p>
        <div class="filter__checkbox">
          <div
            class="filter__checkbox-item"
            v-for="option of checkboxOptions"
            :key="option"
          >
            <input
              type="checkbox"
              :id="option"
              :value="option"
              v-model="checkboxValue"
            />
            <label :for="option">{{ option }}</label>
          </div>
        </div>
        <p>Цена</p>
        <div class="filter__range">
          <input
            class="filter__range-input"
            type="number"
            placeholder="От"
            min="0"
            :value="rangeValue.from"
            @input="updateRange($event.target.value, 'from')"
          />
          <input
            class="filter__range-input"
            type="number"
            placeholder="До"
            min="0"
            :value="rangeValue.to"
            @input="updateRange($event.target.value, 'to')"
          />
        </div>

        <div class="filter__clear-btn" @click="clearFilter()">
          <span>Сбросить</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from "./Multiselect";
export default {
  name: "ProductFilter",
  components: { Multiselect },
  props: {
    selectOptions: {
      type: Array,
      required: true
    },
    checkboxOptions: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    searchValue: "",
    selectValue: [],
    checkboxValue: [],
    rangeValue: {
      from: null,
      to: null
    }
  }),
  methods: {
    updateSearch(value) {
      const search = value.toLowerCase().trim() || "";
      this.searchValue = search;
      this.emitFilterValue();
    },
    updateRange(value, name) {
      this.rangeValue[name] = +value;
      this.emitFilterValue();
    },
    emitFilterValue() {
      const filterValue = {
        searchValue: this.searchValue,
        selectValue: this.selectValue,
        checkboxValue: this.checkboxValue,
        rangeValue: this.rangeValue
      };
      this.$emit("filterValue", filterValue);
    },
    clearFilter() {
      this.searchValue = "";
      this.selectValue = [];
      this.checkboxValue = [];
      this.rangeValue.from = 0;
      this.rangeValue.to = 0;
    }
  },
  watch: {
    selectValue() {
      this.emitFilterValue();
    },
    checkboxValue() {
      this.emitFilterValue();
    },
    "rangeValue.from"() {
      this.emitFilterValue();
    },
    "rangeValue.to"() {
      this.emitFilterValue();
    }
  },
  mounted() {
    this.emitFilterValue();
  }
};
</script>

<style lang="scss">
@import "../styles/catalogFilter.scss";
</style>
