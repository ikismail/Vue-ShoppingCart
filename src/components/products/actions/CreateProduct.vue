<template>
    <div class="createProduct">
        <modal :header="'Create Product'" :isShow="showModal" v-if="showModal" @close="showModal = false">
            <product-form :product="product" />
       </modal>
    </div>
</template>
<script>
    import Modal from "../../shared/Modal.vue"
    import ProductForm from "./ProductForm"
    export default {
        name: 'createProduct',
        components: {Modal, ProductForm},
        data(){
            return {
                product: new Object(),
                showModal: false
            }
        },
        methods: {

            showModalForm() {
                this.showModal = true;
            },

            actionProduct(product){
                console.log('Triggering Edit Action Product')
                // 
            }
        }
    }
</script>
<style lang="scss">
    
</style>