<template>
  <div class="editable">
    <md-field v-if="edited" class="no-margin">
      <label>Counter name</label>
      <md-input v-model="currentValue" class="no-margin md-alignment-center-center"></md-input>
    </md-field>
    <div v-else class="content">
      {{ currentValue }}
    </div>
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
    text: function (newValue) {
      this.currentValue = newValue;
    },
    edited: function () {
      this.text = this.currentValue
      this.$emit("text-changed", this.text)
    }
  }
}
</script>

<style scoped>
.content {
  padding-bottom: 0;
  text-align: center;
  width: auto;
  height: auto;
}

.no-margin {
  margin: 0;
}
.editable {
  width: 100%;
  height: 5vh;
  margin-bottom: 1vh;
}
</style>