import React from "react";

interface SelectBoxProps {
    value: string;
    options: string[];
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectBox = ({props} : SelectBoxProps) => {
    return (
        <div>
            <select onChange={props.handleChange} value={props.value}>
                {props.options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default SelectBox;