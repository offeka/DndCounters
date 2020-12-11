import Vuex, {Store} from "vuex";
import {AppState} from "./types/AppState";
import {CounterModel} from "./types/CounterModel";
import Vue from "vue";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex)

const vuexPersist = new VuexPersistence<AppState>({
    storage: window.localStorage
})


const store: Store<AppState> = new Vuex.Store({
    plugins: [vuexPersist.plugin],
    state: {
        counters: [{name: "test", maxCount: 10, resetOn: "ShortRest", currentCount: 8}],
        mode: "view"
    },
    mutations: {
        increaseCounter(state, counterIndex: number) {
            if (state.counters[counterIndex].currentCount != state.counters[counterIndex].maxCount) {
                state.counters[counterIndex].currentCount++;
            }
        },
        decreaseCounter(state, counterIndex: number) {
            if (state.counters[counterIndex].currentCount != 0) {
                state.counters[counterIndex].currentCount--;
            }
        },
        longRest(state: AppState) {
            for (const counter of state.counters) {
                counter.currentCount = counter.maxCount
            }
        },
        shortRest(state: AppState) {
            for (const counter of state.counters.filter((counter) => counter.resetOn === "ShortRest")) {
                counter.currentCount = counter.maxCount
            }
        },
        addCounter(state: AppState, counter: CounterModel) {
            state.counters.push(counter)
        },
        removeCounter(state: AppState, counterIndex: number) {
            state.counters.splice(counterIndex, 1)
        },
        updateCounter(state: AppState, params: [CounterModel, number]) {
            const [newCounter, counterIndex] = params;
            Vue.set(state.counters, counterIndex, newCounter)
        },
        changeMode(state: AppState) {
            if (state.mode === "edit") {
                state.mode = "view"
            } else {
                state.mode = "edit"
            }
        }
    },
    getters: {
        counterByIndex: (state: AppState) => (index: number) => {
            return state.counters[index];
        }
    }
})

export default store