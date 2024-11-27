import React, {ChangeEvent} from "react";

export type SelectTypePopulationProps = {
    handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string, label: string }[];
    selectedValue: string;
};