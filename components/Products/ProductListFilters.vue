<template>
  <div class="filters">
    <h2>Филтри</h2>
    <div class="filter-group">
      <h3>Категория</h3>
      <div class="filter-items">
        <ProductListFiltersItem
          v-for="category in categories"
          :key="category"
          :val="category"
          v-model="selectedCategories"
        >
          {{category}}
        </ProductListFiltersItem>
        {{selectedCategories}}
      </div>
    </div>
    <div class="filter-group">
      <h3>Производител</h3>
      <div class="filter-items">
        <ProductListFiltersItem
          v-for="manufacturer in manufacturers"
          :key="manufacturer"
          :val="manufacturer"
          v-model="selectedManufacturers"
        >
          {{manufacturer}}
        </ProductListFiltersItem>
        {{selectedManufacturers}}
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
      selectedCategories: [],
      selectedManufacturers: []
    };
  },
  components: {
    ProductListFiltersItem
  },
  watch: {
    selectedCategories() {
      this.$store.dispatch("products/filterResults", {
        category: this.selectedCategories,
        manufacturer: this.selectedManufacturers
      });
    },
    selectedManufacturers() {
      this.$store.dispatch("products/filterResults", {
        manufacturer: this.selectedManufacturers,
        category: this.selectedCategories
      });
    }
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