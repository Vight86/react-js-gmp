import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import s from './CustomInput.scss';

const CustomInput = ({
  type, name, value, handleChange, label, placeholder, theme, errorMessage,
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
            name={name}
            placeholder="Select date"
            type="text"
            onFocus={changeType}
          />
        )
        : (
          <input
            name={name}
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
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleChange: PropTypes.func,
  type: PropTypes.oneOf(['text', 'password', 'email', 'url', 'date', 'number']).isRequired,
  placeholder: PropTypes.string,
  theme: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};

CustomInput.defaultProps = {
  name: '',
  label: '',
  placeholder: '',
  errorMessage: '',
  handleChange: () => {},
};

export default CustomInput;
