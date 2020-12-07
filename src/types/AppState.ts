import {Counter} from "./Counter"

export type Mode = "edit" | "view"

export interface AppState {
    counters: Counter[];
    mode: Mode;
}