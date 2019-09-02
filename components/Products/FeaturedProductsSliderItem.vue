<template>
  <div class="item">
    <div class="image">
      <nuxt-link :to="`/products/${product.id}`">
        <img
          :src="product.picture"
          :alt="product.name"
        />
      </nuxt-link>
    </div>
    <div class="title">
      <nuxt-link :to="`/products/${product.id}`">
        {{ product.name }}
      </nuxt-link>
    </div>
    <div class="price">
      <span>{{ product.price }}</span>
      <button
        class="cart-add"
        @click="addToCart"
      >Купи</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    addToCart() {
      this.$store.dispatch("cart/addProductToCart", this.product);
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  border: 1px solid #f3f3f3;
  margin: 0 10px;
  height: 100%;
  .image {
    padding: 15px;
    img {
      max-width: 100%;
    }
  }
  .title {
    border-top: 1px solid #f3f3f3;
    a {
      color: #7986cb;
      border-bottom: 1px solid #f3f3f3;
      margin: 0px;
      padding: 15px;
      line-height: 1;
      font-size: 18px;
      font-weight: 600;
      text-decoration: none;
      display: block;
    }
  }
  .price {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    span {
      flex-basis: 50%;
      font-size: 18px;
      padding-left: 15px;
    }
    button {
      flex-basis: 50%;
      background: red;
      color: #fff;
      padding: 10px 0;
      border: none;
      font-size: 18px;
    }
  }
}
</style>