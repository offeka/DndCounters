<template>
  <div>
    <div>{{ counter.currentCount }} / {{ counter.maxCount }}</div>
  </div>
</template>

<script lang="ts">
import {Counter} from "@/types/Counter";
import Vue, {VueConstructor} from "vue";

export default (Vue as VueConstructor).extend({
  name: "Counter",
  props: {index: Number},
  computed: {
    counter(): () => Counter {
      return this.$store.getters.counterByIndex(0)
    },

  }
})
</script>

<style scoped>

</style>