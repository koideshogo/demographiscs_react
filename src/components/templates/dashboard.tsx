import PrefectureCheckBox from "../organisms/prefecture-check-box";
import PopulationGraph from "../organisms/population-graphs";
import {usePrefectureCheckBox} from "../../hooks/usePrefectureCheckBox";
import usePopulation from "../../hooks/usePopulation";
import SelectBox from "../atoms/selectBox";
import useSelectTypePopulation from "../../hooks/useSelectTypePopulation";

export const Dashboard = () => {
    const selectBoxProps = useSelectTypePopulation();
    const { populationData, updatePopulationData } = usePopulation(selectBoxProps.selectedValue);
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
                        <SelectBox props={selectBoxProps} />
                    </div>

                    <div className="flex justify-center">
                        <PrefectureCheckBox prefectureCheckBoxInfo={prefectureCheckBoxInfo} />
                    </div>

                    <div className="flex justify-center">
                        <PopulationGraph populationList={populationData} selectedGraphType />
                    </div>
                </div>
            </div>
        </>
    );
};