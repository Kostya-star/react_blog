import { FC } from 'react';
import { Input } from './UI/Input/Input';
import { Select } from './UI/Select/Select';

const selectOptions = [
  { value: 'title', name: 'По названию' },
  { value: 'body', name: 'По описанию' },
];

interface IFilter {
  sort: string;
  search: string;
}

interface IPostFilterProps {
  filter: IFilter;
  setFilter: (filter: IFilter) => void;
}

export const PostFilter: FC<IPostFilterProps> = ({ filter, setFilter }) => {
  return (
    <>
      <Input
        type="text"
        placeholder="Search..."
        value={filter.search}
        onChange={(e) => setFilter({ ...filter, search: e.target.value })}
      />
      <Select
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Сортировка"
        options={selectOptions}
      />
    </>
  );
};
