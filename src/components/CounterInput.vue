<template>
  <modal modal-name="add-button" :title="true">
    <template v-slot:modal-header>
      Create new counter
    </template>
    <template v-slot:modal-body>
      <div class="input-group">
        <div class="form-group">
          <label for="counter-name" class="form-label">Counter name:</label>
          <input type="text" class="form-control counter-input" placeholder="counter name" aria-label="counter name"
                 id="counter-name" required min="1" v-model="counterName">
        </div>
        <div class="form-group">
          <label for="counter-max" class="form-label">Counter max:</label>
          <input type="number" class="form-control counter-input" placeholder="max counter" aria-label="max count"
                 id="counter-max" required min="1" v-model="counterMax">
        </div>
        <div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="rest" id="short-rest" value="ShortRest"
                   v-model="restType">
            <label class="form-check-label" for="short-rest">
              Short rest
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="rest" id="long-rest" value="LongRest" v-model="restType">
            <label class="form-check-label" for="long-rest">
              Long rest
            </label>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:modal-footer>
      <div class="form-footer">
        <button data-toggle="modal" data-target="#add-button" class="btn btn-success" @click="submit">Ok</button>
        <button data-toggle="modal" data-target="#add-button" class="btn btn-dark">Close</button>
      </div>
    </template>
  </modal>
</template>

<script lang="ts">
import Vue, {VueConstructor} from "vue";
import Modal from "@/components/Modal.vue";
import {CounterModel, RestType} from "@/types/CounterModel";

interface CounterData {
  counterName: string;
  counterMax: number;
  restType: RestType;
}

export default (Vue as VueConstructor).extend({
  name: "CounterInput",
  components: {Modal},
  data(): CounterData {
    return {
      counterName: "",
      counterMax: 0,
      restType: "ShortRest"
    }
  },
  methods: {
    submit(): void {
      const counter: CounterModel = {
        name: this.counterName,
        maxCount: this.counterMax,
        currentCount: this.counterMax,
        resetOn: this.restType
      }
      this.$store.commit("addCounter", counter)
    }
  }
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
  margin: 5px;
}
</style>