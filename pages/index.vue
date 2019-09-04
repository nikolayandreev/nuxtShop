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
  }
};
</script>