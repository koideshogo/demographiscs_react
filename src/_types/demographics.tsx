/**
 * @memo components/** でのみ参照されているため、ここで定義する
 */
import React from "react";
import useSelectTypeDemographics from "../hooks/useSelectTypeDemographics";

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

export type TYPES_EN = 'Total' | 'Young' | 'WorkingAge' | 'Elderly';
export type TYPES_JP = '総人口' | '年少人口' | '生産年齢人口' | '老年人口';

export type SelectTypeDemographicsProps = {
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    options: string[];
};