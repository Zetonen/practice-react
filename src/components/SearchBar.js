import { TopicFilter } from './TopickFilter';
import { LevelFilter } from './LevelFilte';
import { useQueryParams } from 'hooks/useQueryParams';

export const SearchBar = () => {
  const { resetFilters } = useQueryParams();
  return (
    <div>
      <TopicFilter />
      <LevelFilter />
      <button onClick={resetFilters}>Reset filters</button>
    </div>
  );
};
