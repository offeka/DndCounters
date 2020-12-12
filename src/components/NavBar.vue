<template>
  <div id="container">
    <div id="title-container">
      <img id="logo" src="@/assets/logo.png" />
      <div id="title">{{ appTitle }}</div>
    </div>
    <div id="buttons-container">
      <button @click="changeMode" class="navbar-button">
        {{ this.$store.state.mode === "edit" ? "Save" : "Edit" }}
      </button>
      <button
        class="navbar-button"
        :class="this.$store.state.mode === 'edit' ? 'disabled' : ''"
        @click="addCounter"
      >
        Add Counter
      </button>
      <button
        class="navbar-button"
        :class="this.$store.state.mode === 'edit' ? 'disabled' : ''"
        @click="removeCounters"
      >
        Remove Selected Counters
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import store from "@/store";
export default Vue.extend({
  name: "NavBar",
  store,
  props: { appTitle: String },
  methods: {
    changeMode(): void {
      this.$store.commit("changeMode");
    },
    addCounter(): void {
      this.$store.commit("addCounter", {
        name: "new Counter",
        maxCount: 10,
        currentCount: 0,
        selected: false,
        resetOn: "ShortRest",
      });
      this.changeMode();
    },
    removeCounters(): void {
      this.$store.commit("removeSelectedCounters");
    },
  },
});
</script>

<style scoped>
#container {
  width: 100%;
  font-family: "Heebo";
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-weight: bold;
  height: 50px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  background-color: #0066cc;
}
#buttons-container,
#title-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  margin: 2%;
  height: inherit;
}

#title-container {
  width: 180px;
}

#logo {
  height: 45px;
}

#title {
  display: flex;
  align-items: center;
}

.navbar-button {
  color: white;
  transition: ease 0.3s;
  background: none;
  outline: none;
  border: none;
  height: 50px;
}

.navbar-button:hover {
  background-color: #478fd6;
  font-weight: bolder;
}

.disabled {
  background-color: #478fd6;
  pointer-events: none;
  cursor: not-allowed;
}
</style>
