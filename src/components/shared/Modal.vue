<template>
     <div class="modal edit-product showModal" id="editProduct" tabindex="-1" role="dialog" aria-labelledby="editProductLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editProductLabel">{{header}}</h5>
                        <button type="button" class="close" @click="$emit('close')" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                    <slot></slot>
                    <br>
                    </div>
                    <!-- <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="$emit('close')">Close</button>
                    </div> -->
                </div>
            </div>
        </div>
</template>
<script>
export default {
  props: ["header"],
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss">
.showModal {
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>