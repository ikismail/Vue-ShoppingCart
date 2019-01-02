<template>
  <div class="productFilter">
    <div id="prdfilter">
      <h4 class="d-flex mb-3">
        <span class="text-muted">Filters:</span>
      </h4>
      <div class="form-group createProduct" v-if="loggedUser && loggedUser.isAdmin">
        <button class="btn buttonGreen-outline" @click="openCreateModal">Create New Product</button>
      </div>
      <div class="form-group">
        <label for="filterPrdCty">By Category:</label>
        <select
          class="form-control"
          id="filterPrdCty"
          v-model="selectedCategory"
          @change="(event) => updateProductCategory(event, 'productCategory')"
        >
          <option
            v-for="(category, index) in categories"
            :key="index"
            v-bind:value="category.productCategory"
          >{{category.productCategory}}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="filterPrdSlr">By Seller:</label>
        <select
          class="form-control"
          id="filterPrdSlr"
          v-model="selectedSeller"
          @change="(event) => updateProductCategory(event, 'productSeller')"
        >
          <option
            v-for="(seller, index) in sellers"
            :key="index"
            v-bind:value="seller.productSeller"
          >{{seller.productSeller}}</option>
        </select>
      </div>
      <ul class="list-group">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Morbi leo risus</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
    <create-product ref="createProduct"/>
  </div>
</template>

<script>
import CreateProduct from "../actions/CreateProduct";
import { mapState } from "vuex";
export default {
  name: "productFilter",
  props: ["categories", "sellers"],
  components: { CreateProduct },
  computed: mapState(["loggedUser"]),
  data() {
    return {
      selectedCategory: "All",
      selectedSeller: "All",
      showCreateProductModal: false
    };
  },
  methods: {
    // This method will trigger the parent Components (Prodcuts Component) function
    updateProductCategory(event, productFilterID) {
      this.$parent.filterProductBy(event, productFilterID);
    },

    // This method will trigger the function in createProduct Component
    openCreateModal() {
      this.$refs.createProduct.showModalForm();
    }
  }
};
</script>

<style lang="scss">
.productFilter {
  #prdfilter {
    text-align: start !important;
  }
}
</style>