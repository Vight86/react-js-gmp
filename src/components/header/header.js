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
        text="+add movie"
        theme="tertiary"
        isWide={false}
      />
    </div>
    <div className={s.header__bottom}>
      <Title title="Find your movie" />
      <SearchForm />
    </div>

  </header>
);

export default Header;
