import React from "react";

interface SelectBoxProps {
    options: { value: number, label: string }[];
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectBox = ({props} : SelectBoxProps) => {
    return (
        <div>
            <select onChange={props.handleChange} value={props.value}>
                {props.options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default SelectBox;