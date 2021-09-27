import s from './movieList.scss';
import MovieCard from '../movieCard/movieCard';
import Button from '../button/button';
import SelectButton from '../selectButton/selectButton';

const MovieList = () => (
  <main className={s.movieList}>
    <header className={s.movieList__header}>
      <nav>
        <Button
          theme="navigation"
          isWide={false}
          text="All"
        />
        <Button
          theme="navigation"
          isWide={false}
          text="Documentary"
        />
        <Button
          theme="navigation"
          isWide={false}
          text="Comedy"
        />
        <Button
          theme="navigation"
          isWide={false}
          text="Horror"
        />
        <Button
          theme="navigation"
          isWide={false}
          text="Crime"
        />
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
