import s from './MovieList.scss';
import MovieCard from '../MovieCard/MovieCard';
import Button from '../Button/Button';
import SelectButton from '../SelectButton/SelectButton';
import Counter from '../Counter/Counter';

const MovieList = ({
  genres, movies, openMoviePopup, openModal, openMovieInfo,
}) => {
  const moviesCount = movies?.length;

  return (
    <main className={s.movieList}>
      <header className={s.movieList__header}>
        <nav>
          {genres.map((text) => (
            <Button
              key={text}
              theme="navigation"
              isWide={false}
            >
              {text}
            </Button>
          ))}
        </nav>
        <SelectButton
          theme="secondary"
          label="sort by"
          placeholder="Release date"
        >
          <span>Release date</span>
          <span>Genre</span>
        </SelectButton>
      </header>
      <Counter number={moviesCount} />
      <div className={s.movieList__list}>
        {movies.map((movie) => (
          <MovieCard
            movie={movie}
            openMoviePopup={openMoviePopup}
            openModal={openModal}
            openMovieInfo={openMovieInfo}
          />
        ))}
      </div>
    </main>
  );
};

MovieList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  openMoviePopup: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  openMovieInfo: PropTypes.func.isRequired,
};

export default MovieList;
