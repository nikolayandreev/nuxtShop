<template>
  <div
    class="product-item"
    :class="{
        'sm': layout !== 'List',
        'featured': product.isFeatured,
        'inactive': !product.isActive
    }"
  >
    <div class="product-image">
      <nuxt-link :to="`/products/${product.id}`">
        <img
          :src="product.picture"
          :alt="product.name"
        />
      </nuxt-link>
    </div>

    <div class="product-info">
      <div class="name">
        <nuxt-link :to="`/products/${product.id}`">
          {{ product.name }}
        </nuxt-link>
      </div>
      <ul class="info">
        <li class="category">Категория: {{ product.category }}</li>
        <li class="manufacturer">Производител: {{ product.manufacturer }}</li>
        <li class="color">Цвят: <div
            :style='{backgroundColor: color}'
            class="color-pick"
          ></div>
        </li>
      </ul>
    </div>

    <div class="product-price">
      <div class="price">
        <p>{{ product.price }}</p>
      </div>
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
  computed: {
    layout() {
      return this.$store.getters["products/getView"];
    },
    color() {
      return typeof this.product.color === "object"
        ? this.product.color[0]
        : this.product.color;
    }
  },
  methods: {
    addToCart() {
      this.$store.dispatch("cart/addProductToCart", this.product);
    }
  }
};
</script>

<style scoped lang="scss">
.product-item {
  .product-info {
    position: relative;
    &:before {
      content: "";
      position: absolute;
      right: 1px;
      top: -5px;
      background: red;
      color: #fff;
      font-size: 12px;
      padding: 0 10px;
    }
  }
  &.featured {
    .product-info {
      &:before {
        content: "Препоръчан";
        background: darkgreen;
      }
    }
  }
  &.inactive {
    .product-info {
      &:before {
        content: "Изчерпано";
      }
    }
  }
  display: flex;
  flex-basis: 100%;
  border: 1px solid #f3f3f3;
  margin: 15px 0;
  justify-content: space-between;
  //   box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
  .product-image {
    border-right: 1px solid #f3f3f3;
    margin: 5px 0px;
    flex-basis: 20%;
    padding: 0 5px;
    position: relative;
    img {
      max-width: 100%;
      max-height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      width: auto;
      height: auto;
      transform: translate(-50%, -50%);
    }
  }
  .product-info {
    border-right: 1px solid #f3f3f3;
    margin: 5px 0px;
    padding: 10px 5px;
    flex-basis: 53%;
    .name {
      a {
        color: #7986cb;
        border-bottom: 1px solid #f3f3f3;
        margin: 0px;
        margin-bottom: 15px;
        padding-bottom: 15px;
        line-height: 1;
        font-size: 18px;
        font-weight: 600;
        text-decoration: none;
        display: block;
      }
    }
    .color-pick {
      width: 10px;
      height: 10px;
      display: inline-block;
      border: 1px solid;
      margin-left: 5px;
    }
    ul {
      margin: 0;
      padding: 0;
      list-style-position: inside;
      font-size: 12px;
    }
  }
  .product-price {
    flex-basis: 27%;
    text-align: center;
    position: relative;
    &:before {
      content: "";
    }
    .price {
      color: #1e0606;
      font-size: 24px;
    }
    button {
      flex-basis: 50%;
      background: #e53935;
      cursor: pointer;
      color: #fff;
      width: 90%;
      padding: 10px 0px;
      border: none;
      font-size: 18px;
    }
  }
  &.sm {
    display: flex;
    flex-basis: calc(33% - 10px);
    flex-flow: row wrap;
    margin: 15px 5px;
    .product-image {
      flex-basis: 100%;
      display: block;
      img {
        max-width: 100%;
        width: auto;
        height: auto;
        margin: 0 auto;
        display: block;
        position: unset;
        transform: none;
      }
    }
    .product-info {
      flex-basis: 100%;
      .name {
        h3 {
          font-size: 15px;
        }
      }
      .info {
        font-size: 11px;
      }
    }
    .product-price {
      flex-basis: 100%;
      margin-bottom: 20px;
      .price {
        p {
          margin-bottom: 0px;
          margin-bottom: 10px;
        }
      }
      button {
        width: 90%;
      }
    }
  }
}
</style>