import CustomForm from '../CustomForm/CustomForm';
import s from './MoviePopup.scss';
import Title from '../Title/Title';
import Button from '../Button/Button';
import PopupWrapper from '../PopupWrapper/PopupWrapper';

const MoviePopup = ({
  title, movieInfo, closeMoviePopup, onSubmit,
}) => (
  <PopupWrapper>
    <div className={s.moviePopup}>
      <Button
        theme="close"
        isWide={false}
        onClick={closeMoviePopup}
      />
      <Title>{title}</Title>
      <CustomForm
        movieInfo={movieInfo}
        onSubmit={onSubmit}
      />
    </div>
  </PopupWrapper>
);

MoviePopup.propTypes = {
  title: PropTypes.string.isRequired,
  movieInfo: PropTypes.objectOf(PropTypes.any),
  closeMoviePopup: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

MoviePopup.defaultProps = {
  movieInfo: {},
};

export default MoviePopup;
