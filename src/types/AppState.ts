import {CounterModel} from "./CounterModel"

export type Mode = "edit" | "view"

export interface AppState {
    counters: CounterModel[];
    mode: Mode;
}