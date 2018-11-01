import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartProducts: []
  },
  getters: {
    cartProducts: state => {
      return state.cartProducts
    }
  },
  mutations: {
    ADD_CART_LOCAL: (state, product) => {
      state.cartProducts.push(product)
      localStorage.setItem("iki-cart", JSON.stringify(state.cartProducts))
    },

    SET_CART_PRODUCTS: (state, products) => {
      state.cartProducts = []
      state.cartProducts = products
    }
  },
  actions: {}
});