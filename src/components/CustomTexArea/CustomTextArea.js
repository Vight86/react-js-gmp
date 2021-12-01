import PropTypes from 'prop-types';
import React from 'react';
import s from './CustomTexArea.scss';

const CustomTextArea = ({
  name, value, errorMessage, handleChange,
}) => (
  <label className={s.textAreaLabel}>
    Overview
    <textarea
      name={name}
      className={s.textArea}
      value={value}
      onChange={handleChange}
    />
    {errorMessage && <span className={s.error}>{errorMessage}</span>}
  </label>
);

CustomTextArea.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  handleChange: PropTypes.func,
};

CustomTextArea.defaultProps = {
  name: '',
  errorMessage: '',
  handleChange: () => {},
};

export default CustomTextArea;
