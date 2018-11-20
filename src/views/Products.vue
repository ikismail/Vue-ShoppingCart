<template>
    <div class="products">
        <div class="row">
        <div class="col-md-3 order-md-1 mb-4">

          <product-filter :categories="categories" :sellers="sellers"/>
          
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
import ProductsList from "@/components/products/ProductsList";
import CardLoader from "@/components/shared/CardLoader";
import ProductFilter from "@/components/products/filters/ProductFilter"
import axios from "axios";
import _ from "lodash";

export default {
  name: "allProducts",
  components: { ProductsList, CardLoader, ProductFilter },
  data() {
    return {
      categories: [],
      sellers: [],
      products_list: [],
      product_duplicate: [],
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
          
          this.sellers = _.uniqBy(
            _.map(this.products_list, function(object) {
              return _.pick(object, ["productSeller"]);
            }),
            "productSeller"
          );
          this.sellers.unshift({ productSeller: "All" });
        })
        .catch(error => {
          console.log(error);
        });
    },
    
    filterProductBy(event, productFilterID) {
      const productList = [...this.products_list];
      let filteredData = [];
      if (event.target.value !== "All") {
        productList.map(product => {
          if (product[productFilterID] === event.target.value) {
            filteredData.push(product);
          }
        });
        this.product_duplicate = filteredData;
      } else {
        filteredData = productList;

        this.product_duplicate = filteredData;
      }
    }
  },

  created() {
    this.getAllProducts();
  }
};
</script>

<style lang="scss">
.products {
  margin-top: 40px;
}
</style>
