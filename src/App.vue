<template>
  <div id="app">
    <button class="btn rounded-circle edit-button btn-dark" @click="changeMode">
      edit
    </button>
    <button class="btn rounded-circle edit-button btn-dark" @click="addCounter">
      Add Counter
    </button>
    <button
      class="btn rounded-circle edit-button btn-dark"
      @click="removeCounters"
    >
      Remove Selected Counters
    </button>
    <CountersView class="view"></CountersView>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import store from "@/store";
import CountersView from "@/components/CountersView.vue";

export default (Vue as VueConstructor).extend({
  name: "App",
  store,
  components: { CountersView },
  methods: {
    changeMode(): void {
      this.$store.commit("changeMode");
    },
    addCounter(): void {
      this.$store.commit("addCounter", {
        name: "new Counter",
        maxCount: 10,
        currentCount: 0,
        selected: false,
        resetOn: "ShortRest",
      });
    },
    removeCounters(): void {
      this.$store.commit("removeSelectedCounters");
    },
  },
});
</script>

<style>
#app {
}
.edit-button {
  margin-left: 80vw;
}
.view {
}
</style>
