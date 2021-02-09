<template>
  <div class="products">
    <div class="products__content-wrapper">
      <div class="products__content">
        <div class="products__link">
          <router-link :to="`/brake-rotor/${propsProduct.slug}`">
            <img :src="getImage" alt="brake-rotor" />
            <span>{{ propsProduct.name }}</span>
          </router-link>
        </div>
        <div class="products__brand">
          <span>{{ `Бренд: ${propsProduct.brand}` }}</span>
        </div>
        <div class="products__price">
          <span>{{ `Цена: ${propsProduct.price} р` }}</span>
        </div>
        <div class="products__amount">
          <span>{{ `В наличии ${propsProduct.amount} шт.` }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogProducts",
  components: {},
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data: () => ({}),
  computed: {
    propsProduct() {
      return this.product || {};
    },
    getImage() {
      return require(`../assets/${this.propsProduct.image}`);
    }
  },
  methods: {}
};
</script>

<style lang="scss">
@import "../styles/catalogProducts.scss";
</style>
