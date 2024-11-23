import React from "react";

interface CheckBoxProps {
    id: string;
    name: string;
    checked: boolean;
    label: string;
    handleChange: () => (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Index = ({id, name, checked, handleChange}: CheckBoxProps) => {
    return (
        <input
            type="checkbox"
            id={id}
            name={name}
            checked={checked}
            onChange={handleChange}
        />
    );
}

export default Index;