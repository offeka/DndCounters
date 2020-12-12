<template>
  <div>
    <button type="button" class="btn rounded-circle btn-dark" data-toggle="modal" data-target="#exampleModal">
      Rest
    </button>

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Rests</h5>
          </div>
          <div class="modal-body">
            Choose your rest.
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="longRest">Long
              rest
            </button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="shortRest">Short
              rest
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, {VueConstructor} from "vue";
import {mapMutations} from "vuex";

export default (Vue as VueConstructor).extend({
  name: "RestButton",
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