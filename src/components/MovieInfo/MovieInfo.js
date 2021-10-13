import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import Title from '../Title/Title';
import s from './MovieInfo.scss';

const MovieInfo = ({ movieInfo, closeMovieInfo }) => {
  const {
    poster, title, rating, genre, year, time, description,
  } = movieInfo;

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
            src={poster}
            alt={title}
          />
        </figure>
        <Title className={s.title}>{title}</Title>
        <div className={s.rating}>{rating}</div>
        <div className={s.genre}>{genre}</div>
        <div className={s.year}>{year}</div>
        <div className={s.time}>{time}</div>
        <p className={s.description}>{description}</p>
      </div>
    </header>
  );
};

MovieInfo.propTypes = {
  movieInfo: PropTypes.shape({
    poster: PropTypes.string,
    title: PropTypes.string,
    rating: PropTypes.number,
    genre: PropTypes.string,
    year: PropTypes.number,
    time: PropTypes.string,
    description: PropTypes.string,
  }),
  closeMovieInfo: PropTypes.func.isRequired,
};

MovieInfo.defaultProps = {
  movieInfo: {},
};

export default MovieInfo;
