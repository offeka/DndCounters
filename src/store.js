import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);
const counters = [{ name: "test", maxCount: 10, currentCount: 10, resetOn: "LongRest" }];
const store = new Vuex.Store({
    state: {
        counters: counters,
        mode: "view"
    },
    mutations: {
        increaseCounter(state, counterIndex) {
            const currentCounter = state.counters[counterIndex];
            if (currentCounter.currentCount != currentCounter.maxCount) {
                currentCounter.currentCount++;
            }
        },
        decreaseCounter(state, counterIndex) {
            const currentCounter = state.counters[counterIndex];
            if (currentCounter.currentCount != 0) {
                currentCounter.currentCount--;
            }
        },
        longRest(state) {
            for (const counter of state.counters) {
                counter.currentCount = counter.maxCount;
            }
        },
        shortRest(state) {
            for (const counter of state.counters.filter((counter) => counter.resetOn === "ShortRest")) {
                counter.currentCount = counter.maxCount;
            }
        },
        addCounter(state, counter) {
            state.counters.push(counter);
        },
        removeCounter(state, counterIndex) {
            state.counters.splice(counterIndex, 1);
        },
        updateCounter(state, params) {
            const [newCounter, counterIndex] = params;
            state.counters[counterIndex] = newCounter;
        }
    },
    getters: {
        counterByIndex: (state) => (index) => {
            return state.counters[index];
        }
    }
});
export default store;
//# sourceMappingURL=store.js.map