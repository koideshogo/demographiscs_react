import CheckBox from "../atoms/checkBox";
import Label from "../atoms/label";
import React from "react";
import {PrefectureCheckBoxProps} from "../../_types/prefectures";

const PrefectureCheckBox: React.FC<PrefectureCheckBoxProps> = ({ prefectureCheckBoxInfo }) => {
    return (
        <>
            <div className="bg-black-50 flex justify-center items-center p-4">
                <div className="w-full bg-black shadow-lg rounded-lg p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                        {prefectureCheckBoxInfo.map((info) => (
                            <div
                                key={info.id}
                                className="flex items-center justify-between p-4 border border-gray-300 rounded-lg"
                            >
                                <Label htmlFor={info.id} label={info.label} />
                                <CheckBox {...info}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default PrefectureCheckBox;