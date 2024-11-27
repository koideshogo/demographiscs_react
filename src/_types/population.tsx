import { ChangeEvent } from "react";

export type SelectTypePopulationProps = {
  handleChangeNext: (graphType: 0 | 1 | 2 | 3) => void;
  handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  options: { value: number; label: string }[];
  selectedValue: number;
};
