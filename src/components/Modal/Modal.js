import classNames from 'classnames';
import s from './Modal.scss';
import Title from '../Title/Title';
import PopupWrapper from '../PopupWrapper/PopupWrapper';
import Button from '../Button/Button';

const Modal = ({
  title, text, isSuccess, isCentered, closeModal,
}) => {
  const modalClasses = classNames({
    [s.modal]: true,
    [s.modal_center]: isCentered,
  });
  return (
    <PopupWrapper>
      <div className={modalClasses}>
        <Button
          theme="close"
          isWide={false}
          onClick={closeModal}
        />
        {isSuccess && <div className={s.modalSuccessIcon} />}
        <Title>{title}</Title>
        <p className={s.text}>{text}</p>
        {!isSuccess && (
        <span className={s.button}>
          <Button
            theme="primary"
            isWide={false}
            onClick={() => {}}
          >
            Confirm
          </Button>
        </span>
        )}

      </div>
    </PopupWrapper>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isCentered: PropTypes.bool,
  isSuccess: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  isCentered: false,
  isSuccess: false,
};

export default Modal;
