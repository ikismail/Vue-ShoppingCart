<template>
    <div class="top-products">
        <div class="row">
            <card-loader :loopCount=4 v-if="loading"/>
            <div class="col-md-3" 
              v-for="(item, index) in topProducts" 
              :key="index">
                    <card-template :item="item"/>
                </div>
        </div> 
    </div>
</template>

<script>
import axios from "axios";
import { errorToaster } from "../shared/service/ErrorHandler";
import CardLoader from "../shared/CardLoader";
import CardTemplate from "../shared/CardTemplate";
export default {
  name: "TopProducts",
  components: { CardLoader, CardTemplate },
  data() {
    return {
      topProducts: [],
      loading: false
    };
  },
  methods: {
    getTopProducts() {
      this.loading = true;
      axios
        .get(`${process.env.VUE_APP_BASE_URL}/top/products`)
        .then(response => {
          this.loading = false;
          this.topProducts = response.data;
        })
        .catch(error => {
          errorToaster(
            "The server encountered an unexpected condition.",
            "Internal Error 500"
          );
        });
    }
  },
  created() {
    this.getTopProducts();
  }
};
</script>

<style>
.card {
  height: 490px;
}
.card-text {
  height: 70px;
  overflow: hidden;
}
</style>
