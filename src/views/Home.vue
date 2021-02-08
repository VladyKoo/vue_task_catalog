<template>
  <div>
    <header class="header">
      <h1>Каталог товаров</h1>
    </header>

    <div class="catalog">
      <div class=" filter-btn" @click="filterIsVisible = !filterIsVisible">
        Фильтр
      </div>
      <div
        :class="{ 'filter-is-visible': filterIsVisible }"
        class="catalog__content"
      >
        <div v-if="filterIsVisible" class="catalog__filter">
          <CatalogFilter></CatalogFilter>
        </div>
        <div class="catalog__products">
          <CatalogProducts></CatalogProducts>
          <CatalogProducts></CatalogProducts>
          <CatalogProducts></CatalogProducts>
          <CatalogProducts></CatalogProducts>
          <CatalogProducts></CatalogProducts>
          <CatalogProducts></CatalogProducts>
          <CatalogProducts></CatalogProducts>
          <CatalogProducts></CatalogProducts>
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
    filterIsVisible: true

    // name: "Тормозные колодки",
    // slug: "",
    // image: "img.jpg",
    // brands: [{ name: "BOMAG", slug: "bomag" }],
    // sizes: [],
    // initialPriceRange: null,
    // initialBrands: null,
    // initialProducts: [
    //   {
    //     id: null,
    //     name: "Шина цельнолитая 4.00-8 Elite XP TL Trelleborg",
    //     article: "IT71641693",
    //     description: null,
    //     slug:
    //       "sina-cel-nolitaa-4.00-8-elite-xp-tl-trelleborg-trelleborg-it71641693",
    //     groupId: null,
    //     mainImageId: 10948,
    //     mainImageHeight: null,
    //     mainImageWidth: null,
    //     longCard: null,
    //     brand: { id: null, name: null },
    //     ratingClientAverage: null,
    //     propertyValues: [
    //       {
    //         productId: null,
    //         propertyId: null,
    //         propertyName: null,
    //         dictionaryId: null,
    //         dictionaryValue: null
    //       }
    //     ]
    //   }
    // ],
    // initialFilter: { properties: [{ id: "2", dictionaryId: "46" }] }
  })
};
</script>

<style lang="scss">
@import "../styles/home.scss";
</style>
