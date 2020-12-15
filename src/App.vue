<template>
  <div id="app">
    <NavBar appTitle="D&D Counters"/>
    <CountersView class="view"></CountersView>
    <button class="floating-button btn btn-success rounded-circle" data-toggle="modal" data-target="#add-button">+
    </button>
    <modal modal-name="add-button" :title="true">
      <template v-slot:modal-header>
        Create new button
      </template>
      <template v-slot:modal-body>
        <div class="input-group">
          <input type="text" class="form-control" placeholder="counter name" aria-label="counter name">
        </div>
      </template>
      <template v-slot:modal-footer>
        <div class="form-footer">
          <button data-toggle="modal" data-target="#add-button" class="btn btn-success">Ok</button>
          <button data-toggle="modal" data-target="#add-button" class="btn btn-dark">Close</button>
        </div>
      </template>
    </modal>
  </div>
</template>

<script lang="ts">
import Vue, {VueConstructor} from "vue";
import store from "@/store";
import CountersView from "@/components/CountersView.vue";
import NavBar from "@/components/NavBar.vue";
import Modal from "@/components/Modal.vue";

export default (Vue as VueConstructor).extend({
  name: "App",
  store,
  components: {CountersView, NavBar, Modal}
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
