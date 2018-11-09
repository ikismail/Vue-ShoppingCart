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
    
</template>


<script>
import { mapState, mapActions, mapMutations } from "vuex";
import axios from "axios";
export default {
  name: "productslist",
  props: ["products_list"],
  data() {
    return {
      selectedProduct: Object
    };
  },
  methods: {
    ...mapMutations(["ADD_CART_LOCAL"]),
    addToCart(product) {
      this.ADD_CART_LOCAL(product);
    },

    navigateProductDetail(product) {
      this.$router.push({
        name: "productDetails",
        params: { id: product._id }
      });
    }
  },
  mounted() {}
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
