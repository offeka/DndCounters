<template>
  <div class="grid-container">
    <transition name="fade">
      <div class="popup" v-if="!isValidNumber && displayAlert">
        <div class="alert alert-danger">
          Counter max isn't a number
          <button
            type="button"
            class="btn-close btn-sm"
            aria-label="Close"
            @click="displayAlert = false"
          ></button>
        </div>
      </div>
    </transition>
    <label id="counter-name">
      <input
        type="text"
        v-bind:placeholder="this.counter.name"
        v-model="counterName"
      />
    </label>
    <button id="increase" type="button" class="btn btn-primary rounded-circle">
      +
    </button>
    <label id="counter-max">
      <input
        type="text"
        v-bind:placeholder="this.counter.maxCount"
        v-model="maxCount"
      />
    </label>
    <button id="decrease" type="button" class="btn btn-primary rounded-circle">
      ─
    </button>
    <button type="button" @click="removeCounter">remove Counter</button>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import { CounterModel } from "@/types/CounterModel";
import { mapState } from "vuex";

interface EditableData {
  counterName: string;
  maxCount?: number;
  isValidNumber: boolean;
  displayAlert: boolean;
}

export default (Vue as VueConstructor).extend({
  name: "EditableCounter",
  props: { index: Number },
  data(): EditableData {
    return {
      counterName: "",
      maxCount: undefined,
      isValidNumber: true,
      displayAlert: true,
    };
  },
  methods: {
    removeCounter: function() {
      this.$store.commit({
        type: "removeCounter",
        state: this.$store.state,
        counterIndex: this.index,
      });
    },
  },
  computed: {
    counter: function() {
      return this.$store.getters.counterByIndex(this.index);
    },
    ...mapState(["mode"]),
  },
  watch: {
    maxCountLocal(newValue: number) {
      if (isNaN(Number(newValue))) {
        this.isValidNumber = false;
        this.displayAlert = true;
      } else {
        this.isValidNumber = true;
        // eslint-disable-next-line
        this.maxCount = newValue;
      }
    },
  },
  beforeDestroy() {
    let newName: string = this.counter.name;
    if (this.counterName !== "") {
      newName = this.counterName;
    }
    let newMax: number = this.counter.maxCount;
    let newCurrent: number = this.counter.currentCount;
    if (this.maxCount !== undefined) {
      newMax = Number(this.maxCount);
      newCurrent = Number(this.maxCount);
    }
    const newCounter: CounterModel = {
      name: newName,
      maxCount: newMax,
      currentCount: newCurrent,
      resetOn: this.counter.resetOn,
    };
    this.$store.commit("updateCounter", [newCounter, this.index]);
  },
});
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
  margin-bottom: 2px;
  height: 20px;
  font-size: 0.95rem;
}

.btn-close {
  padding-top: initial;
}

.btn {
  height: 50px;
  width: 50px;
  margin: auto;
}

.fade-leave-active,
.fade-enter-active {
  transition: opacity 0.3s;
}

.fade-leave-to {
  opacity: 0;
}
</style>
