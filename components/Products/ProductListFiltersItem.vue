<template>
  <div class="filter-item">
    <label>
      <input
        type="checkbox"
        :value="val"
        v-model="checked"
        @change="onChange"
      />
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  props: ["value", "val"],
  data() {
    return {
      checkedProxy: null
    };
  },
  computed: {
    checked: {
      get() {
        return this.value;
      },
      set(val) {
        this.checkedProxy = val;
      }
    }
  },
  methods: {
    onChange: function(e) {
      this.$emit("input", this.checkedProxy);
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