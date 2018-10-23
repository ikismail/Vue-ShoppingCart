<template>
    <div class="products">
           <div class="row">
                <div class="col-md-4" v-for="(item, index) in products_list" :key="index">
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
import { mapState, mapActions, mapMutations } from "vuex";
import axios from "axios";
export default {
  name: "productslist",
  data() {
    return {
      products_list: []
    };
  },
  methods: {
    getAllProducts() {
      axios
        .get("http://localhost:8080/api/products")
        .then(response => {
          console.log("Products", response);
          this.products_list = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    addProduct(product) {
      console.log("Adding Product", product);
    }
  },
  mounted() {
    this.getAllProducts();
  }
};
</script>

<style>
.footerIcons {
  font-size: 95%;
}

.card {
  height: 490px;
}
.card-text {
  height: 70px;
  overflow: hidden;
}
</style>
