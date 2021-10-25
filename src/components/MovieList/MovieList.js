import s from './MovieList.scss';
import MovieCard from '../MovieCard/MovieCard';
import Button from '../Button/Button';
import SelectButton from '../SelectButton/SelectButton';
import Counter from '../Counter/Counter';

const MovieList = ({
  genres,
  movies,
  moviesAmount,
  openMoviePopup,
  openModal,
  openMovieInfo,
  filterMoviesBy,
  sortByQuery,
  selectButtonTitle,
}) => (
  <main className={s.movieList}>
    <header className={s.movieList__header}>
      <nav>
        {genres.map((genre) => (
          <Button
            key={genre}
            theme="navigation"
            isWide={false}
            onClick={() => filterMoviesBy(genre)}
          >
            {genre}
          </Button>
        ))}
      </nav>
      <SelectButton
        theme="secondary"
        label="sort by"
        placeholder={selectButtonTitle}
      >
        {['Release date', 'Genre', 'Rating'].map((text) => (
          <button
            type="button"
            onClick={() => sortByQuery(text)}
          >
            {text}
          </button>
        ))}
      </SelectButton>
    </header>
    <Counter number={moviesAmount} />
    <div className={s.movieList__list}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          openMoviePopup={openMoviePopup}
          openModal={openModal}
          openMovieInfo={openMovieInfo}
        />
      ))}
    </div>
  </main>
);

MovieList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  moviesAmount: PropTypes.number.isRequired,
  openMoviePopup: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  openMovieInfo: PropTypes.func.isRequired,
  filterMoviesBy: PropTypes.func.isRequired,
  sortByQuery: PropTypes.func.isRequired,
  selectButtonTitle: PropTypes.string.isRequired,
};
export default MovieList;
