<template>
    <div class="products">
           <div class="row">
                <div class="col-md-4" v-for="(item, index) in products_list" :key="index">
                   <card-template :item="item"/>
                </div>
           </div>
    </div>
</template>


<script>
import { mapState, mapActions, mapMutations } from "vuex";
import axios from "axios";
import CardTemplate from "./shared/CardTemplate.vue";
export default {
  name: "productslist",
  props: ["products_list"],
  components: { CardTemplate },
  data() {
    return {
      selectedProduct: Object
    };
  },
  methods: {
    ...mapMutations(["ADD_CART_LOCAL"]),
    addToCart(product) {
      this.ADD_CART_LOCAL(product);
    }
  },
  mounted() {}
};
</script>

<style>
.footerIcons {
  font-size: 95%;
}

.card {
  height: 490px;
}
.card-text {
  height: 70px;
  overflow: hidden;
}
</style>
