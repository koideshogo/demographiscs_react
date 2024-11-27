export type CheckBoxProps = {
  label: string;
  value: string;
  selected: boolean;
  onChange: (value: string) => void;
};

export const CheckBox = ({
  label,
  value,
  selected,
  onChange,
}: CheckBoxProps) => {
  return (
    <input
      type="checkbox"
      id={value}
      name={label}
      checked={selected}
      onChange={() => onChange(value)}
    />
  );
};
