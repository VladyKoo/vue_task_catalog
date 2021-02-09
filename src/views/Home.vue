<template>
  <div>
    <header class="header">
      <h1>Каталог товаров</h1>
    </header>

    <div class="catalog">
      <div class="catalog__content">
        <div class="catalog__filter">
          <CatalogFilter
            :selectOptions="selectOptions"
            :checkboxOptions="checkboxOptions"
            @filterValue="updateFilterValue($event)"
          ></CatalogFilter>
        </div>
        <div class="catalog__products">
          <div
            class="catalog__products_item"
            v-for="product of filteredProducts"
            :key="product.id"
            v-show="product.isShow"
          >
            <CatalogProducts :product="product"></CatalogProducts>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CatalogFilter from "../components/CatalogFilter";
import CatalogProducts from "../components/CatalogProducts";
export default {
  name: "App",
  components: { CatalogFilter, CatalogProducts },
  data: () => ({
    selectOptions: [],
    checkboxOptions: [],
    filterValue: {
      searchValue: "",
      selectValue: [],
      checkboxValue: [],
      rangeValue: { from: "", to: "" }
    },

    fetchData: [
      {
        id: 1,
        name: "Диск переднего тормоза «BREMBO» R14 вентилируемый ВАЗ 2112",
        price: 5500,
        amount: 2,
        slug: "brake-rotor-brembo-r14",
        description: "",
        image: "brake-rotor/1.jpg",
        brand: "BREMBO",
        type: "Вентилируемый",
        category: "Запчасти",
        isShow: true
      },
      {
        id: 2,
        name:
          "Тормозной диск невентилируемый HTC4980 HAWK Talon Toyota LC200 до2015",
        price: 3700,
        amount: 10,
        slug: "brake-rotor-hawk-talon",
        description: "",
        image: "brake-rotor/2.jpg",
        brand: "HAWK Performance",
        type: "Невентилируемый",
        category: "Запчасти",
        isShow: true
      },
      {
        id: 3,
        name: "Диск тормозной перфорированный RN1244DSET NIBK GS 3.0 200",
        price: 10000,
        amount: 30,
        slug: "brake-rotor-nibk-gs",
        description: "",
        image: "brake-rotor/3.jpg",
        brand: "NIBK",
        type: "Перфорированный",
        category: "Запчасти",
        isShow: true
      },

      {
        id: 4,
        name:
          "Диск переднего тормоза «BREMBO» R14 вентилируемый ВАЗ 2112 (пара)",
        price: 8500,
        amount: 2,
        slug: "brake-rotor-brembo-r14",
        description: "",
        image: "brake-rotor/1.jpg",
        brand: "BREMBO",
        type: "Вентилируемый",
        category: "Запчасти",
        isShow: true
      },
      {
        id: 5,
        name:
          "Тормозной диск невентилируемый HTC4980 HAWK Talon Toyota LC200 до2015 (пара)",
        price: 6000,
        amount: 10,
        slug: "brake-rotor-hawk-talon",
        description: "",
        image: "brake-rotor/2.jpg",
        brand: "HAWK Performance",
        type: "Невентилируемый",
        category: "Запчасти",
        isShow: true
      },
      {
        id: 6,
        name:
          "Диск тормозной перфорированный RN1244DSET NIBK GS 3.0 200 (пара)",
        price: 18000,
        amount: 30,
        slug: "brake-rotor-nibk-gs",
        description: "",
        image: "brake-rotor/3.jpg",
        brand: "NIBK",
        type: "Перфорированный",
        category: "Запчасти",
        isShow: true
      }
    ]
  }),
  computed: {
    filteredProducts() {
      const searchValue = {
        value: this.filterValue.searchValue,
        isEmpty: this.filterValue.searchValue === ""
      };
      const selectValue = {
        value: this.filterValue.selectValue,
        isEmpty: this.filterValue.selectValue.length === 0
      };
      const checkboxValue = {
        value: this.filterValue.checkboxValue,
        isEmpty: this.filterValue.checkboxValue.length === 0
      };
      const rangeValue = {
        isEmpty:
          !this.filterValue.rangeValue.from && !this.filterValue.rangeValue.to,
        from: {
          value: this.filterValue.rangeValue.from,
          isEmpty: !this.filterValue.rangeValue.from
        },
        to: {
          value: this.filterValue.rangeValue.to,
          isEmpty: !this.filterValue.rangeValue.to
        }
      };

      if (
        Object.keys(this.filterValue).length === 0 ||
        (searchValue.isEmpty &&
          selectValue.isEmpty &&
          checkboxValue.isEmpty &&
          rangeValue.from.isEmpty &&
          rangeValue.to.isEmpty)
      ) {
        const newArray = this.fetchData.map(element => {
          element.isShow = true;
          return element;
        });
        return newArray;
      } else {
        const newArray = this.fetchData.map(element => {
          const isShow = [];
          if (!searchValue.isEmpty) {
            element.name
              .toLowerCase()
              .trim()
              .indexOf(searchValue.value) < 0
              ? isShow.push(false)
              : isShow.push(true);
          }
          if (!selectValue.isEmpty) {
            selectValue.value.findIndex(elem => elem === element.brand) < 0
              ? isShow.push(false)
              : isShow.push(true);
          }
          if (!checkboxValue.isEmpty) {
            checkboxValue.value.findIndex(elem => elem === element.type) < 0
              ? isShow.push(false)
              : isShow.push(true);
          }
          if (!rangeValue.isEmpty) {
            if (!rangeValue.from.isEmpty) {
              element.price >= rangeValue.from.value
                ? isShow.push(true)
                : isShow.push(false);
            }
            if (!rangeValue.to.isEmpty) {
              element.price <= rangeValue.to.value
                ? isShow.push(true)
                : isShow.push(false);
            }
          }

          if (isShow.findIndex(elem => elem === false) < 0) {
            element.isShow = true;
            return element;
          } else {
            element.isShow = false;
            return element;
          }
        });
        return newArray;
      }
    }
  },
  methods: {
    getOptions() {
      this.fetchData.forEach(element => {
        if (this.selectOptions.findIndex(elem => elem === element.brand) < 0) {
          this.selectOptions.push(element.brand);
        }
        if (this.checkboxOptions.findIndex(elem => elem === element.type) < 0) {
          this.checkboxOptions.push(element.type);
        }
      });
    },
    updateFilterValue(value) {
      this.filterValue = value || {};
    }
  },
  mounted() {
    this.getOptions();
  }
};
</script>

<style lang="scss">
@import "../styles/home.scss";
</style>
