<template>
  <div class="counter">
    <h1 class="display-5" id="name">{{ counterName }}</h1>
    <button id="decrease" type="button" class="btn btn-primary rounded-circle" @click="decrease">-</button>
    <h1 class="display-6" id="display">{{ counter.currentCount }} / {{ counter.maxCount }}</h1>
    <button id="increase" type="button" class="btn btn-primary rounded-circle" @click="increase">+</button>
  </div>
</template>

<script lang="ts">
import {Counter} from "@/types/Counter";
import Vue, {VueConstructor} from "vue";

export default (Vue as VueConstructor).extend({
  name: "Counter",
  props: {index: Number},
  computed: {
    counter(): () => Counter {
      return this.$store.getters.counterByIndex(this.index)
    },
    counterName(): () => string {
      return this.$store.getters.counterByIndex(this.index).name
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
.counter {
  display: grid;
  grid-template-columns: 50px 120px 50px;
  grid-column-gap: 15px;
  justify-content: center;
}

#increase {
  grid-column: 1;
  grid-row: 2;
}

#decrease {
  grid-column: 3;
  grid-row: 2;
}

#display {
  grid-column: 2;
  grid-row: 2;
  text-align: center;
}

#name {
  grid-column: 2;
  text-align: center;
}
</style>