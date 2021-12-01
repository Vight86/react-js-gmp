import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import s from './SelecetButton.scss';

const SelectButton = ({
  theme, label, value, placeholder, children,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const buttonClasses = classNames({
    [s.selected]: true,
    [s.selected_active]: isActive,
  });

  return (
    <span className={`${s[theme]}`}>
      <span className={s.label}>{label}</span>
      <span className={s.wrapper}>
        <button
          type="button"
          className={buttonClasses}
          onClick={handleClick}
        >
          {value || placeholder}
          <span className={s.arrow} />
        </button>
        <ul className={s.options}>
          {React.Children.map(children, (option) => <li>{option}</li>)}
        </ul>
      </span>

    </span>
  );
};

SelectButton.propTypes = {
  value: PropTypes.string,
  theme: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

SelectButton.defaultProps = {
  value: '',
  theme: 'primary',
  label: '',
  placeholder: '',
};

export default SelectButton;
