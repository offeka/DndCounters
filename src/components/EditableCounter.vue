<template>
  <div class="grid-container">
    <label id="counter-name">
      <input
        type="text"
        v-bind:placeholder="this.counter.name"
        v-model="counterName"
      />
    </label>
    <button
      id="increase"
      type="button"
      class="btn btn-primary rounded-circle counter-button disabled"
    >
      +
    </button>
    <label id="counter-max">
      <input
        type="number"
        v-bind:placeholder="this.counter.maxCount"
        v-model="maxCount"
      />
    </label>
    <button
      id="decrease"
      type="button"
      class="btn btn-primary rounded-circle counter-button disabled"
    >
      ─
    </button>
    <modal modal-name="confirm-modal">
      <template v-slot:modal-body class="modal-body">
        <h5>Are you sure you want to delete this counter?</h5>
      </template>
      <template v-slot:modal-footer>
        <div class="footer">
          <button
            class="btn btn-danger modal-button"
            @click="removeCounter"
            data-dismiss="modal"
          >
            Yes!
          </button>
          <button class="btn btn-dark modal-button" data-dismiss="modal">
            No
          </button>
        </div>
      </template>
    </modal>
    <button
      id="delete-button"
      class="rounded-1 btn btn-primary"
      data-toggle="modal"
      data-target="#confirm-modal"
    >
      ─
    </button>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import { CounterModel } from "@/types/CounterModel";
import { mapState } from "vuex";
import Modal from "@/components/Modal.vue";

interface EditableData {
  counterName: string;
  maxCount?: number;
  displayAlert: boolean;
}

export default (Vue as VueConstructor).extend({
  name: "EditableCounter",
  components: { Modal },
  props: { index: Number },
  data(): EditableData {
    return {
      counterName: "",
      maxCount: undefined,
      displayAlert: false,
    };
  },
  methods: {
    removeCounter(): void {
      this.$store.commit("removeCounter", this.index);
    },
  },
  computed: {
    counter: function() {
      return this.$store.getters.counterByIndex(this.index);
    },
    ...mapState(["mode"]),
  },
  watch: {
    maxCount(newValue: string, oldValue?: string) {
      if (isNaN(Number(newValue))) {
        if (!oldValue || newValue.length > oldValue.length)
          this.displayAlert = true;
      } else {
        this.maxCount = Number(newValue);
      }
    },
  },
  destroyed() {
    if (this.counter) {
      let newName: string = this.counter.name;
      if (this.counterName !== "") {
        newName = this.counterName;
      }
      let newMax: number = this.counter.maxCount;
      let newCurrent: number = this.counter.currentCount;
      if (this.maxCount !== undefined) {
        newMax = this.maxCount;
        newCurrent = this.maxCount;
      }
      const newCounter: CounterModel = {
        name: newName,
        maxCount: newMax,
        currentCount: newCurrent,
        resetOn: this.counter.resetOn,
      };
      this.$store.commit("updateCounter", [newCounter, this.index]);
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
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 16px;
  grid-column: 3;
  margin-left: 100%;
  grid-row: 2;
}

#trash-icon {
  width: 25px;
  height: 25px;
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

.counter-button {
  width: 50px;
  height: 50px;
  margin: auto;
}

.footer {
  display: flex;
  justify-content: center;
}

.btn:hover {
  background-color: #0066cc;
}

.fade-leave-active,
.fade-enter-active {
  transition: opacity 0.3s;
}

.modal-button {
  margin: 5px;
}
</style>
