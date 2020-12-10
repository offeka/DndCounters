export interface CounterModel {
    name: string;
    maxCount: number;
    currentCount: number;
    resetOn: "ShortRest" | "LongRest";
}