<template>
  <div>
    <button type="button" class="btn rounded-circle btn-dark" data-toggle="modal" data-target="#rest-modal">
      Rest
    </button>
    <modal modal-name="rest-modal">
      <template v-slot:modal-body>
          Choose your rest type
      </template>
      <template v-slot:modal-footer>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal" @click="longRest">Long
            rest
          </button>
          <button type="button" class="btn btn-primary" data-dismiss="modal" @click="shortRest">Short
            rest
          </button>
        </div>
      </template>
    </modal>
  </div>
</template>

<script lang="ts">
import Vue, {VueConstructor} from "vue";
import {mapMutations} from "vuex";
import Modal from "@/components/Modal.vue";

export default (Vue as VueConstructor).extend({
  name: "RestButton",
  components: {Modal},
  methods: {
    ...mapMutations(["longRest", "shortRest"])
  }
})
</script>

<style scoped>
.modal-footer {
  display: flex;
  justify-content: center;
}
</style>