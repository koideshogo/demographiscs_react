import Index from "../atoms/checkBox";
import Label from "../atoms/label";
import React from "react";

const PrefectureCheckBox: React.FC<Props> = ({ prefectureCheckBoxInfo }) => {
    return (
        <>
            {prefectureCheckBoxInfo.map((info) => (
                <div key={info.id}>
                    <Label htmlFor={info.id} label={info.label} />
                    <Index key={info.id} {...info} />
                </div>
            ))}
        </>
    );
}

export default PrefectureCheckBox;