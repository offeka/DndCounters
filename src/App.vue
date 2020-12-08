<template>
  <div id="app">
    <Counter v-bind:index="0"></Counter>
  </div>
</template>

<script lang="ts">
import Vue, {VueConstructor} from "vue";
import store from "@/store"
import Counter from "@/components/Counter.vue";

export default (Vue as VueConstructor).extend({
  name: 'App',
  store,
  components: {Counter}
})
</script>

<style>
#app {
}
</style>
