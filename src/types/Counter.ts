export interface Counter {
    name: string;
    maxCount: number;
    currentCount: number;
    resetOn: "ShortRest" | "LongRest";
}