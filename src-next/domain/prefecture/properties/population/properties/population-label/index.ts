export const PopulationLabel = [
  "総人口",
  "年少人口",
  "生産年齢人口",
  "老年人口",
] as const;
export type PopulationLabelType = (typeof PopulationLabel)[number];

export const PopulationLabelValidation = (
  label: string
): label is PopulationLabelType => {
  return PopulationLabel.includes(label as PopulationLabelType);
};
