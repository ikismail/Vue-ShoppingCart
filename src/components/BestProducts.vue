<template>
    <div class="best-products">
        <div class="row">
           <div class="col-md-3" v-for="(item, index) in bestProducts" :key="index">
                    <div class="card mb-4 shadow-sm">
                        <img class="card-img-top mt-2" v-bind:src="item.productImage" alt="Card image cap" style="max-height: 700px; max-width: 127.135px;margin: auto">
                        <div class="card-body">
                            <h6 class="card-text">{{item.productName}}.</h6>
                            <p class="card-text">{{item.productDescription}}.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary" v-on:click="navigateProductDetail(item)">View</button>
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
  name: "BestProducts",
  data() {
    return {
      bestProducts: []
    };
  },
  methods: {
    getBestProducts() {
      axios
        .get(`${process.env.VUE_APP_BASE_URL}/best/products`)
        .then(response => {
          this.bestProducts = response.data;
        })
        .catch(error => {
          console.log(error);
          toastr.error(
            "The server encountered an unexpected condition.",
            "Internal Error 500"
          );
        });
    },
    navigateProductDetail(product) {
      this.$router.push({
        name: "productDetails",
        params: { id: product._id }
      });
    }
  },
  mounted() {
    this.getBestProducts();
  }
};
</script>

<style>
</style>
