<template>
    <div class="products">
        <div class="row">
        <div class="col-md-3 order-md-1 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Filters</span>
          </h4>
          
        </div>
        <div class="col-md-9 order-md-2">
          <h4 class="mb-3">Billing address</h4>
            <products-list></products-list>
        </div>
      </div>
    </div>
</template>


<script>

import ProductsList from "@/components/ProductsList.vue"

export default {
  name: "allProducts",
  components: {ProductsList}
};
</script>
