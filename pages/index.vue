<template>
  <div>
    <FeaturedProductsSlider :featuredProducts="featuredProducts" />
  </div>
</template>

<script>
import FeaturedProductsSlider from "~/components/Products/FeaturedProductsSlider";
export default {
  components: {
    FeaturedProductsSlider
  },
  computed: {
    featuredProducts() {
      return this.$store.getters["products/getFeaturedProducts"];
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
  head() {
    return {
      title: "Начало | nuxtShop",
      description: "Тестов проект изработен на nuxt.js рефлектиращ едни от основните функционалности на eCommerce"
    };
  }
};
</script>