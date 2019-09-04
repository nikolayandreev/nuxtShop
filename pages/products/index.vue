<template>
  <section id="productPage">
    <ProductListFilters />
    <ProductList :products="filteredProducts.length ? filteredProducts : products" />
  </section>
</template>

<script>
import ProductList from "~/components/Products/ProductList";
import ProductListFilters from "~/components/Products/ProductListFilters";
export default {
  components: {
    ProductList,
    ProductListFilters
  },
  computed: {
    products() {
      return this.$store.getters["products/getProducts"];
    },
    filteredProducts() {
      return this.$store.getters["products/getFilteredProducts"];
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  }
};
</script>

<style lang="scss">
#productPage {
  display: flex;
  padding: 5px 30px;
  .filters {
    flex-basis: 30%;
  }
  .product-list {
    flex-basis: 70%;
  }
}
</style>