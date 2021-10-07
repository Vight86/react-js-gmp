import React, { useState } from 'react';
import classNames from 'classnames';
import s from './SelecetButton.scss';

const SelectButton = ({
  theme, label, placeholder, children,
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
      <button
        type="button"
        className={buttonClasses}
        onClick={handleClick}
      >
        {placeholder}
        <span className={s.arrow} />
        <ul className={s.options}>
          {React.Children.map(children, (option) => <li>{option}</li>)}
        </ul>
      </button>
    </span>
  );
};

SelectButton.propTypes = {
  theme: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

SelectButton.defaultProps = {
  theme: 'primary',
  label: '',
  placeholder: '',
};

export default SelectButton;
