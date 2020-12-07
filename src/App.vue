<template>
  <div id="app">
    <Counter index="0"></Counter>
  </div>
</template>

<script>

import store from "@/store.ts";
import Counter from "@/components/Counter";

export default {
  name: 'App',
  store,
  components: {Counter}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
