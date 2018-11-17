<template>
    <div class="edit-product">
       <modal :header="'Edit Product'" :isShow="showModal" v-if="showModal" @close="showModal = false">
            <form id="editProduct" @submit="updateProduct">
                <p v-if="errors.length">
                  <b>Please correct the following error(s):</b>
                  <ul>
                    <li v-for="error in errors" :key="error">{{ error }}</li>
                  </ul>
                </p>

              <div class="form-group">
                <label for="productName">Product Name</label>
                <input type="email" class="form-control" id="productName" v-model="product.productName" name="productName" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="productCategory">Product Category</label>
                <select class="form-control"  v-if="product.productCategory !== 'Create New'" id="productCategory" name="productCategory" v-model="product.productCategory">
                    <option 
                      v-for="(category, index) in categories" :key="index" 
                      v-bind:value="category.productCategory" 
                      >{{category.productCategory}}
                    </option>
                </select>
                <input type="password" class="form-control" id="productCategroyDummy"  v-if="product.productCategory === 'Create New'" placeholder="Password" name="productCategroyDummy" v-model="product.productCategroyDummy">
              </div>
              <div class="form-group">
                <label for="productSeller">Product Seller</label>
                <select class="form-control"  v-if="product.productSeller !== 'Create New'" id="productSeller" name="productSeller" v-model="product.productSeller">
                    <option 
                      v-for="(seller, index) in sellers" :key="index" 
                      v-bind:value="seller.productSeller" 
                      >{{seller.productSeller}}
                    </option>
                </select>
                <input type="password" class="form-control" id="productSellerDummy"  v-if="product.productSeller === 'Create New'" placeholder="Password" name="productSellerDummy" v-model="product.productSellerDummy">
              </div>
              <div class="row">
                <div class="col">
                  <div class="form-group">
                    <label for="isBestProduct">Best Product</label>
                    <input type="checkbox" class="form-control" id="isBestProduct" name="isBestProduct" v-model="product.isBestProduct" placeholder="Password">
                  </div>
                </div>
                <div class="col">
                    <div class="form-group">
                      <label for="isTopProduct">Top Product</label>
                      <input type="checkbox" class="form-control" id="isTopProduct" name="isTopProduct" placeholder="Password" v-model="product.isTopProduct">
                    </div>
                </div>
                <div class="col">
                  <div class="form-group">
                    <label for="productRating">Product Rating</label>
                    <input type="password" class="form-control" id="productRating" placeholder="Password">
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="productImage">Product Image</label>
                <input type="text" class="form-control" id="productImage" v-model="product.productImage" placeholder="Product Image URL">
              </div>
            </form>
       </modal>
    </div>
</template>

<script>
import Modal from "../../shared/Modal";
import axios from "axios"

export default {
  name: "editProduct",
  components: { Modal },
  data() {
    return {
      product: new Object(),
      errors:[],
      productCategroyDummy: '',
      productSellerDummy: '',
      categories: [],
      sellers: [],
      showModal: false,
      loading: false
    };
  },
  methods: {
    setProduct(product) {
      this.showModal = true;
      this.product = product;
    },


    updateProduct(){

    }
  },
  mounted(){
    this.loading = true;
    axios
        .get(`${process.env.VUE_APP_BASE_URL}/products`)
        .then(response => {
          this.loading = false;
          // getting all products and getting the uniq value for
          // productCategory and returning the productCategory property only
          this.categories =  _.uniqBy(
            _.map(response.data, function(object) {
              return _.pick(object, ["productCategory"]);
            }),
            "productCategory"
          );
          this.categories.push({ productCategory: "Create New" })

          this.sellers = _.uniqBy(
            _.map(response.data, function(object) {
              return _.pick(object, ["productSeller"]);
            }),
            "productSeller"
          );

          this.sellers.push({ productSeller: "Create New" })

          console.log("categories", this.categories);
        })
        .catch(error => {
          console.log(error);
        });
  }
};
</script>

<style>
  
</style>