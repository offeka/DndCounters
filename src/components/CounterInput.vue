<template>
  <modal modal-name="add-button" :title="true">
    <template v-slot:modal-header>
      Create new button
    </template>
    <template v-slot:modal-body>
      <div class="input-group">
        <div class="form-group">
          <label for="counter-name" class="col-form-label">Counter name:</label>
          <input type="text" class="form-control counter-input" placeholder="counter name" aria-label="counter name"
                 id="counter-name">
        </div>
        <div class="form-group">
          <label for="counter-max" class="col-form-label">Counter max:</label>
          <input type="text" class="form-control counter-input" placeholder="max counter" aria-label="max count"
                 id="counter-max">
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="short-rest">
          <label for="short-rest">Short rest</label>
          <input type="checkbox" class="form-check-input" id="long-rest">
          <label for="long-rest">Long rest</label>
        </div>
      </div>
    </template>
    <template v-slot:modal-footer>
      <div class="form-footer">
        <button data-toggle="modal" data-target="#add-button" class="btn btn-success">Ok</button>
        <button data-toggle="modal" data-target="#add-button" class="btn btn-dark">Close</button>
      </div>
    </template>
  </modal>
</template>

<script lang="ts">
import Vue, {VueConstructor} from "vue";
import Modal from "@/components/Modal.vue";

export default (Vue as VueConstructor).extend({
  name: "CounterInput",
  components: {Modal}
})
</script>

<style scoped>
.input-group {
  display: flex;
  text-align: left;
  margin-left: 20px;
  margin-right: 20px;
  width: auto;
}

.form-group {
  width: 100%;
}

#counter-max {
  margin: auto;
}

#counter-name {
  margin: auto;
}

.btn {
  margin-right: 5px;
  margin-left: 5px;
  margin-top: 5px;
}
</style>