import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import s from './MovieList.scss';
import MovieCard from '../MovieCard/MovieCard';
import SelectButton from '../SelectButton/SelectButton';
import Counter from '../Counter/Counter';

const MovieList = ({
  genres,
  movies,
  moviesAmount,
  openMoviePopup,
  openModal,
  openMovieInfo,
  sortByQuery,
  selectButtonTitle,
  onDeleteMovie,
}) => (
  <main className={s.movieList}>
    <header className={s.movieList__header}>
      <nav>
        {genres.map((genre) => (
          <NavLink
            key={genre}
            to={`/${genre.toLowerCase()}`}
            className={s.navigationButton}
            activeClassName={s.navigationButton_active}
          >
            {genre}
          </NavLink>
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
          onDeleteMovie={onDeleteMovie}
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
  sortByQuery: PropTypes.func.isRequired,
  selectButtonTitle: PropTypes.string.isRequired,
  onDeleteMovie: PropTypes.func.isRequired,
};
export default MovieList;
