/**
 * @memo components/** でのみ参照されているため、ここで定義する
 */
import React from "react";

// export type PrefecturePopulationViewModel = {
//     prefectureCheckBoxInfo: {
//         id: string,
//         name: string,
//         checked: boolean,
//         label: string,
//         handleChange: (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => void;
//     }[],
//     populationGraphs: {
//         activeTab: "Elderly"|"WorkingAge"|"Young"|"Total";
//         data: {
//             label: string;
//             value: number;
//         }[];
//     }
// }

export type PrefectureCheckBoxProps = {
    id: string;
    name: string;
    checked: boolean;
    label: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}[];