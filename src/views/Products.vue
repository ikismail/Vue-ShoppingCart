<template>
    <div class="products">
        <div class="row">
        <div class="col-md-3 order-md-1 mb-4 filters">

          <h4 class="d-flex mb-3">
            <span class="text-muted">Filters: </span>
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
            <card-loader :loopCount=8 v-if="loading"/>
            <products-list :products_list="product_duplicate" />
        </div>
      </div>
    </div>
    
</template>


<script>
import ProductsList from "@/components/ProductsList.vue";
import CardLoader from "@/components/shared/CardLoader.vue";
import axios from "axios";
import _ from "lodash";

export default {
  name: "allProducts",
  components: { ProductsList, CardLoader },
  data() {
    return {
      categories: [],
      products_list: [],
      product_duplicate: [],
      selectedCategory: "All",
      loading: false
    };
  },
  methods: {
    getAllProducts: function() {
      this.loading = true;
      axios
        .get(`${process.env.VUE_APP_BASE_URL}/products`)
        .then(response => {
          this.loading = false;
          this.products_list = response.data;
          this.product_duplicate = response.data;
          // getting all products and getting the uniq value for
          // productCategory and returning the productCategory property only
          this.categories = _.uniqBy(
            _.map(this.products_list, function(object) {
              return _.pick(object, ["productCategory"]);
            }),
            "productCategory"
          );
          this.categories.unshift({ productCategory: "All" });
          console.log("categories", this.categories);
        })
        .catch(error => {
          console.log(error);
        });
    },
    filterProductByCategory(event) {
      console.log(event.target.value);
      const productList = [...this.products_list];
      let filteredData = [];
      if (event.target.value !== "All") {
        productList.map(product => {
          if (product.productCategory === event.target.value) {
            filteredData.push(product);
          }
        });
        this.product_duplicate = filteredData;
      } else {
        filteredData = productList;

        this.product_duplicate = filteredData;
      }

      console.log("Filtered Data", filteredData);
    }
  },

  mounted() {
    this.getAllProducts();
  }
};
</script>

<style lang="scss">
.products {
  margin-top: 40px;
  .filters {
    text-align: start;
  }
}
</style>
