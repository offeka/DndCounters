<template>
  <md-field v-if="edited">
    <label>Counter name</label>
    <md-input v-model="currentValue"></md-input>
  </md-field>
  <div v-else class="content">
    {{ currentValue }}
  </div>
</template>

<script>
export default {
  name: "onEditable",
  props: {edited: Boolean, text: String},
  data: function () {
    return {
      currentValue: this.text
    }
  },
  watch: {
    text: function (newValue){
      this.currentValue = newValue;
    },
    edited: function (){
      console.log(this.text, this.currentValue)
      this.text = this.currentValue
    }
  }
}
</script>

<style scoped>
.content {
  padding-bottom: 100px;
}
</style>