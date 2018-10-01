<template>
    <div class="best-products">
        <div class="row">
            <div class="col-12">
                <div class="d-flex bd-highlight">
                    <swiper :options="swiperOption">
                        <swiper-slide v-for="(item, index) in products" :key="index">
                            <div class="p-2 flex-fill bd-highlight" >
                                <div class="card shadow-sm p-3 mb-5 bg-white rounded" style="width: 18rem; padding:10px" >
                                    <img class="card-img-top" src="https://via.placeholder.com/180x100" alt="Card image cap">
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "BestProducts",
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        autoplay: {
          delay: 5000
        },
        spaceBetween: -200,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
  computed: mapState(["products"])
};
</script>

<style lang="sass">

</style>
