import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieList from './MovieList';
import Modal from '../Modal/Modal';
import { loadMovies } from '../../store/moviesSlice';
import { updateFilterOptions, updateSortOptions } from '../../store/requestSlice';

const MovieListContainer = ({ openMoviePopup, openMovieInfo }) => {
  const dispatch = useDispatch();
  const requestUrl = useSelector((state) => state.request.url);
  const requestOptions = useSelector((state) => state.request.options);

  const movies = useSelector((state) => state.movies.data);
  const totalAmount = useSelector((state) => state.movies.totalAmount);

  useEffect(() => {
    const url = requestUrl + new URLSearchParams(requestOptions);
    dispatch(loadMovies(url));
  }, [requestUrl, requestOptions]);

  const filterMovies = (localGenre) => {
    const genre = localGenre === 'All' ? '' : localGenre;
    dispatch(updateFilterOptions({ options: { genre } }));
  };

  const [selectButtonTitle, setSelectButtonTitle] = useState('Release date');
  const prevSortOrder = useSelector((state) => state.request.options.sortOrder);
  const sortByQuery = (query) => {
    let sortBy;
    switch (query) {
      case 'Release date': {
        sortBy = 'release_date';
        break;
      }
      case 'Genre': {
        sortBy = 'genres';
        break;
      }
      case 'Rating': {
        sortBy = 'vote_average';
        break;
      }
      default: {
        sortBy = '';
      }
    }
    const sortOrder = prevSortOrder === 'desc' ? 'asc' : 'desc';
    dispatch(updateSortOptions({ options: { sortBy, sortOrder } }));
    setSelectButtonTitle(query);
  };

  const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

  const [isModalOpened, setIsModalOpened] = useState(false);
  const [modalTitle, setModalTitle] = useState(null);
  const [modalText, setModalText] = useState(null);
  const [isModalCentered, setIsModalCentered] = useState(false);

  const openModal = (title, text, isCentered) => {
    document.body.style.overflow = 'hidden';
    setIsModalOpened(!isModalOpened);
    setModalTitle(title);
    setModalText(text);
    setIsModalCentered(isCentered);
  };

  const closeModal = () => {
    document.body.style.overflow = '';
    setIsModalOpened(!isModalOpened);
  };

  return (
    <>
      <MovieList
        genres={genres}
        movies={movies}
        moviesAmount={totalAmount}
        openMoviePopup={openMoviePopup}
        openModal={openModal}
        openMovieInfo={openMovieInfo}
        filterMoviesBy={filterMovies}
        sortByQuery={sortByQuery}
        selectButtonTitle={selectButtonTitle}
      />
      {isModalOpened && (
      <Modal
        title={modalTitle}
        isCentered={isModalCentered}
        text={modalText}
        closeModal={closeModal}
      />
      )}
    </>

  );
};

MovieListContainer.propTypes = {
  openMoviePopup: PropTypes.func.isRequired,
  openMovieInfo: PropTypes.func.isRequired,
};

export default MovieListContainer;
