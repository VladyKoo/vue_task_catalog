<template>
  <div>
    <div
      class="multiselect"
      :tabindex="-1"
      @focus="activate()"
      @blur="deactivate()"
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
          type="text"
          placeholder="Выберите значение"
          autocomplete="off"
          ref="search"
          @focus.prevent="activate()"
          @blur.prevent="deactivate()"
          v-model="search"
        />
      </div>

      <div class="multiselect__content-wrapper" v-show="isOpen">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "Multiselect",
  model: {
    prop: "value",
    event: "changeValue"
  },
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
    }
  },

  methods: {
    activate() {
      if (this.isOpen) return;
      this.isOpen = true;
      this.search = "";
      this.$nextTick(() => this.$refs.search.focus());
    },
    deactivate() {
      if (!this.isOpen) return;
      this.isOpen = false;
      this.search = "";
      this.$refs.search.blur();
    },

    selectOption(option) {
      if (this.isSelected(option)) this.removeElement(option);
      else {
        const array = this.value.slice();
        array.push(option);
        this.$emit("changeValue", array);
      }
    },
    removeElement(option) {
      const index = this.value.indexOf(option);
      const newValue = this.value
        .slice(0, index)
        .concat(this.value.slice(index + 1));

      this.$emit("changeValue", newValue);
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
