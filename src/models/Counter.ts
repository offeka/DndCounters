export interface Counter {
    name: String;
    maxCount: number;
    currentCount: number;
    resetOn: "ShortRest" | "LongRest"
}