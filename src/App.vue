<template>
  <div id="app">
    <md-button class="md-icon-button top-left md-raised md-mini" @click="isEditing = !isEditing">
      <md-icon>edit</md-icon>
    </md-button>
    <counter v-model="counterName" v-bind:edited="this.isEditing"></counter>
  </div>
</template>

<script>

import Counter from "@/components/Counter";

export default {
  name: 'App',
  components: {Counter},
  data: function (){
    return {
      isEditing: false,
      counterName: "Counter name"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.top-left{
  left: 44vw;

}
</style>
