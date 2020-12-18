export type RestType = "ShortRest" | "LongRest";

export interface CounterModel {
    name: string;
    maxCount: number;
    currentCount: number;
    resetOn: RestType;
}