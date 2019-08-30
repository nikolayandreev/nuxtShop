<template>
  <div class="product-list-header">
    <div class="product-count">
      <span>Общо {{ productsCount }} продукта</span>
    </div>
    <div class="sort">
      <span>Сортирай по:</span>
      <select
        v-model.number="sortPrice"
        @change="sortByPrice"
      >
        <option
          value="1"
          :selected="sortPrice === 1"
        >Цена низходяща</option>
        <option
          value="2"
          :selected="sortPrice === 2"
        >Цена възходяща</option>
      </select>
    </div>
    <div class="change-view">
      <div
        :class="{'active': currentView === 'Grid'}"
        @click="changeView('Grid')"
      >
        <font-awesome-icon :icon="['fas', 'th']" />
      </div>
      <div
        :class="{'active': currentView === 'List'}"
        @click="changeView('List')"
      >
        <font-awesome-icon :icon="['fas', 'th-list']" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortPrice: 1
    };
  },
  computed: {
    currentView() {
      return this.$store.getters["products/getView"];
    },
    productsCount() {
      return this.$store.getters["products/getProductsCount"];
    }
  },
  methods: {
    changeView(view) {
      this.$store.dispatch("products/changeView", view);
    },
    sortByPrice() {
      this.$store.dispatch("products/sortByPrice", this.sortPrice);
    }
  }
};
</script>

<style lang="scss" scoped>
.product-list-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  background: #fbfbfb;
  .product-count {
    span {
      color: #c1c1c1;
      font-size: 13px;
    }
  }
  .sort {
    span {
      color: #c1c1c1;
      font-size: 13px;
    }
  }
  .change-view {
    div {
      display: inline-block;
      svg {
        width: 20px;
        height: 20px;
        color: #9fa8da;
      }
      &:first-child {
        margin-right: 10px;
      }
      &.active {
        svg {
          color: #283593;
        }
      }
    }
  }
}
</style>