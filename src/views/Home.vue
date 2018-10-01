<template>
  <div class="home">

    <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <img alt="Vue logo" src="../assets/logo.png">
          <h1 class="display-4">Fluid jumbotron</h1>
          <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
    </div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">Our Best Products</li>
      </ol>
    </nav>
    <BestProducts></BestProducts>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active " aria-current="page">Our Top Products</li>
      </ol>
    </nav>
    <TopProducts></TopProducts>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import BestProducts from '@/components/BestProducts.vue'
import TopProducts from '@/components/TopProducts.vue'
export default {
  name: 'home',
  components: {
    HelloWorld, BestProducts, TopProducts
  }
}
</script>
