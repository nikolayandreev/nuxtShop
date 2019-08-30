<template>
  <div id="productList">
    <ProductListHeader />
    <ProductListItem
      v-for="product in products"
      :product='product'
      :layout='layout'
      :key="product.id"
    />
  </div>
</template>

<script>
import ProductListItem from "~/components/Products/ProductListItem";
import ProductListHeader from "~/components/Products/ProductListHeader";

export default {
  data() {
    return {
      layout: "List"
    };
  },
  props: {
    products: {
      type: Array
    }
  },
  components: {
    ProductListItem,
    ProductListHeader
  }
};
</script>

<style scoped lang="scss">
#productList {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
}
</style>
