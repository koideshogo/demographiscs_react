import PrefectureCheckBox from "../organisms/prefecture-check-box";
import DemographicsGraphs from "../organisms/demographics-graphs";
import {usePrefectureCheckBox} from "../../hooks/usePrefectureCheckBox";
import useDemographics from "../../hooks/useDemographics";
import SelectBox from "../atoms/selectBox";
import useSelectTypeDemographics from "../../hooks/useSelectTypeDemographics";

export const Dashboard = () => {
    const selectBoxProps = useSelectTypeDemographics();
    const { demographicsGraphs, updateDemographicsData } = useDemographics(
        selectBoxProps.demographicsType
    );
    console.log(demographicsGraphs);
    const { prefectureCheckBoxInfo, isLoading } = usePrefectureCheckBox(updateDemographicsData);
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
                <DemographicsGraphs populationList={demographicsGraphs} />
            </div>
        </>
    );
};