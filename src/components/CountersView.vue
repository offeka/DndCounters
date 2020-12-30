<template>
  <div id="container">
    <div v-if="mode === 'view'">
      <counter
        class="counter"
        v-for="index in countersCount"
        v-bind:index="index - 1"
        :key="index"
      ></counter>
    </div>
    <div v-else>
      <editable-counter
        v-for="index in countersCount"
        :index="index - 1"
        :key="index"
      ></editable-counter>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import { mapState } from "vuex";
import EditableCounter from "@/components/EditableCounter.vue";
import Counter from "@/components/Counter.vue";

export default (Vue as VueConstructor).extend({
  name: "CountersView",
  components: { Counter, EditableCounter },
  computed: {
    countersCount(): number {
      return this.$store.state.counters.length;
    },
    ...mapState(["mode"]),
  },
});
</script>

<style scoped></style>
