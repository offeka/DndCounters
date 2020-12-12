<template>
  <div id="app">
    <RestButton></RestButton>
    <button class="btn rounded-circle edit-button btn-dark" @click="changeMode">edit</button>
    <CountersView class="view"></CountersView>
  </div>
</template>

<script lang="ts">
import Vue, {VueConstructor} from "vue";
import store from "@/store"
import CountersView from "@/components/CountersView.vue";
import RestButton from "@/components/RestButton.vue";

export default (Vue as VueConstructor).extend({
  name: 'App',
  store,
  components: {CountersView, RestButton},
  methods: {
    changeMode(): void {
      this.$store.commit("changeMode")
    }
  }
})
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
