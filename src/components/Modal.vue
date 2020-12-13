<template>
  <div class="modal fade" v-bind:id="modalName" tabindex="-1" role="dialog"
       aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content display-6">
        <slot class="modal-body" name="modal-body">
        </slot>
        <slot name="modal-footer">
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, {VueConstructor} from "vue";

export default (Vue as VueConstructor).extend({
  name: "Modal",
  props: {modalName: String}
})
</script>

<style scoped>
.modal-content {
  text-align: center;
}
</style>