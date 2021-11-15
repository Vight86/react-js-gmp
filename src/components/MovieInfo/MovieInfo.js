/* eslint-disable camelcase */
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import Title from '../Title/Title';
import s from './MovieInfo.scss';

const MovieInfo = ({ movieInfo, closeMovieInfo }) => {
  const {
    title, poster_path, vote_average, genres, release_date, runtime, overview,
  } = movieInfo;

  const calcTime = (time) => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return `${hours}h ${minutes}min`;
  };
  const time = calcTime(runtime);

  return (
    <header className={s.movieInfoHeader}>
      <div className={s.headerTop}>
        <Logo />
        <Button
          theme="search"
          isWide={false}
          onClick={closeMovieInfo}
        />
      </div>
      <div className={s.movieInfo}>
        <figure className={s.poster}>
          <img
            src={poster_path}
            alt={title}
          />
        </figure>
        <Title className={s.title}>{title}</Title>
        <div className={s.rating}>{vote_average}</div>
        <div className={s.genre}>{genres.join(', ')}</div>
        <div className={s.year}>{new Date(release_date).getFullYear()}</div>
        <div className={s.time}>{time}</div>
        <p className={s.description}>{overview}</p>
      </div>
    </header>
  );
};

MovieInfo.propTypes = {
  movieInfo: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
    release_date: PropTypes.string,
    runtime: PropTypes.number,
    overview: PropTypes.string,
  }),
  closeMovieInfo: PropTypes.func.isRequired,
};

MovieInfo.defaultProps = {
  movieInfo: {},
};

export default MovieInfo;
