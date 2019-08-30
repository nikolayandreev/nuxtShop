<template>
  <div class="filters">
    <h2>Филтри</h2>
    <div class="filter-group">
      <h3>Категория</h3>
      <div class="filter-items">
        <ProductListFiltersItem
          @addFilter="modifyFilters($event)"
          v-for="category in categories"
          :filter="category"
          category="category"
          :key="category"
        />
      </div>
    </div>
    <div class="filter-group">
      <h3>Производител</h3>
      <div class="filter-items">
        <ProductListFiltersItem
          @addFilter="modifyFilters($event)"
          v-for="manufacturer in manufacturers"
          :filter="manufacturer"
          category="manufacturer"
          :key="manufacturer"
        />
      </div>
    </div>
    <div class="filter-group">

    </div>
  </div>
</template>

<script>
import ProductListFiltersItem from "~/components/Products/ProductListFiltersItem";

export default {
  data() {
    return {
      manufacturers: [],
      categories: [],
      filteredCategories: [],
      filteredManufacturers: []
    };
  },
  components: {
    ProductListFiltersItem
  },
  computed: {
    products() {
      return this.$store.getters["products/getAllProducts"];
    }
  },
  methods: {
    getManufacturers() {
      for (let key in this.products) {
        this.manufacturers.push(this.products[key].manufacturer);
      }

      this.manufacturers = this.manufacturers.filter(
        (elem, index, self) => self.indexOf(elem) === index
      );
    },
    getCategories() {
      for (let key in this.products) {
        this.categories.push(this.products[key].category);
      }

      this.categories = this.categories.filter(
        (elem, index, self) => self.indexOf(elem) === index
      );
    },
    modifyFilters(event) {
      if (event.action !== "remove") {
        this.$store.dispatch("products/addFilterItem", {
          elem: event.filter,
          category: event.category
        });
      } else {
        this.$store.dispatch("products/removeFilterItem", {
          elem: event.filter,
          category: event.category
        });
      }
      this.$store.dispatch("products/filterProducts", event.category);
    }
  },
  created() {
    this.getManufacturers();
    this.getCategories();
  }
};
</script>

<style lang="scss" scoped>
.filters {
  h2 {
    margin-top: 5px;
  }
  .filter-group {
    h3 {
      font-size: 16px;
      color: #7986cb;
    }
    border-bottom: 1px solid #f3f3f3;
    padding-bottom: 10px;
    .filter-items {
      max-height: 150px;
      overflow-y: scroll;
      .filter-item {
        margin-bottom: 3px;
        border-bottom: 1px solid #fbfbfb;
        color: #575757;
        display: block;
      }
    }
  }
}
</style>