<template>
    <div class="product-details">
       <div class="container">
  <div class="row mb-3">
    <div class="col-sm-4">
      <div class="product-image">
        <div class="view hm-zoom z-depth-2" style="cursor: pointer">
          <img v-bind:src="product.productImage" v-bind:alt="product.productName" class="img-fluid rounded" style="max-height: 700px; max-width: 127.135px;margin: auto">
        </div>
        <div class="" style="margin-top:15px">
          <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Product Price</h6>
              </div>
              <span class="text-muted" style="color:crimson !important">₹ {{product.productPrice}}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 class="my-0">Product Seller</h6>
              </div>
              <span class="text-muted" style="color:crimson !important">{{product.productSeller}}</span>
            </li>
          </ul>
          <button class="btn btn-primary" >Add to Cart</button>
        </div>
      </div>
    </div>
    <div class="col-sm-8">
      <div class="product-detail">
        <h5 class="product-head">Product Details</h5>
        <table class="table" cellspacing="0" style="max-height: 28px">
          <tbody>
            <tr>
              <th scope="row">Product Name</th>
              <td>{{product.productName}}</td>
            </tr>
            <tr>
              <th scope="row">Product Description</th>
              <td>{{product.productDescription}}</td>
            </tr>
            <tr>
              <th scope="row">Product Category</th>
              <td>{{product.productCategory}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
   <nav aria-label="breadcrumb ">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active " aria-current="page">Similar Products</li>
      </ol>
    </nav>
  <div class="row">
     
     <div class="col-md-3 mt-3" v-for="(item, index) in similarProduct" :key="index">
                    <div class="card mb-4 shadow-sm" style="height: 400px">
                        <img class="card-img-top mt-2" v-bind:src="item.productImage" alt="Card image cap" style="max-height: 500px; max-width: 127.135px;margin: auto">
                        <div class="card-body">
                            <h6 class="card-text">{{item.productName}}.</h6>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary"   v-on:click="navigateProductDetail(item)">View</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                </div>
                                <small class="text-muted footerIcons">
                                    <a href="javascript:;;" class="p-2"><i class="fa fa-heart"></i></a>
                                    <a href="javascript:;;" class="p-2" v-on:click="addToCart(item)"><i class="fa fa-shopping-cart"></i></a>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
  </div>
</div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "productDetail",
  data() {
    return {
      product: new Object(),
      similarProduct: []
    };
  },
  methods: {
    getSimilarProduct(productSeller) {
      axios
        .get("http://localhost:8080/api/products/similarProduct", {
          params: { productSeller: productSeller }
        })
        .then(response => {
          this.similarProduct = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    axios
      .get("http://localhost:8080/api/products/" + this.$route.params.id)
      .then(response => {
        this.product = response.data;
        this.getSimilarProduct(this.product.productSeller);
      })
      .catch(error => {
        console.log(error);
      });

    // Getting Similar Product
  }
};
</script>

<style>
.product-detail .product-head {
  padding: 10px;
  font-weight: 500;
}

.product-detail .table th {
  width: 152px;
}

.product-ship {
  height: 15rem;
}
</style>
