type SelectBoxOptionValue = {
  value: number;
  label: string;
};

export type SelectBoxProps<T> = {
  selectedValue: SelectBoxOptionValue["value"] | undefined;
  options: SelectBoxOptionValue[];
  handleChange: (value: T) => void;
};

/**
 * SelectBox Component
 * @param param0
 * @returns
 */
export const SelectBox = ({
  selectedValue,
  options,
  handleChange,
}: SelectBoxProps<number>) => {
  return (
    <div>
      <select
        value={selectedValue}
        onChange={(e) => handleChange(Number(e.target.value))}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
