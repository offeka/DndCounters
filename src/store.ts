import Vuex, {StoreOptions} from "vuex";
import {AppState} from "./models/AppState";
import {Counter} from "./models/Counter";


let counters: Counter[] = []

const store: StoreOptions<AppState> = new Vuex.Store({
    state: {
        counters: counters,
        mode: "view"
    },
    mutations: {
        increaseCounter(state, counterIndex: number) {
            state.counters[counterIndex].currentCount++;
        },
        decreaseCounter(state, counterIndex: number) {
            state.counters[counterIndex].currentCount--;
        },
        longRest(state: AppState) {
            for (let counter of state.counters) {
                counter.currentCount = counter.maxCount
            }
        },
        shortRest(state: AppState) {
            for (let counter of state.counters.filter((counter) => counter.resetOn === "ShortRest")) {
                counter.currentCount = counter.maxCount
            }
        },
        addCounter(state, counter: Counter) {
            state.counters.push(counter)
        },
        removeCounter(state, counterIndex: number) {
            state.counters.splice(counterIndex, 1)
        }
    },
})

export default store