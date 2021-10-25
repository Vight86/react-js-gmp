import { useDispatch } from 'react-redux';
import { updateSearchOptions } from '../../store/requestSlice';
import SearchForm from './SearchForm';

const SearchFormContainer = () => {
  const dispatch = useDispatch();
  const handleSearchSubmit = (search) => {
    dispatch(updateSearchOptions({ options: { search } }));
  };

  return <SearchForm handleSearchSubmit={handleSearchSubmit} />;
};

export default SearchFormContainer;
