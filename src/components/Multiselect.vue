<template>
  <div>
    <div
      class="multiselect"
      :tabindex="searchable ? -1 : 0"
      @focus="activate($event)"
      @blur.prevent="deactivate($event)"
    >
      <div class="multiselect__tags" v-show="searchable">
        <div class="multiselect__tags-wrap">
          <template v-for="(option, index) of propsValue" @mousedown.prevent>
            <span class="multiselect__tag" :key="index">
              <span v-text="option"></span>
              <i
                tabindex="1"
                @mousedown.prevent="removeElement(option)"
                class="multiselect__tag-icon"
              ></i>
            </span>
          </template>
        </div>
      </div>
      <input
        class="multiselect__input"
        v-show="searchable"
        type="text"
        placeholder="Выберите значение"
        autocomplete="off"
        tabindex="0"
        @input="select($event.target.value)"
        @focus.prevent="activate($event)"
        @blur.prevent="deactivate($event)"
      />
      <transition name="multiselect__overlay">
        <div
          class="multiselect__content-wrapper"
          v-show="isOpen"
          @focus="activate"
          tabindex="-1"
          @mousedown.prevent
        >
          <ul class="multiselect__content" :style="contentStyle">
            <template>
              <li
                class="multiselect__element"
                v-for="(option, index) of propsOptions"
                :key="index"
              >
                <span
                  :class="optionSelected(option)"
                  @click.stop="select(option)"
                  class="multiselect__option"
                >
                  {{ option }}
                </span>
              </li>
            </template>
            <li v-show="0">
              <span class="multiselect__option">
                Элемент не обнаружен.
              </span>
            </li>
            <li v-show="propsOptions.length === 0">
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
    isOpen: true,
    searchable: true
  }),
  computed: {
    propsValue() {
      return this.value || [];
    },
    propsOptions() {
      return this.options;
    },
    contentStyle() {
      return !this.options.length
        ? { display: "inline-block" }
        : { display: "block" };
    }
  },
  methods: {
    activate(event) {
      if (this.propsValue.length > 0) this.searchable = true;
      this.isOpen = true;
      console.log("Active");
      console.log(event);

      // console.log("isOpen = " + this.isOpen);
      // console.log("searchable = " + this.searchable);
    },
    deactivate(event) {
      if (this.propsValue.length === 0) this.searchable = true;
      else this.searchable = false;

      this.isOpen = false;
      console.log("Diactive");
      console.log(event);

      // console.log("isOpen = " + this.isOpen);
      // console.log("searchable = " + this.searchable);
    },
    select(option) {
      console.log(option);
      console.log(this.isSelected(option));

      if (this.isSelected(option)) this.removeElement(option);
      else {
        const array = this.value.slice();
        console.log(this.options);

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
