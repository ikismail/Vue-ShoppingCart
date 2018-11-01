<template>
    <div class="cart-products">
        <div class="row">
          <div class="col">
            <div class="row">
              <div class="col-md-4" v-for="(item, index) in cartProducts" :key="index">
                <div class="card mb-4 shadow-sm">
                    <img class="card-img-top mt-2" v-bind:src="item.productImage" alt="Card image cap" style="max-height: 700px; max-width: 127.135px;margin: auto">
                    <div class="card-body">
                        <h6 class="card-text">{{item.productName}}.</h6>
                        <p class="card-text">{{item.productDescription}}.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                            </div>
                            <small class="text-muted footerIcons">
                                <a href="javascript:;;" class="p-2" v-on:click="removeProductCart(item)"><i class="fa fa-trash"></i></a>
                            </small>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
              <cart-calculator></cart-calculator>
          </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import CartCalculator from "./CartCalculator";
export default {
  name: "CartProducts",
  components: { CartCalculator },
  data() {
    return {};
  },
  computed: mapState(["cartProducts"]),
  methods: {
    /* Resetting the store and localstorage after removing product from cart */
    ...mapMutations(["SET_CART_PRODUCTS"]),

    removeProductCart(product) {
      const products = JSON.parse(localStorage.getItem("iki-cart"));
      for (let i = 0; i < products.length; i++) {
        if (products[i]._id === product._id) {
          products.splice(i, 1);
        }
      }
      this.SET_CART_PRODUCTS(products);
      localStorage.setItem("iki-cart", JSON.stringify(products));
    }
  },
  mounted() {}
};
</script>

<style>
</style>
