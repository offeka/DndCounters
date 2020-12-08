<template>
  <div class="grid-container">
    <div class="toast" ref="toast">
      <div class="toast-header">
        <strong>Invalid max Count</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    <div class="toast-body alert alert-danger" role="alert">
      <strong>Invalid max count</strong>
    </div>
    </div>
    <label id="counter-name">
      <input type="text" v-bind:placeholder="this.counter.name" v-model="counterName">
    </label>
    <button id="increase" type="button" class="btn btn-primary rounded-circle">+</button>
    <label id="counter-max">
      <input type="text" v-bind:placeholder="this.counter.maxCount" v-model="maxCount">
    </label>
    <button id="decrease" type="button" class="btn btn-primary rounded-circle">─</button>

  </div>
</template>

<script lang="ts">
import Vue, {VueConstructor} from "vue";
import {Mode} from "@/types/AppState"
import {Counter} from "@/types/Counter";
import {mapState} from "vuex";
import bootstrap from "bootstrap"

export default (Vue as VueConstructor).extend({
  name: "EditableCounter",
  props: {index: Number},
  data: function () {
    return {
      counterName: "",
      maxCount: 0,
      isValidNumber: true
    }
  },
  mounted() {
    bootstrap.Toast(this.$refs.toast)
  },
  computed: {
    counter(): () => Counter {
      return this.$store.getters.counterByIndex(this.index)
    },
    ...mapState(["mode"])
  },
  watch: {
    mode(newValue: Mode) {
      if (newValue == "edit") {
        const newCounter: Counter = {
          name: this.counterName,
          maxCount: this.maxCount,
          currentCount: this.maxCount,
          resetOn: this.counter().resetOn
        };
        this.$store.commit("updateCounter", newCounter)
      }
    },
    maxCount(newValue: number) {
      if (isNaN(Number(newValue))) {
        this.isValidNumber = false;
        console.log(this.$refs.toast)
      } else {
        this.isValidNumber = true;
        this.maxCount = newValue;
      }
    }
  }
})
</script>

<style scoped>
input {
  width: 120px;
}

#counter-name {
  grid-column: 2;
  grid-row: 1;
  padding-top: 10px;
}

#increase {
  grid-column: 3;
  grid-row: 2;
  font-size: 1.4rem;
  padding-bottom: 10px;
}

#decrease {
  grid-column: 1;
  grid-row: 2;
}

#counter-max {
  grid-column: 2;
  grid-row: 2;
  padding-top: 10px;
}

.alert {
  grid-row: 1;
  grid-column-start: 1;
  grid-column-end: 4;
  text-align: center;
}
</style>