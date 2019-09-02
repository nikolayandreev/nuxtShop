<template>
  <header class="main-header">
    <div class="logo">
      <nuxt-link to="/">
        <span>
          nuxt
          <span>Shop</span>
        </span>
      </nuxt-link>
    </div>
    <nav class="navigation">
      <ul>
        <li>
          <nuxt-link
            to="/"
            exact
          >Начало</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/products">Продукти</nuxt-link>
        </li>
        <li class="cart">
          <div
            class="cart-link"
            @click.self="showCart = !showCart"
          >
            <font-awesome-icon :icon="['fas', 'shopping-cart']" />
            Количка ({{cartProductsLength}})
            <CartModalContent
              v-if="showCart"
              :productsPrice="productsPrice"
              :cartProducts="cartProducts"
            />
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import CartModalContent from "~/components/Cart/CartModalContent";

export default {
  data() {
    return {
      showCart: false
    };
  },
  components: {
    CartModalContent
  },
  computed: {
    cartProductsLength() {
      return this.$store.getters["cart/getProductsCount"];
    },
    productsPrice() {
      return this.$store.getters["cart/getProductsPrice"];
    },
    cartProducts() {
      return this.$store.getters["cart/getProducts"];
    }
  }
};
</script>

<style scoped lang="scss">
.main-header {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  padding: 0px 20px;
  align-items: center;
  background: #0d47a1;
  position: fixed;
  z-index: 9999;
  top: 0;
  .logo {
    flex-basis: 20%;
    font-size: 20px;
    a {
      text-decoration: none;
    }
    span {
      color: #2962ff;
      letter-spacing: -2px;
      > span {
        letter-spacing: 0px;
        color: #fff;
        font-weight: 600;
      }
    }
  }
  .navigation {
    flex-basis: 80%;
    text-align: right;
    ul {
      list-style-type: none;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      li {
        display: inline-block;
        a {
          color: #e3f2fd;
          position: relative;
          padding: 20px 15px;
          display: block;
          text-decoration: none;
          &:hover,
          &:focus,
          &.nuxt-link-active {
            background: #1a237e;
          }
        }
        &.cart {
          position: relative;
          cursor: pointer;
          .cart-link {
            display: block;
            padding: 20px 15px;
            background: #fff;
          }
          .cart-content {
            position: absolute;
            width: 300px;
            right: 0;
            background: #fff;
            top: 105%;
            border: 1px solid #f3f3f3;
            z-index: 9;
            padding: 30px 20px;
            box-shadow: 0px 3px 13px #000;
          }
        }
      }
    }
  }
}
</style>