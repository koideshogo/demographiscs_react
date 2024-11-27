import { Domain } from "src-next/domain";

export type PopulationGraphProps = {
  prefectures: Domain.Prefecture[];
  selectedLabel: Domain.PrefectureProperties.PopulationProperties.PopulationLabelType;
};

export const PopulationGraph = ({
  prefectures,
  selectedLabel,
}: PopulationGraphProps) => {
  const activePrefectures =
    Domain.PrefectureMethod.filterSelectedPrefectures(prefectures);
  const populationData = activePrefectures.map((prefecture) => {
    return {
      prefectureName: prefecture.prefName,
      populationData:
        Domain.PrefectureProperties.PopulationMethods.findSpecificLabelData(
          prefecture.population
        )(selectedLabel),
    };
  });
  console.log(populationData);
};
