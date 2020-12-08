import Vuex, {Store} from "vuex";
import {AppState} from "./types/AppState";
import {Counter} from "./types/Counter";


const counters: Counter[] = [{name: "test", maxCount: 10, currentCount: 10, resetOn: "LongRest"}]

const store: Store<AppState> = new Vuex.Store({
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
            for (const counter of state.counters) {
                counter.currentCount = counter.maxCount
            }
        },
        shortRest(state: AppState) {
            for (const counter of state.counters.filter((counter) => counter.resetOn === "ShortRest")) {
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
    getters: {
        counterByIndex: (state: AppState) => (index: number) =>{
            return state.counters[index];
        }
    }
})

export default store