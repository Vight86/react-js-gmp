import { useState } from 'react';
import MovieList from './MovieList';
import Modal from '../Modal/Modal';

const MovieListContainer = ({ openMoviePopup, openMovieInfo }) => {
  const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
  const movies = [
    {
      title: 'Pulp Fiction',
      poster: 'https://place-hold.it/325x465',
      genre: 'Action&Adventure',
      rating: 7.8,
      year: 2004,
      description: 'daskjdsld skdjaslkdj sadkj as;ldk jasldk lkdjas lkdjsd kjasld ;kjasdl asldk jasdl;k jaslkd jasdadaskdj al;ksdj ',
      time: '1h30min',
      url: 'httthppp',
      date: '29-08-1999',
    },
    {
      title: 'Star wars',
      poster: 'https://place-hold.it/325x465',
      genre: 'Action&Adventure',
      rating: 9,
      year: 2001,
      description: 'daskjdsld skdjaslkdj sadkj as;ldk jasldk lkdjas lkdjsd kjasld ;kjasdl asldk jasdl;k jaslkd jasdadaskdj al;ksdj ',
      time: '1h30min',
      url: 'httthppp',
      date: '29-08-1999',
    },
    {
      title: 'Matrix',
      poster: 'https://place-hold.it/325x465',
      genre: 'Fantastic',
      rating: 4,
      year: 199,
      description: 'daskjdsld skdjaslkdj sadkj as;ldk jasldk lkdjas lkdjsd kjasld ;kjasdl asldk jasdl;k jaslkd jasdadaskdj al;ksdj ',
      time: '1h30min',
      url: 'httthppp',
      date: '29-08-1999',
    },
    {
      title: 'Lord of Rings',
      poster: 'https://place-hold.it/325x465',
      genre: 'Fantasy',
      rating: 5,
      year: 2000,
      description: 'daskjdsld skdjaslkdj sadkj as;ldk jasldk lkdjas lkdjsd kjasld ;kjasdl asldk jasdl;k jaslkd jasdadaskdj al;ksdj ',
      time: '1h30min',
      url: 'httthppp',
      date: '29-08-1999',
    },
    {
      title: 'Gentlemen',
      poster: 'https://place-hold.it/325x465',
      genre: 'Criminal',
      rating: 7,
      year: 2020,
      description: 'daskjdsld skdjaslkdj sadkj as;ldk jasldk lkdjas lkdjsd kjasld ;kjasdl asldk jasdl;k jaslkd jasdadaskdj al;ksdj ',
      time: '1h30min',
      url: 'httthppp',
      date: '29-08-1999',
    },
    {
      title: 'Gattaka',
      poster: 'https://place-hold.it/325x465',
      genre: 'Scifi',
      rating: 7,
      year: 2005,
      description: 'daskjdsld skdjaslkdj sadkj as;ldk jasldk lkdjas lkdjsd kjasld ;kjasdl asldk jasdl;k jaslkd jasdadaskdj al;ksdj ',
      time: '1h30min',
      url: 'httthppp',
      date: '29-08-1999',
    },
  ];

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
        openMoviePopup={openMoviePopup}
        openModal={openModal}
        openMovieInfo={openMovieInfo}
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
