import { FC } from 'react';

interface IOption {
  value: string;
  name: string;
}

interface ISelectProps {
  value: string
  onChange: (val: string) => void
  options: IOption[];
  defaultValue: string;
}

export const Select: FC<ISelectProps> = ({
  options,
  defaultValue,
  value,
  onChange,
}) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
