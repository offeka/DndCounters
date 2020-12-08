<template>
  <div id="app">
    <editable-counter v-bind:index="0"></editable-counter>
  </div>
</template>

<script lang="ts">
import Vue, {VueConstructor} from "vue";
import store from "@/store"
import EditableCounter from "@/components/EditableCounter.vue";

export default (Vue as VueConstructor).extend({
  name: 'App',
  store,
  components: {EditableCounter}
})
</script>

<style>
#app {
}
</style>
