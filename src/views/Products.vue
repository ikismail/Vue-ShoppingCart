<template>
    <div class="products">
        <div class="row">
        <div class="col-md-3 order-md-1 mb-4">

          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Filters</span>
          </h4>
          <ul class="list-group">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
          
          <div class="LI-profile-badge mt-5"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="ikismail7">
            <a class="LI-simple-link" href='https://in.linkedin.com/in/ikismail7?trk=profile-badge'><i class="fa fa-linkedin" aria-hidden="true" style="font-size:20px"></i> Mohammed Ismail</a>
          </div>

        </div>
        <div class="col-md-9 order-md-2">
          <!-- <h4 class="mb-3">Billing address</h4> -->
            <products-list></products-list>
        </div>
      </div>
    </div>
    
</template>


<script>
import ProductsList from "@/components/ProductsList.vue";

export default {
  name: "allProducts",
  components: { ProductsList },
  mounted() {}
};
</script>
<style>
.products {
  margin-top: 40px;
}
</style>
