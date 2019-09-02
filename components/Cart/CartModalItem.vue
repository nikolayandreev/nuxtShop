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
      <small class="single-price">{{ product.price }}</small>
    </div>
    <div class="removeLink">
      <button @click="removeProductFromCart">
        <font-awesome-icon :icon="['fas', 'trash']" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    removeProductFromCart() {
      this.$store.dispatch("cart/removeProductFromCart", this.product);
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  flex-flow: row nowrap;
  border-bottom: 1px solid #f3f3f3;
  align-items: center;
  padding-bottom: 5px;
  margin-top: 5px;
  &:last-child {
    border: none;
  }
  .image {
    flex-basis: 20%;
    img {
      height: 100%;
      width: auto;
      max-width: 100%;
    }
  }
  .title {
    text-align: left;
    flex-basis: 70%;
    padding-left: 10px;
    a {
      flex-basis: 100%;
      font-size: 11px;
      text-decoration: none;
      color: #353535;
      display: block;
      margin-bottom: 2px;
    }
    .single-price {
      color: #9d2929;
      display: block;
      font-size: 11px;
    }
  }
  .removeLink {
    flex-basis: 10%;
    button {
      border: none;
      background: none;
      color: #ccc;
      cursor: pointer;
      transition: 0.2s all;
      &:hover,
      &:focus {
        color: red;
        transition: 0.3s all;
      }
    }
  }
}
</style>