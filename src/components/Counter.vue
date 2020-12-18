<template>
  <div class="grid-container">
    <h1 class="display-5" id="name">{{ counter.name }}</h1>
    <button
      id="increase"
      type="button"
      class="btn btn-primary rounded-circle counter-button"
      :disabled="counter.maxCount === counter.currentCount"
      @click="increase"
    >
      +
    </button>
    <h1 class="display-6" id="display">
      {{ counter.currentCount }} / {{ counter.maxCount }}
    </h1>
    <button
      id="decrease"
      type="button"
      :disabled="counter.currentCount === 0"
      class="btn btn-primary rounded-circle counter-button"
      @click="decrease"
    >
      ─
    </button>
  </div>
</template>

<script lang="ts">
import { CounterModel } from "@/types/CounterModel";
import Vue, { VueConstructor } from "vue";

export default (Vue as VueConstructor).extend({
  name: "Counter",
  props: { index: Number },
  computed: {
    counter(): CounterModel {
      return this.$store.state.counters[this.index];
    },
  },
  methods: {
    increase: function() {
      this.$store.commit("increaseCounter", this.index);
    },
    decrease: function() {
      this.$store.commit("decreaseCounter", this.index);
    },
    select: function() {
      this.$store.commit("toggleCounterSelection", this.index);
    },
  },
});
</script>

<style scoped>
#increase {
  grid-column: 3;
  font-size: 1.4rem;
  padding-bottom: 10px;
  grid-row: 2;
}

.counter-button {
  height: 50px;
  width: 50px;
  margin: auto;
}

#decrease {
  grid-column: 1;
  grid-row: 2;
}

#display {
  color: white;
  user-select: none;
  grid-column: 2;
  grid-row: 2;
  text-align: center;
  margin: auto;
  font-size: 28px;
}

#name {
  grid-column: 2;
  text-align: center;
  margin-left: -130px;
  text-overflow: ellipsis;
  overflow-x: hidden;
  align-items: center;
  color: white;
  height: 70px;
  width: 400px;
  user-select: none;
  padding-top: 5px;
  font-size: 2.5rem;
}

.btn {
  height: 50px;
  width: 50px;
  margin: auto;
}
</style>
