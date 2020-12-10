<template>
  <div id="app">
    <button class="btn rounded-circle" @click="changeMode">edit</button>
    <CountersView></CountersView>
  </div>
</template>

<script lang="ts">
import Vue, {VueConstructor} from "vue";
import store from "@/store"
import CountersView from "@/components/CountersView.vue";

export default (Vue as VueConstructor).extend({
  name: 'App',
  store,
  components: {CountersView},
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
</style>
