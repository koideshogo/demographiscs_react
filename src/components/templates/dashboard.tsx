import PrefectureCheckBox from "../organisms/prefecture-check-box";
import PopulationGraph from "../organisms/population-graphs";
import {usePrefectureCheckBox} from "../../hooks/usePrefectureCheckBox";
import usePopulation from "../../hooks/usePopulation";
import SelectBox from "../atoms/selectBox";
import useSelectTypePopulation from "../../hooks/useSelectTypePopulation";

export const Dashboard = () => {
    const selectBoxProps = useSelectTypePopulation();
    const { populationGraph, updatePopulationData } = usePopulation(
        selectBoxProps.populationType
    );
    const { prefectureCheckBoxInfo, isLoading } = usePrefectureCheckBox(updatePopulationData);
    if (isLoading) {
        return <p>Loading data, please wait...</p>;
    }

    return (
        <>
            <div>
                <h1>人口統計グラフ</h1>
                <SelectBox
                    props={selectBoxProps}
                />
                <PrefectureCheckBox prefectureCheckBoxInfo={prefectureCheckBoxInfo} />
                {/*<PopulationGraph populationList={populationGraph} />*/}
            </div>
        </>
    );
};