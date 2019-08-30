<template>
  <div class="filter-item">
    <input
      @change="addFilters(category, filter, $event)"
      type="checkbox"
      :name="name"
      :id="filter"
      :checked="checked(category, filter)"
    >
    <label :for="filter">{{filter}}</label>
  </div>
</template>

<script>
export default {
  props: {
    filter: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    name: {
      type: String
    }
  },
  computed: {},
  methods: {
    checked(cat, val) {
      if (Object.entries(this.$route.query).length !== 0) {
        if (this.$route.query[cat]) {
          return this.$route.query[cat].includes(val);
        }
      }
    },
    addFilters(category, parameter, event) {
      if (!event.target.checked) {
        this.$emit("addFilter", {
          category: category,
          filter: parameter,
          action: "remove"
        });
      } else {
        this.$emit("addFilter", {
          category: category,
          filter: parameter,
          action: "add"
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
label {
  cursor: pointer;
}
input {
  box-shadow: 0px 0px 1px #797979;
  transition: 0.2s all;
  &:checked {
    box-shadow: 3px 0px 1px green;
    transition: 0.3s all;
  }
}
</style>