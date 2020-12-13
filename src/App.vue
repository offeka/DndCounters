<template>
  <div id="app">
    <NavBar appTitle="D&D Counters" />

    <CountersView class="view"></CountersView>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import store from "@/store";
import CountersView from "@/components/CountersView.vue";
import NavBar from "@/components/NavBar.vue";

export default (Vue as VueConstructor).extend({
  name: "App",
  store,
  components: { CountersView, NavBar}
});
</script>

<style>
#app {
}
</style>
