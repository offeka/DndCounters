import Vuex, {Store} from "vuex";
import {AppState} from "./types/AppState";
import {Counter} from "./types/Counter";
import Vue from "vue";

Vue.use(Vuex)


const counters: Counter[] = [{name: "test", maxCount: 10, currentCount: 10, resetOn: "LongRest"}]

const store: Store<AppState> = new Vuex.Store({
    state: {
        counters: counters,
        mode: "view"
    },
    mutations: {
        increaseCounter(state, counterIndex: number) {
            const currentCounter = state.counters[counterIndex];
            if (currentCounter.currentCount != currentCounter.maxCount) {
                currentCounter.currentCount++;
            }
        },
        decreaseCounter(state, counterIndex: number) {
            const currentCounter = state.counters[counterIndex];
            if (currentCounter.currentCount != 0) {
                currentCounter.currentCount--;
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
        addCounter(state: AppState, counter: Counter) {
            state.counters.push(counter)
        },
        removeCounter(state: AppState, counterIndex: number) {
            state.counters.splice(counterIndex, 1)
        },
        updateCounter(state: AppState, params: [Counter, number]) {
            const [newCounter, counterIndex] = params;
            state.counters[counterIndex] = newCounter;
        }
    },
    getters: {
        counterByIndex: (state: AppState) => (index: number) => {
            return state.counters[index];
        }
    }
})

export default store