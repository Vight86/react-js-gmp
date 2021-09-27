import Button from '../button/button';
import TextInput from '../textInput/textInput';
import s from './searchForm.scss';

const SearchForm = () => (
  <div className={s.searchForm}>
    <TextInput
      placeholder="What do you want to watch"
      theme="primary"
    />
    <Button
      text="Search"
      theme="primary"
      isWide
    />
  </div>
);

export default SearchForm;
