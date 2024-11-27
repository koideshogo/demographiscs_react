import PrefectureCheckBox from "../organisms/prefecture-check-box";
import PopulationGraph from "../organisms/population-graphs";
import {usePrefectureCheckBox} from "../../hooks/usePrefectureCheckBox";
import usePopulation from "../../hooks/usePopulation";
import SelectBox from "../atoms/selectBox";
import useSelectTypePopulation from "../../hooks/useSelectTypePopulation";

export const Dashboard = () => {
    // セレクトボックスのpropsを取得
    const selectBoxProps = useSelectTypePopulation();
    // 人口データを取得
    const { populationData, updatePopulationData } = usePopulation(selectBoxProps.selectedValue);
    // 都道府県のチェックボックスを取得
    // @ts-ignore
    const { prefectureCheckBoxInfo, isLoading } = usePrefectureCheckBox(updatePopulationData);
    if (isLoading) {
        return <p>Loading data, please wait...</p>;
    }

    return (
        <>
            <div className="min-h-screen bg-black-50 flex flex-col justify-center items-center p-6">
                <div className="w-full max-w-6xl bg-black shadow-lg rounded-lg p-8 space-y-8">
                    <h1 className="text-3xl font-bold text-white-800 text-center">人口統計グラフ</h1>

                    <div className="flex justify-center">
                        <SelectBox options={selectBoxProps.options} handleChange={selectBoxProps.handleChange} selectedValue={selectBoxProps.selectedValue} />
                    </div>

                    <div className="flex justify-center">
                        {/*// @ts-ignore*/}
                        <PrefectureCheckBox prefectureCheckBoxInfo={prefectureCheckBoxInfo} />
                    </div>

                    <div className="flex justify-center">
                        <PopulationGraph populationList={populationData} />
                    </div>
                </div>
            </div>
        </>
    );
};