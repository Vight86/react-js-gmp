import { useDispatch, useSelector } from 'react-redux';
import MoviePopup from './MoviePopup';

import { increaseTotalAmount } from '../../store/moviesSlice';

const MoviePopupContainer = (props) => {
  const { title, movieInfo, closeMoviePopup } = props;
  const dispatch = useDispatch();

  const url = useSelector((state) => state.request.url);

  const handleMovie = (movieData) => {
    const isEdit = title.includes('edit');
    fetch(url, {
      method: isEdit ? 'PUT' : 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(movieData, (key, value) => {
        switch (key) {
          case 'vote_average':
          case 'runtime': {
            return +value;
          }
          case 'id': {
            return !isEdit ? undefined : value;
          }
          default: return value;
        }
      }),
      // eslint-disable-next-line no-console
    }).then(() => {
      if (!isEdit) {
        dispatch(increaseTotalAmount(1));
      }
      closeMoviePopup();
    });
  };

  return (
    <MoviePopup
      title={title}
      movieInfo={movieInfo}
      closeMoviePopup={closeMoviePopup}
      onSubmit={handleMovie}
    />
  );
};

MoviePopupContainer.propTypes = {
  title: PropTypes.string.isRequired,
  movieInfo: PropTypes.objectOf(PropTypes.any),
  closeMoviePopup: PropTypes.func.isRequired,
};

MoviePopupContainer.defaultProps = {
  movieInfo: {},
};

export default MoviePopupContainer;
