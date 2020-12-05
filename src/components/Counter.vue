<template>
  <div class="counter md-alignment-center-center">
    <on-editable v-bind:text="this.counterName" class="counter-name" v-bind:edited="this.edited"></on-editable>
    <div class="md-layout">
      <md-button class="md-primary md-raised md-layout-item counter-button md-size-3x" v-on:click="decrease">-
      </md-button>
      <div class="md-layout-item counter-content">{{ count }}/{{ maxCount }}</div>
      <md-button class="md-primary md-raised md-layout-item counter-button md-size-3x" v-on:click="increase">+
      </md-button>
    </div>
  </div>
</template>

<script>
import OnEditable from "@/components/onEditable";

export default {
  name: "Counter",
  components: {OnEditable},
  props: {counterName: String, edited: Boolean},
  data: function () {
    return {
      count: 10,
      maxCount: 10,
    }
  },
  methods: {
    increase: function () {
      this.count++;
    },
    decrease: function () {
      this.count--;
    }
  }
}
</script>

<style scoped>
.counter {
  background-color: var(--md-theme-default-theme);
  padding: 8%;
}

.counter-name {
  color: rgba(255, 255, 255, 0.7);
  font-size: xx-large;
}

.counter-content {
  color: rgba(255, 255, 255, 0.7);
  font-size: x-large;
  text-align: center;
  padding-top: 2vh;
}
</style>