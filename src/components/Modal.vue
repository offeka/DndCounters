<template>
  <div class="modal fade mo" v-bind:id="modalName" tabindex="-1" role="dialog"
       aria-hidden="true">
    <div class="modal-dialog" :class="{'modal-dialog-centered': centered}" role="document">
      <div class="modal-content">
        <slot class="modal-header" name="modal-header" v-if="useHeader"></slot>
        <slot class="modal-body" name="modal-body"></slot>
        <slot name="modal-footer"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, {VueConstructor} from "vue";
import {Modal} from "bootstrap";

interface ModalData {
  modal?: Modal;
}

export default (Vue as VueConstructor).extend({
  name: "Modal",
  props: {modalName: String, useHeader: Boolean, show: Boolean, centered: Boolean},
  data(): ModalData {
    return {
      modal: undefined
    }
  },
  mounted() {
    this.modal = new Modal(this.$el)
  },
  watch: {
    show(): void {
      if (this.modal && this.show) {
        this.modal.show();
      }
      else if (this.modal && !this.show){
        this.modal.hide();
      }
    }
  }
})
</script>

<style scoped>
.modal-content {
  color: black;
  text-align: center;
}

.modal-body {
  text-align: center;
}
.modal {
  margin-top: 20px;
}
</style>