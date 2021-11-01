import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieList from './MovieList';
import Modal from '../Modal/Modal';
import { decreaseTotalAmount, loadMovies } from '../../store/moviesSlice';
import { updateFilterOptions, updateSortOptions } from '../../store/requestSlice';

const MovieListContainer = ({ openMoviePopup, openMovieInfo }) => {
  const dispatch = useDispatch();
  const requestUrl = useSelector((state) => state.request.url);
  const requestOptions = useSelector((state) => state.request.options);

  const movies = useSelector((state) => state.movies.data);
  const totalAmount = useSelector((state) => state.movies.totalAmount);

  useEffect(() => {
    const url = `${requestUrl}?${new URLSearchParams(requestOptions)}`;
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

  const isModalOpened = useRef(false); // ???????? state does not update between fetch.then
  // const [isModalOpened, setIsModalOpened] = useState(false);
  const [modalTitle, setModalTitle] = useState(null);
  const [modalText, setModalText] = useState(null);
  const [isModalCentered, setIsModalCentered] = useState(false);
  const [isModalSuccess, setIsModalSuccess] = useState(false);
  const [movieIdToDel, setMovieIdToDel] = useState(null);

  const openModal = (title, text, isCentered, isSuccess) => {
    document.body.style.overflow = 'hidden';
    isModalOpened.current = !isModalOpened.current;
    setModalTitle(title);
    setModalText(text);
    setIsModalCentered(isCentered);
    setIsModalSuccess(isSuccess);
  };

  const closeModal = () => {
    document.body.style.overflow = '';
    isModalOpened.current = !isModalOpened.current;
    // setIsModalOpened(!isModalOpened);
  };

  const handleConfirmDeleteMovie = () => {
    const url = `${requestUrl}/${movieIdToDel}`;
    fetch(url, {
      method: 'DELETE',
    }).then(() => {
      closeModal();
    }).then(() => {
      // setIsModalOpened(false);
      openModal('Movie deleted', 'Movie deleted successfully', true, true);
      decreaseTotalAmount(1);
    });
  };

  const handleDeleteMovie = (id) => {
    setMovieIdToDel(id);
    openModal('Delete movie', 'Are you sure you want to delete this movie?', false, false);
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
        onDeleteMovie={handleDeleteMovie}
      />
      {isModalOpened.current && (
      <Modal
        title={modalTitle}
        isCentered={isModalCentered}
        isSuccess={isModalSuccess}
        text={modalText}
        closeModal={closeModal}
        onConfirmDeleteMovie={handleConfirmDeleteMovie}
      />
      )}
    </>

  );
};

MovieListContainer.propTypes = {
  openMoviePopup: PropTypes.func.isRequired,
  openMovieInfo: PropTypes.func.isRequired,
};

MovieListContainer.displayName = 'MovieListContainer';

export default MovieListContainer;
