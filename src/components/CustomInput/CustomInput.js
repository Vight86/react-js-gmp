import classNames from 'classnames';
import s from './CustomInput.scss';

const CustomInput = ({
  type, value, handleChange, label, placeholder, theme, errorMessage,
}) => {
  const changeType = (e) => {
    e.target.type = 'date';
  };

  const classes = classNames({
    [s[theme]]: true,
    [s.primary_withLabel]: !!label,
  });

  const isDate = type === 'date';

  return (
    <label className={classes}>
      {label && label}
      {isDate
        ? (
          <input
            placeholder="Select date"
            type="text"
            onFocus={changeType}
          />
        )
        : (
          <input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
          />
        )}
      {errorMessage && <span className={s.error}>{errorMessage}</span>}
    </label>

  );
};

CustomInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOf([PropTypes.string, PropTypes.number, PropTypes.date]).isRequired,
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['text', 'password', 'email', 'url', 'date', 'number']).isRequired,
  placeholder: PropTypes.string,
  theme: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};

CustomInput.defaultProps = {
  label: '',
  placeholder: '',
  errorMessage: '',
};

export default CustomInput;
