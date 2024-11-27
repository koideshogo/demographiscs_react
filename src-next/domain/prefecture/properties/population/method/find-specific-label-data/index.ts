import { Population, PopulationProperties } from "../..";

/**
 * 特定のPopulationから特定のラベルのデータを取得する
 * @param population
 * @returns
 */
export const findSpecificLabelData =
  (population: Population) =>
  (
    label: PopulationProperties.PopulationLabelType
  ): Population["data"][number] | undefined => {
    return population.data.find((data) => data.label === label);
  };
