import Vuex from "vuex";
import Vue from "vue";
import VuexPersistence from "vuex-persist";
Vue.use(Vuex);
const vuexPersist = new VuexPersistence({
    storage: window.localStorage
});
const store = new Vuex.Store({
    plugins: [vuexPersist.plugin],
    state: {
        counters: [{ name: "test", maxCount: 10, resetOn: "ShortRest", currentCount: 8 }],
        mode: "view"
    },
    mutations: {
        increaseCounter(state, counterIndex) {
            if (state.counters[counterIndex].currentCount != state.counters[counterIndex].maxCount) {
                state.counters[counterIndex].currentCount++;
            }
        },
        decreaseCounter(state, counterIndex) {
            if (state.counters[counterIndex].currentCount != 0) {
                state.counters[counterIndex].currentCount--;
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
            Vue.set(state.counters, counterIndex, newCounter);
        },
        changeMode(state) {
            if (state.mode === "edit") {
                state.mode = "view";
            }
            else {
                state.mode = "edit";
            }
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