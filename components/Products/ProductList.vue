<template>
  <div
    id="productList"
    v-if="!products[0].error"
  >
    <ProductListHeader />
    <ProductListItem
      v-for="product in products"
      :product='product'
      :layout='layout'
      :key="product.id"
    />
  </div>
  <div
    v-else
    class="error"
  >
    <h3>
      <font-awesome-icon :icon="['fas', 'exclamation-triangle']" />
      Няма намерени резултати..
    </h3>
    <p>
      Няма резултати, които да отговарят на това търсене,
      моля опитайте да промените параметрите <br />или<br />
      <a href='/products'>Изчистете търсенето</a>
    </p>
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
div.error {
  max-width: 50%;
  margin: 50px auto;
  text-align: center;
  h3 {
    font-size: 32px;
    color: #861919;
  }
  p {
    color: #6a6a6a;
    font-size: 18px;
  }
  a {
    color: #000;
  }
}
</style>
