<template>
  <div class="grid-container">
    <transition name="fade">
      <div class="popup" v-if="!isValidNumber" v-bind:class="{displayed: !displayAlert}">
        <div class="alert alert-danger">
          Counter max isn't a number
          <button type="button" class="btn-close btn-sm" aria-label="Close" @click="displayAlert=false">
          </button>
        </div>

      </div>
    </transition>
    <label id="counter-name">
      <input type="text" v-bind:placeholder="this.counter.name" v-model="counterName">
    </label>
    <button id="increase" type="button" class="btn btn-primary rounded-circle">+</button>
    <label id="counter-max">
      <input type="text" v-bind:placeholder="this.counter.maxCount" v-model="maxCount">
    </label>
    <button id="decrease" type="button" class="btn btn-primary rounded-circle">─</button>

  </div>
</template>

<script lang="ts">
import Vue, {VueConstructor} from "vue";
import {Mode} from "@/types/AppState"
import {Counter} from "@/types/Counter";
import {mapState} from "vuex";

export default (Vue as VueConstructor).extend({
  name: "EditableCounter",
  props: {index: Number},
  data: function () {
    return {
      counterName: "",
      maxCount: 0,
      isValidNumber: true,
      displayAlert: true
    }
  },
  computed: {
    counter(): () => Counter {
      return this.$store.getters.counterByIndex(this.index)
    },
    ...mapState(["mode"])
  },
  watch: {
    mode(newValue: Mode) {
      if (newValue == "edit") {
        const newCounter: Counter = {
          name: this.counterName,
          maxCount: this.maxCount,
          currentCount: this.maxCount,
          resetOn: this.counter().resetOn
        };
        this.$store.commit("updateCounter", newCounter)
      }
    },
    maxCount(newValue: number) {
      if (isNaN(Number(newValue))) {
        this.isValidNumber = false;
        this.displayAlert = true;
      } else {
        this.isValidNumber = true;
        this.maxCount = newValue;
      }
    }
  }
})
</script>

<style scoped>
input {
  width: 120px;
}

#counter-name {
  grid-column: 2;
  grid-row: 1;
  padding-top: 10px;
}

#increase {
  grid-column: 3;
  grid-row: 2;
  font-size: 1.4rem;
  padding-bottom: 10px;
}

#decrease {
  grid-column: 1;
  grid-row: 2;
}

#counter-max {
  grid-column: 2;
  grid-row: 2;
  padding-top: 10px;
}

.popup {
  z-index: 10;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row: 1;
  font-size: 0.95rem;
}

.btn-close {
  padding-top: initial;
}

.fade-leave-active, .fade-enter-active {
  transition: opacity .3s;
}

.fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}

.displayed {
  display: none;
}
</style>