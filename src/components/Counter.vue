<template>
  <div>
    <div>{{ counter.currentCount }} / {{counter.maxCount}}</div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Counter",
  props: {index: Number},
  computed: {
    counter: function () {
      return this.$store.getters.counterByIndex(this.index)
    },

  }
}
</script>

<style scoped>

</style>