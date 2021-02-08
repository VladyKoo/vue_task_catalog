<template>
  <div>
    <div
      class="multiselect"
      :tabindex="-1"
      @focus="activate($event)"
      @blur="deactivate($event)"
    >
      <div class="multiselect__selector">
        <div class="multiselect__tags" v-show="propsValue.length > 0">
          <template v-for="(option, index) of propsValue">
            <span class="multiselect__tag" :key="index">
              <span>{{ option }}</span>
              <i
                @mousedown.prevent="removeElement(option)"
                class="multiselect__tag-icon"
              ></i>
            </span>
          </template>
        </div>

        <input
          class="multiselect__input"
          v-show="searchable"
          type="text"
          placeholder="Выберите значение"
          autocomplete="off"
          @focus="activate($event)"
          @blur="deactivate($event)"
          @input="updateSearch($event.target.value)"
        />
      </div>

      <transition name="multiselect__overlay">
        <div
          class="multiselect__content-wrapper"
          v-show="isOpen"
          @mousedown.prevent
        >
          <ul class="multiselect__content">
            <template>
              <li v-for="(option, index) of filteredOptions" :key="index">
                <span
                  class="multiselect__option"
                  :class="optionSelected(option)"
                  @click.stop="selectOption(option)"
                >
                  {{ option }}
                </span>
              </li>
            </template>
            <li v-show="options.length > 0 && filteredOptions.length === 0">
              <span class="multiselect__option">
                Элемент не найден.
              </span>
            </li>
            <li v-show="options.length === 0">
              <span class="multiselect__option">
                Лист пуст.
              </span>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Multiselect",
  components: {},
  props: {
    value: {
      type: Array,
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    isOpen: false,
    searchable: true,
    search: ""
  }),
  computed: {
    propsValue() {
      return this.value || [];
    },
    filteredOptions() {
      const search = this.search.toLowerCase().trim() || "";
      const newArray = this.options.slice().filter(elem => {
        if (elem.toLowerCase().indexOf(search) < 0) {
          return false;
        } else return true;
      });
      return newArray;
    },
    inputStyle() {
      if (this.searchable) {
        // Hide input by setting the width to 0 allowing it to receive focus
        return this.isOpen
          ? { width: "100%" }
          : { width: "0", position: "absolute", padding: "0" };
      }
      return "";
    }
  },
  methods: {
    activate(event) {
      if (this.propsValue.length > 0) this.searchable = true;
      this.isOpen = true;
      console.log("Active");
      console.log(event);
    },
    deactivate(event) {
      if (this.propsValue.length === 0) this.searchable = true;
      else this.searchable = false;
      this.isOpen = false;
      console.log("Diactive");
      console.log(event);
    },
    updateSearch(value) {
      this.search = value;
    },
    selectOption(option) {
      if (this.isSelected(option)) this.removeElement(option);
      else {
        const array = this.value.slice();
        array.push(option);
        this.$emit("input", array);
      }
    },
    removeElement(option) {
      const index = this.value.indexOf(option);
      const newValue = this.value
        .slice(0, index)
        .concat(this.value.slice(index + 1));

      this.$emit("input", newValue);
    },
    isSelected(option) {
      const index = this.value.indexOf(option);
      if (index >= 0) return true;
      else return false;
    },
    optionSelected(option) {
      return {
        "multiselect__option--selected": this.isSelected(option)
      };
    }
  }
};
</script>

<style lang="scss">
@import "../styles/multiselect.scss";
</style>
