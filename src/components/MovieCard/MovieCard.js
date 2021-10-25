/* eslint-disable camelcase */
import classNames from 'classnames';
import { useState } from 'react';
import s from './MovieCard.scss';

const MovieCard = ({
  movie, openMoviePopup, openModal, openMovieInfo,
}) => {
  const [isSubMenuOpened, setIsSubmenuOpened] = useState(false);
  const openSubMenu = () => setIsSubmenuOpened(!isSubMenuOpened);

  const subMenuButtonClasses = classNames({
    [s.subMenuButton]: true,
    [s.subMenuButton_close]: isSubMenuOpened,
  });

  const subMenuClasses = classNames({
    [s.subMenu]: true,
    [s.subMenu_active]: isSubMenuOpened,
  });

  const {
    title, release_date, poster_path, genres,
  } = movie;

  const handleEditMovieButtonClick = () => {
    openMoviePopup('edit movie', movie);
  };

  const handleDeleteMovieButtonClick = () => {
    openModal('Delete movie', 'Are you sure you want to delete this movie?', false);
  };

  const handleMovieTitleClick = () => {
    openMovieInfo(movie);
  };

  return (
    <div className={s.movieCard}>
      <button
        type="button"
        aria-label={isSubMenuOpened ? 'Close sub menu' : 'Open sub menu'}
        className={subMenuButtonClasses}
        onClick={openSubMenu}
      />
      <div className={subMenuClasses}>
        <button
          type="button"
          aria-label="Edit movie"
          onClick={handleEditMovieButtonClick}
        >
          edit
        </button>
        <button
          type="button"
          aria-label="Delete movie"
          onClick={handleDeleteMovieButtonClick}
        >
          delete
        </button>
      </div>
      <figure className={s.poster}>
        <img
          src={poster_path}
          alt={title}
        />
      </figure>
      {/* eslint-disable-next-line max-len */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
      <h3
        className={s.title}
        onClick={handleMovieTitleClick}
      >
        {title}
      </h3>
      <p className={s.genre}>{genres.join(', ')}</p>
      <p className={s.year}>{new Date(release_date).getFullYear()}</p>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.any).isRequired,
  openMoviePopup: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  openMovieInfo: PropTypes.func.isRequired,
};

export default MovieCard;
