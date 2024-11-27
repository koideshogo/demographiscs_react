import React from "react";
import {PrefectureCheckBox} from "../../../_types/prefectures";

const Index = ({ id, name, checked, handleChange }: PrefectureCheckBox) => {
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