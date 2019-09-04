<template>
  <div class="cart-content">
    <span v-if="!cartProducts.length">
      Няма продукти в количката
    </span>
    <div class="items">
      <CartModalItem
        v-for="product of cartProducts"
        :key="product.id"
        :product="product"
      />
    </div>
    <div
      class="price"
      v-if="cartProducts.length"
    >
      <button @click="clearCart">Изчисти</button>
      <span>{{ productsPrice }}</span>
    </div>
  </div>
</template>
<script>
import CartModalItem from "~/components/Cart/CartModalItem";

export default {
  props: ["cartProducts", "productsPrice"],
  methods: {
    clearCart() {
      this.$store.dispatch("cart/clearCart");
    }
  },
  components: {
    CartModalItem
  }
};
</script>

<style lang="scss">
.cart-content {
  .price {
    display: flex;
    border-top: 1px dashed #ccc;
    padding-top: 15px;
    button {
      flex-basis: 30%;
      background: none;
      border: none;
      color: #575757;
      font-size: 15px;
      cursor: pointer;
      text-decoration: underline;
    }
    span {
      position: relative;
      text-align: right;
      flex-basis: 70%;
      font-size: 23px;
      color: #1e0606;
    }
  }
}
.slide-down-enter {
}
.slide-down-enter-active {
  animation: slide-down 0.3s ease-in-out forwards;
  transition: all 0.3s;
}
.slide-down-leave-active {
  animation: slide-up 0.3s ease-in-out forwards;
  transition: all 0.3s;
}
@keyframes slide-up {
  from {
    height: auto;
    overflow: hidden;
  }
  to {
    height: 0px;
    padding: 0 20px;
    overflow: hidden;
  }
}
@keyframes slide-down {
  from {
    height: 1px;
    overflow: hidden;
    padding: 0 20px;
    transition: height 0.3s;
  }
  to {
    height: auto;
    overflow: hidden;
  }
}
</style>