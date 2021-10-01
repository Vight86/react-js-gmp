import s from './movieCard.scss';

const MovieCard = ({
  poster, title, genre, year,
}) => (
  <div className={s.movieCard}>
    <button
      type="button"
      aria-label="Open submenu"
      className={s.subMenuButton}
    />
    <figure className={s.poster}>
      <img
        src={poster}
        alt={title}
      />
    </figure>
    <h3 className={s.title}>{title}</h3>
    <p className={s.genre}>{genre}</p>
    <p className={s.year}>{year}</p>
  </div>
);

MovieCard.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default MovieCard;
