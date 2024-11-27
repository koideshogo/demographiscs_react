import { PopulationLabelType } from "./properties";

export * as PopulationProperties from "./properties";
export * as PopulationMethods from "./method";

export type Population = {
  boundaryYear: number;
  data: {
    label: PopulationLabelType;
    data: [
      {
        year: number;
        value: number;
        rate: number;
      }
    ];
  }[];
};
