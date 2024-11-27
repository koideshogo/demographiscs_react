import {ChangeEvent} from "react";

export type SelectTypePopulationProps = {
    handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    options: { value: number, label: string }[];
    selectedValue: number;
};