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
        <li class="nav-items">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

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
