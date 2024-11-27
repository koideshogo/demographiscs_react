import React from "react";
import {SelectTypePopulationProps} from "../../../_types/population";

const SelectBox = ({options, handleChange, selectedValue} : SelectTypePopulationProps) => {
    return (
        <div>
            <select onChange={handleChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default SelectBox;