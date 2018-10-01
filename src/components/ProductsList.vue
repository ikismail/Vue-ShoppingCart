<template>
    <div class="products">
           <div class="row">
                <div class="col-md-4" v-for="(item, index) in products" :key="index">
                    <div class="card mb-4 shadow-sm">
                        <img class="card-img-top" src="https://via.placeholder.com/225x120" alt="Card image cap">
                        <div class="card-body">
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                </div>
                                <small class="text-muted">9 mins</small>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
    </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  name: "productslist",
  computed: mapState(["products"])
};
</script>

<style lang="sass">

</style>
