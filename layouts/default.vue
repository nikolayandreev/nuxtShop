<template>
  <div class="main">
    <Header></Header>
    <nuxt />
  </div>
</template>

<script>
import Header from "~/components/core/Header";
export default {
  components: {
    Header
  }
};
</script>

<style lang="scss">
body,
html {
  margin: 0;
  padding: 0;
  max-width: 100%;
}
.main {
  padding-top: 59px;
}
body {
  overflow-x: hidden;
  * {
    box-sizing: border-box;
  }
  p,
  strong,
  span,
  em,
  ul,
  ol,
  li,
  div,
  a {
    font-family: "Montserrat Alternates", sans-serif;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "M PLUS Rounded 1c", sans-serif;
  }
}
</style>