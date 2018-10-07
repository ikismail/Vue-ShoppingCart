<template>
  <div id="app" class="container">
    <main>
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
      </main>

    <footer class="container-fluid footer">
    <p>Developed by: <strong>Mohammed Ismail</strong>
    </p>
    <div style="float:right">
      <a href="mailto:ikismail7@gmail.com" style="margin-right:10px">
        <i class="fa fa-envelope-open" aria-hidden="true" style="font-size:20px"></i>
      </a>
      <a href="https://github.com/ikismail" target="_blank" style="margin-right:10px">
        <i class="fa fa-github" aria-hidden="true" style="font-size:20px"></i>
      </a>
      <a href="https://www.linkedin.com/in/ikismail7/" target="_blank" style="margin-right:10px">
        <i class="fa fa-linkedin" aria-hidden="true" style="font-size:20px"></i>
      </a>
    </div>
  </footer>
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

html {
  position: relative;
  min-height: 100%;
}
body {
  margin-bottom: 60px; /* Margin bottom by footer height */
}
.footer {
  position: absolute;
  bottom: 0;
  width: 1110px;
  height: 60px; /* Set the fixed height of the footer here */
  background-color: #f5f5f5;
}

footer {
    background-color: #f2f2f2;
    padding: 25px;
  }
  
.footer p, .footer div {
    display: inline;
    vertical-align: top;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 28px;
  }
  .footer p {
    font-weight: bold;
  }
</style>
