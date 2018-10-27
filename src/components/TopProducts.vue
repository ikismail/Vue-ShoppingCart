<template>
    <div class="top-products">
        <div class="row">
            <div class="col-md-3" v-for="(item, index) in topProducts" :key="index">
                    <div class="card mb-4 shadow-sm">
                        <img class="card-img-top mt-2" v-bind:src="item.productImage" alt="Card image cap" style="max-height: 700px; max-width: 127.135px;margin: auto">
                        <div class="card-body">
                            <h6 class="card-text">{{item.productName}}.</h6>
                            <p class="card-text">{{item.productDescription}}.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                </div>
                                <small class="text-muted footerIcons">
                                    <a href="javascript:;;" class="p-2"><i class="fa fa-heart"></i></a>
                                    <a href="javascript:;;" class="p-2" v-on:click="addProduct(item)"><i class="fa fa-shopping-cart"></i></a>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
        </div> 
    </div>
</template>

<script>
import axios from "axios";
import toastr from "toastr";
export default {
  name: "TopProducts",
  data() {
    return {
      topProducts: []
    };
  },
  methods: {
    getTopProducts() {
      axios
        .get("http://localhost:8080/api/top/products")
        .then(response => {
          console.log("Products", response);
          this.topProducts = response.data;
        })
        .catch(error => {
          toastr.error(
            "The server encountered an unexpected condition.",
            "Internal Error 500"
          );
        });
    }
  },
  mounted() {
    this.getTopProducts();
  }
};
</script>

<style>
.card {
  height: 490px;
}
.card-text {
  height: 70px;
  overflow: hidden;
}
</style>
