/**
 * @memo components/** でのみ参照されているため、ここで定義する
 */
import React from "react";

// export type PrefectureDemographicsViewModel = {
//     prefectureCheckBoxInfo: {
//         id: string,
//         name: string,
//         checked: boolean,
//         label: string,
//         handleChange: (id: string) => (event: React.ChangeEvent<HTMLInputElement>) => void;
//     }[],
//     demographicsGraphs: {
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