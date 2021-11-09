import { useState } from 'react';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import CustomInput from '../CustomInput/CustomInput';
import s from './SearchForm.scss';

const SearchForm = () => {
  const searchQuery = useRouteMatch('/search/:searchQuery')?.params?.searchQuery ?? '';
  const [searchQueryInput, setSearchQueryInput] = useState(searchQuery);
  const handleChange = (e) => setSearchQueryInput(e.target.value);

  return (
    <form className={s.searchForm}>
      <CustomInput
        type="text"
        value={searchQueryInput}
        placeholder="What do you want to watch"
        theme="primary"
        handleChange={handleChange}
      />
      <Link
        className={s.submit}
        to={`/search/${searchQueryInput}`}
      >
        Search
      </Link>
    </form>
  );
};

export default SearchForm;
