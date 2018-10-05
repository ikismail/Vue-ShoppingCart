<template>
  <div id="app" class="container">
  <nav class="navbar navbar-expand-sm bg-light mb-4" id="nav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products" class="nav-link">All Products</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/about" class="nav-link"><i class="fa fa-shopping-cart mr-1"><span class="ml-1">{{this.cartProducts.length}}</span></i> Cart</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link"> Login</router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      cartValue: 0
    };
  },
  computed: mapState(["cartProducts"]),
  methods: {},
  mounted() {}
};
</script>


<style lang="scss">
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 15px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
