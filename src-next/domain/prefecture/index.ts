import { Population } from "./properties";
export * as PrefectureProperties from "./properties";
export * as PrefectureMethod from "./method";

export type Prefecture = {
  prefCode: number;
  prefName: string;
  population: Population;
  selected: boolean;
};
