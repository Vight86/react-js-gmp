import s from './movieList.scss';
import MovieCard from '../movieCard/movieCard';
import Button from '../button/button';
import SelectButton from '../selectButton/selectButton';

const MovieList = () => (
  <main className={s.movieList}>
    <header className={s.movieList__header}>
      <nav>
        {['All', 'Documentary', 'Comedy', 'Horror', 'Crime'].map((text) => (
          <Button
            key={text}
            theme="navigation"
            isWide={false}
          >
            {text}
          </Button>
        ))}
      </nav>
      <SelectButton />
    </header>
    <div className={s.movieList__list}>
      <MovieCard
        poster="https://place-hold.it/325x465"
        title="Pulp Fiction"
        genre="Action&Adventure"
        year={2004}
      />
      <MovieCard
        poster="https://place-hold.it/325x465"
        title="Pulp Fiction"
        genre="Action&Adventure"
        year={2004}
      />
      <MovieCard
        poster="https://place-hold.it/325x465"
        title="Pulp Fiction"
        genre="Action&Adventure"
        year={2004}
      />
      <MovieCard
        poster="https://place-hold.it/325x465"
        title="Pulp Fiction"
        genre="Action&Adventure"
        year={2004}
      />
      <MovieCard
        poster="https://place-hold.it/325x465"
        title="Pulp Fiction"
        genre="Action&Adventure"
        year={2004}
      />
      <MovieCard
        poster="https://place-hold.it/325x465"
        title="Pulp Fiction"
        genre="Action&Adventure"
        year={2004}
      />
    </div>
  </main>

);

export default MovieList;
