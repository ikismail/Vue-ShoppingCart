import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      { name: "Product 1" },
      { name: "Product 2" },
      { name: "Product 3" },
      { name: "Product 4" },
      { name: "Product 5" },
      { name: "Product 6" },
      { name: "Product 7" }
    ],

    cartProducts: []
  },
  mutations: {
    ADD_CART_LOCAL: (state, product) => {
      state.cartProducts.push(product);
      localStorage.setItem("iki-cart", state.cartProducts);
    }
  },
  actions: {},
  mounted() {}
});
