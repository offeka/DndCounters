<template>
  <div class="grid-container" v-bind:class="deleted ? 'deleted' : ''">
    <transition name="fade">
      <div class="popup" v-if="displayAlert || !isValidNumber">
        <div class="alert alert-danger">
          {{
            !isValidNumber
              ? "Counter max isn't a number"
              : "Are you sure you want to delete this counter?"
          }}
          <div v-if="isValidNumber">
            <button
              @click="removeCounter"
              type="button"
              class="btn"
              aria-label="confirm"
            >
              👍
            </button>
            <button
              type="button"
              class="btn"
              aria-label="Close"
              @click="displayAlert = false"
            >
              👎
            </button>
          </div>
          <div v-else>
            <button
              type="button"
              class="btn-close btn-sm"
              aria-label="Close"
              @click="displayAlert = false"
            ></button>
          </div>
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
    <button @click="displayAlert = true" id="delete-button">X</button>
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
  deleted: boolean;
}

export default (Vue as VueConstructor).extend({
  name: "EditableCounter",
  props: { index: Number },
  data(): EditableData {
    return {
      counterName: "",
      maxCount: undefined,
      isValidNumber: true,
      displayAlert: false,
      deleted: false,
    };
  },
  methods: {
    removeCounter: function() {
      this.deleted = true;
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
        this.maxCount = newValue;
      }
    },
  },
  beforeDestroy() {
    if (!this.deleted && this.counter) {
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
        selected: this.counter.selected,
        resetOn: this.counter.resetOn,
      };
      this.$store.commit("updateCounter", [newCounter, this.index]);
    } else {
      this.$store.commit("removeCounter", this.index);
    }
  },
});
</script>

<style scoped>
input {
  width: 120px;
}

#delete-button {
  border: none;
  color: white;
  font-weight: bold;
  background-color: #0066cc;
  padding: 20px;
  border-radius: 100%;
  display: flex;
  grid-column: 2;
  grid-row: 1;
  justify-content: center;
  outline: none;
  align-items: center;
  width: fit-content;
  transition: ease 0.3s;
}

#delete-button:hover {
  color: black;
  background-color: red;
}

.deleted {
  opacity: 0;
  visibility: hidden;
  display: none;
}

#counter-name {
  grid-column: 2;
  grid-row: 2;
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
  grid-row: 3;
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
  border: solid 1px #0066cc;
}

<<<<<<< head ======= .btn:hover {
  background-color: #0066cc;
}

>>>>>>>1b1edfc4e211e5258c74678ae906aab657fa70ce .fade-leave-active,
.fade-enter-active {
  transition: opacity 0.3s;
}

.fade-leave-to {
  opacity: 0;
}
</style>
