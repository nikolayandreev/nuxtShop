<template>
  <div class="featured-slider">
    <h2>Препоръчани продукти</h2>
    <no-ssr>
      <carousel>
        <FeaturedProductsSliderItem
          v-for="prod of featuredProducts"
          :key="prod.id"
          :product="prod"
        />
      </carousel>
    </no-ssr>
  </div>
</template>
    
<script>
import FeaturedProductsSliderItem from "~/components/Products/FeaturedProductsSliderItem.vue";

export default {
  props: ["featuredProducts"],
  components: {
    FeaturedProductsSliderItem
  }
};
</script>

<style lang="scss">
.featured-slider {
  max-width: 90%;
  margin: 20px auto;
}
</style>