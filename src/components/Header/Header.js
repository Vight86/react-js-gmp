import s from './Header.scss';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import Title from '../Title/Title';
import SearchForm from '../SearchForm/SearchForm';

const Header = ({ openMoviePopup }) => {
  const handleAddButtonClick = () => openMoviePopup('Add movie');
  return (
    <header className={s.header}>
      <div className={s.header__top}>
        <Logo />
        <Button
          theme="tertiary"
          isWide={false}
          onClick={handleAddButtonClick}
        >
          +add movie
        </Button>
      </div>
      <div className={s.header__bottom}>
        <Title>Find your movie</Title>
        <SearchForm />
      </div>
    </header>
  );
};

Header.propTypes = {
  openMoviePopup: PropTypes.func.isRequired,
};

export default Header;
