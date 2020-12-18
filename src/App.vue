<template>
  <div id="app">
    <NavBar appTitle="D&D Counters"/>
    <CountersView class="view"></CountersView>
    <button class="floating-button btn btn-success rounded-circle" data-toggle="modal" data-target="#add-button">+
    </button>
    <counter-input></counter-input>
  </div>
</template>

<script lang="ts">
import Vue, {VueConstructor} from "vue";
import store from "@/store";
import CountersView from "@/components/CountersView.vue";
import NavBar from "@/components/NavBar.vue";
import CounterInput from "@/components/CounterInput.vue";

export default (Vue as VueConstructor).extend({
  name: "App",
  store,
  components: {CountersView, NavBar, CounterInput}
});
</script>

<style>
#app {
}

.floating-button {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 7vh;
  left: 75vw;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
}
.form-footer {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
