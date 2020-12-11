<template>
  <div class="grid-container">
    <h1 class="display-5" id="name">{{ counter.name}}</h1>
    <button id="increase" type="button" class="btn btn-primary rounded-circle" @click="increase">+</button>
    <h1 class="display-6" id="display">{{ counter.currentCount }} / {{ counter.maxCount }}</h1>
    <button id="decrease" type="button" class="btn btn-primary rounded-circle" @click="decrease">─</button>
  </div>
</template>

<script lang="ts">
import {CounterModel} from "@/types/CounterModel";
import Vue, {VueConstructor} from "vue";

export default (Vue as VueConstructor).extend({
  name: "Counter",
  props: {index: Number},
  computed: {
    counter(): CounterModel {
      return this.$store.state.counters[this.index]
    },
  },
  methods: {
    increase: function () {
      this.$store.commit("increaseCounter", this.index)
    },
    decrease: function () {
      this.$store.commit("decreaseCounter", this.index)
    }
  }
})
</script>

<style scoped>

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

#display {
  grid-column: 2;
  grid-row: 2;
  text-align: center;
  margin: auto;
  font-size: 2rem;
}

#name {
  grid-column: 2;
  text-align: center;
  padding-top: 5px;
  font-size: 2.5rem;
}

.btn {
  height: 50px;
  width: 50px;
  margin: auto;
}
</style>