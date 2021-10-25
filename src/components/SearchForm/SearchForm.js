import { useState } from 'react';
import Button from '../Button/Button';
import CustomInput from '../CustomInput/CustomInput';
import s from './SearchForm.scss';

const SearchForm = (props) => {
  const { handleSearchSubmit } = props;

  const [searchQuery, setSearchQuery] = useState('');
  const handleChange = (e) => setSearchQuery(e.target.value);

  const handleClick = () => {
    handleSearchSubmit(searchQuery);
  };

  return (
    <form className={s.searchForm}>
      <CustomInput
        type="text"
        value={searchQuery}
        placeholder="What do you want to watch"
        theme="primary"
        handleChange={handleChange}
      />
      <Button
        theme="primary"
        isWide
        onClick={handleClick}
      >
        Search
      </Button>
    </form>
  );
};

SearchForm.propTypes = {
  handleSearchSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
