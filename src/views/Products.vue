<template>
    <div class="products">
        <div class="row">
        <div class="col-md-3 order-md-1 mb-4">

          <h4 class="d-flex mb-3">
            <span class="text-muted">Filters</span>
          </h4>
          <form>
            <div class="form-group">
            <label for="exampleFormControlSelect1">By Category:</label>
            <select class="form-control" id="exampleFormControlSelect1" v-model="selectedCategory" @change="filterProductByCategory">
              <option 
              v-for="(category, index) in categories" :key="index" 
              v-bind:value="category.productCategory" 
              >{{category.productCategory}}</option>
            </select>
            <span>Selected: {{ selectedCategory }}</span>
          </div>
          </form>
          <ul class="list-group">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>

        </div>
        <div class="col-md-9 order-md-2">
          <!-- <h4 class="mb-3">Billing address</h4> -->
            <products-list :products_list="products_list"></products-list>
        </div>
      </div>
    </div>
    
</template>


<script>
import ProductsList from "@/components/ProductsList.vue";
import axios from "axios";
import _ from "lodash";
export default {
  name: "allProducts",
  components: { ProductsList },
  data() {
    return {
      categories: [],
      products_list: [],
      selectedCategory: "All"
    };
  },
  methods: {
    getAllProducts() {
      axios
        .get(`${process.env.VUE_APP_BASE_URL}/products`)
        .then(response => {
          this.products_list = response.data;
          this.categories = _.uniqBy(this.products_list, "productCategory");
        })
        .catch(error => {
          console.log(error);
        });
    },
    filterProductByCategory(event) {
      console.log(event.target.value);
    }
  },

  mounted() {
    this.getAllProducts();
  }
};
</script>
<style>
.products {
  margin-top: 40px;
}
</style>
