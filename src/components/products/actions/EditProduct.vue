<template>
    <div class="edit-product">
       <modal :header="'Edit Product'" :isShow="showModal" v-if="showModal" @close="showModal = false">
            <product-form :product="product" />
       </modal>
    </div>
</template>

<script>
import Modal from "../../shared/Modal";
import ProductForm from './ProductForm'

export default {
  name: "editProduct",
  components: { Modal, ProductForm },
  data() {
    return {
      product: new Object(),
      showModal: false
    };
  },
  methods: {
    
    setProduct(product) {
      this.showModal = true;
      this.product = product;
    },

    actionProduct(product){
      console.log('Triggering Edit Action Product')
        // Update the product to server
    }
  }
};
</script>

<style>
  
</style>