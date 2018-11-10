<template>
    <div class="best-products">
        <div class="row">
          <card-loader :loopCount=4 v-if="loading"/>
           <div class="col-md-3" v-for="(item, index) in bestProducts" :key="index">
                    <card-template :item="item"/>
                </div>
        </div> 
    </div>
</template>

<script>
import axios from "axios";
import toastr from "toastr";
import CardLoader from "./shared/CardLoader.vue";
import CardTemplate from "./shared/CardTemplate.vue";
export default {
  name: "BestProducts",
  components: { CardLoader, CardTemplate },
  data() {
    return {
      bestProducts: [],
      loading: false
    };
  },
  methods: {
    getBestProducts() {
      this.loading = true;
      axios
        .get(`${process.env.VUE_APP_BASE_URL}/best/products`)
        .then(response => {
          this.loading = false;
          this.bestProducts = response.data;
        })
        .catch(error => {
          console.log(error);
          toastr.error(
            "The server encountered an unexpected condition.",
            "Internal Error 500"
          );
        });
    }
  },
  mounted() {
    this.getBestProducts();
  }
};
</script>

<style>
.best-products {
  margin-bottom: 10px;
}
</style>
