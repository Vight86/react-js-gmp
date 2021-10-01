import SearchForm from '../searchForm/searchForm';
import s from './header.scss';
import Logo from '../logo/logo';
import Button from '../button/button';
import Title from '../title/title';

const Header = () => (
  <header className={s.header}>
    <div className={s.header__top}>
      <Logo />
      <Button
        theme="tertiary"
        isWide={false}
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

export default Header;
