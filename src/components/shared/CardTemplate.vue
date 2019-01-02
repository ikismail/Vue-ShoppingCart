<template>
  <div class="cardTemplate">
    <div class="card mb-4 shadow-sm">
      <img
        class="card-img-top mt-2"
        v-bind:src="item.productImage"
        alt="Card image cap"
        style="max-height: 700px; max-width: 127.135px;margin: auto"
      >
      <div class="card-body">
        <h6 class="card-text">{{item.productName}}.</h6>
        <p class="card-text">{{item.productDescription}}.</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
              v-on:click="navigateProductDetail(item)"
            >View</button>
            
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
              v-on:click="updateEditProduct(item, item._id)"
              v-if="loggedUser && loggedUser.isAdmin"
            >Edit</button>
          </div>
          <small class="text-muted footerIcons">
            <a href="javascript:;;" class="p-2">
              <i class="fa fa-heart"></i>
            </a>
            <a href="javascript:;;" class="p-2" v-on:click="addToCart(item)">
              <i class="fa fa-shopping-cart"></i>
            </a>
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import { infoToaster, successToaster } from "./service/ErrorHandler";

import _ from "lodash";
export default {
  name: "cardTemplate",
  props: ["item"],
  data() {
    return {
      showModal: false
    };
  },
  components: {},
  computed: mapState(["loggedUser"]),
  methods: {
    navigateProductDetail(product) {
      this.$router.push({
        name: "productDetails",
        params: { id: product._id }
      });
    },

    ...mapMutations(["ADD_CART_LOCAL"]),

    addToCart(product) {
      const data = _.find(this.$store.getters.cartProducts, product);
      if (data) {
        infoToaster("Already Added", "Product Already Added");
      } else {
        successToaster("Added Successfully", "Product Added Successfully");
        this.ADD_CART_LOCAL(product);
      }
    },

    // this will trigger the parentComponent function
    updateEditProduct(product, id) {
      this.$parent.editProduct(product);
    }
  },
  mounted() {}
};
</script>