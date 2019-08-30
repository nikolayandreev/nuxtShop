<template>
  <header class="main-header">
    <div class="logo">
      <nuxt-link to="/">
        <span>
          nuxt
          <span>Shop</span>
        </span>
      </nuxt-link>
    </div>
    <nav class="navigation">
      <ul>
        <li>
          <nuxt-link to="/" exact>Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/products">Products</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.main-header {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  padding: 0px 20px;
  align-items: center;
  background: #0d47a1;
  .logo {
    flex-basis: 20%;
    font-size: 20px;
    a {
      text-decoration: none;
    }
    span {
      color: #2962ff;
      letter-spacing: -2px;
      > span {
        letter-spacing: 0px;
        color: #fff;
        font-weight: 600;
      }
    }
  }
  .navigation {
    flex-basis: 80%;
    text-align: right;
    ul {
      list-style-type: none;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      li {
        display: inline-block;
        a {
          color: #e3f2fd;
          position: relative;
          padding: 20px 15px;
          display: block;
          text-decoration: none;
          &:hover,
          &:focus,
          &.nuxt-link-active {
            background: #1a237e;
          }
        }
      }
    }
  }
}
</style>