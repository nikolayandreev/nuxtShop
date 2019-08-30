<template>
  <div class="product-page">
    <div class="breadcrumb">
      <ul>
        <li>
          <nuxt-link to="/">Начало</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/products">Продукти</nuxt-link>
        </li>
        <li>
          <span class="active">{{ product.name }}</span>
        </li>
      </ul>
    </div>
    <div class="product-wrap">
      <div class="product-general">
        <h2>{{ product.name }}</h2>
        <small>ID: {{ product.id }}</small>
      </div>
      <div class="grid">
        <div class="item image">
          <img
            :src="product.picture"
            :alt="product.name"
          >
        </div>
        <div class="item info">
          <h3>Спецификация:</h3>
          <ul>
            <li>
              Активен: {{ product.isActive ? 'Да' : 'Не' }}
            </li>
            <li>
              Препоръчан: {{ product.isFeatured ? 'Да' : 'Не' }}
            </li>
            <li>
              Гаранция: {{ product.warranty }} години
            </li>
            <li>
              Производител: {{ product.manufacturer }}
            </li>
            <li>
              Категория: {{ product.category }}
            </li>
          </ul>
          <div class="price">
            <span>{{ product.price }}</span>
            <button>Купи</button>
          </div>
        </div>
        <div class="item-full">
          <h3>Описание:</h3>
          <p>{{ product.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  computed: {
    product() {
      return this.$store.getters["products/getProduct"];
    }
  },
  created() {
    this.$store.dispatch("products/findProduct", this.id);
  }
};
</script>

<style lang="scss" scoped>
.product-page {
  .breadcrumb {
    background: #f3f3f3;
    padding: 5px 30px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
      li {
        display: inline-block;
        position: relative;
        a {
          color: #888;
          text-decoration: none;
        }
        &:after {
          content: "/";
          font-size: 11px;
          vertical-align: middle;
          color: #ccc;
          margin: 0 5px;
        }
        &:last-child {
          &:after {
            content: "";
          }
        }
      }
    }
  }
  .product-wrap {
    padding: 10px 50px;
    .product-general {
      border-bottom: 1px solid #f3f3f3;
      padding-bottom: 10px;
      h2 {
        font-size: 40px;
        font-weight: 600;
        margin-bottom: 0;
      }
      small {
        color: #ccc;
      }
    }
    .grid {
      display: flex;
      flex-flow: row wrap;
      .item {
        &.image {
          border: 1px solid #f3f3f3;
          border-top: none;
        }
        &.info {
          flex-basis: 50%;
          border: 1px solid #f3f3f3;
          border-top: none;
          border-left: none;
          padding-left: 30px;
        }
        flex-basis: 50%;
        img {
          max-width: 100%;
          max-height: 100%;
          margin: 0 auto;
          width: auto;
          height: auto;
          display: block;
        }
        h3 {
          font-size: 22px;
          margin: 20px 0;
        }
        ul {
          font-size: 17px;
          font-weight: 300;
          line-height: 25px;
          padding: 0;
          margin: 0;
          list-style-type: none;
          li {
            border-bottom: 1px solid #f3f3f3;
            padding-bottom: 10px;
            margin-bottom: 10px;
            &:last-child {
              margin-bottom: 0;
            }
          }
        }
        .price {
          display: flex;
          flex-flow: row nowrap;

          span {
            flex-basis: 50%;
            text-align: left;
            color: red;
            font-size: 30px;
            font-weight: 300;
          }
          button {
            flex-basis: 50%;
            background: red;
            color: #fff;
            padding: 10px 0;
            border: none;
            font-size: 21px;
          }
        }
      }
      .item-full {
        padding: 30px;
        border: 1px solid #f3f3f3;
        border-top: none;
        flex-basis: 100%;
        p {
          font-size: 17px;
          font-weight: 300;
          line-height: 25px;
        }
      }
    }
  }
}
</style>