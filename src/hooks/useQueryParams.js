import { useSearchParams } from 'react-router-dom';

export const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const level = searchParams.get('level') ?? 'beginner';
  const topic = searchParams.get('topic') ?? '';

  const changeTopic = topic => {
    searchParams.set('topic', topic);
    setSearchParams(searchParams);
  };
  const changeLevel = level => {
    searchParams.set('level', level);
    setSearchParams(searchParams);
  };
  const resetFilters = () => {
    setSearchParams({
      topic: '',
      level: 'all',
    });
  };
  return { topic, level, changeTopic, changeLevel, resetFilters };
};
