<template>
    <div class="createProduct">
        <modal :header="'Create Product'" :isShow="showModal" v-if="showModal" @close="showModal = false">
            <product-form :product="product" v-on:submit-form="productAction"/>
       </modal>
    </div>
</template>
<script>
import Modal from "../../shared/Modal.vue";
import ProductForm from "./ProductForm";
export default {
  name: "createProduct",
  components: { Modal, ProductForm },
  data() {
    return {
      product: new Object(),
      showModal: false
    };
  },
  methods: {
    showModalForm: function() {
      this.showModal = true;
    },

    productAction: function(product) {
      console.log("Creating new Product", product);
      //
    }
  }
};
</script>
<style lang="scss">
</style>