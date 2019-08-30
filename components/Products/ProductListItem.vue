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
      <img
        :src="product.picture"
        :alt="product.name"
      />
    </div>

    <div class="product-info">
      <div class="name">
        <h3>{{ product.name }}</h3>
      </div>
      <ul class="info">
        <li class="category">Категория: {{ product.category }}</li>
        <li class="manufacturer">Производител: {{ product.manufacturer }}</li>
        <li class="color">Цвят: {{ product.color }}</li>
      </ul>
    </div>

    <div class="product-price">
      <div class="price">
        <p>{{ product.price }}</p>
      </div>
      <button class="view-more">
        Виж повече
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  computed: {
    layout() {
      return this.$store.getters["products/getView"];
    }
  }
};
</script>

<style scoped lang="scss">
.product-item {
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
    img {
      max-width: 100%;
    }
  }
  .product-info {
    border-right: 1px solid #f3f3f3;
    margin: 5px 0px;
    padding: 10px 5px;
    flex-basis: 53%;
    .name {
      margin-bottom: 15px;
      h3 {
        color: #7986cb;
        border-bottom: 1px solid #f3f3f3;
        margin: 0px;
        padding-bottom: 15px;
        line-height: 1;
      }
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
      color: #e53935;
      font-size: 24px;
    }
    .view-more {
      border: none;
      outline: none;
      padding: 10px 15px;
      font-weight: bolder;
      text-transform: uppercase;
      box-shadow: none;
      background: white;
      border: 1px solid #0d47a1;
      color: #0d47a1;
      transition: 0.2s all;
      cursor: pointer;
      &:hover,
      &:focus {
        background: #0d47a1;
        border: 1px solid #fff;
        color: #fff;
        transition: 0.3s all;
      }
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