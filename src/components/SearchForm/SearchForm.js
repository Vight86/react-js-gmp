import Button from '../Button/Button';
import CustomInput from '../CustomInput/CustomInput';
import s from './SearchForm.scss';

const SearchForm = () => (
  <form className={s.searchForm}>
    <CustomInput
      type="text"
      placeholder="What do you want to watch"
      theme="primary"
    />
    <Button
      theme="primary"
      isWide
    >
      Search
    </Button>
  </form>
);

export default SearchForm;
