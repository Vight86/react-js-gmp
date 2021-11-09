import { useState } from 'react';
import { Route } from 'react-router';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MovieListContainer from './components/MovieList/MovieListContainer';
import MoviePopupContainer from './components/MoviePopup/MoviePopupContainer';
import MovieInfo from './components/MovieInfo/MovieInfo';

const App = () => {
  const [isMoviePopupOpened, setIsMoviePopupOpened] = useState(false);
  const [title, setTitle] = useState(null);
  const [movieInfo, setMovieInfo] = useState({});

  const openMoviePopup = (popupTitle, movie = {}) => {
    document.body.style.overflow = 'hidden';
    setIsMoviePopupOpened(!isMoviePopupOpened);
    setTitle(popupTitle);
    setMovieInfo(movie);
  };

  const closeMoviePopup = () => {
    document.body.style.overflow = '';
    setIsMoviePopupOpened(!isMoviePopupOpened);
  };

  const openMovieInfo = (movie) => {
    document.documentElement.scrollTo(0, 0);
    setMovieInfo(movie);
  };

  const closeMovieInfo = () => {
    setMovieInfo({});
  };

  const isMovieInfoShown = Object.keys(movieInfo).length > 0;

  return (
    <>
      <Route path="/">
        {isMovieInfoShown ? (
          <MovieInfo
            movieInfo={movieInfo}
            closeMovieInfo={closeMovieInfo}
          />
        ) : (
          <Header
            openMoviePopup={openMoviePopup}
          />
        )}
        <MovieListContainer
          openMoviePopup={openMoviePopup}
          openMovieInfo={openMovieInfo}
        />
        <Footer />
        {isMoviePopupOpened && (
          <MoviePopupContainer
            title={title}
            movieInfo={movieInfo}
            closeMoviePopup={closeMoviePopup}
          />
        )}
      </Route>
    </>
  );
};

export default App;
