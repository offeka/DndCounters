export interface CounterModel {
    name: string;
    maxCount: number;
    currentCount: number;
    selected: boolean;
    resetOn: "ShortRest" | "LongRest";
}