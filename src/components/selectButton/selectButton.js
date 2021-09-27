import { useState } from 'react';
import s from './selecetButton.scss';

const SelectButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <span className={`${s.selectButton}}`}>
      <span className={s.selectButton__label}>Sort by</span>
      <button
        type="button"
        className={`${s.selectButton__selected} ${isActive && s.selectButton__selected_active}`}
        onClick={handleClick}
      >
        Release date
        <span className={s.selectButton__arrow} />
        <ul className={s.selectButton__options}>
          <li
            className={s.selectButton__option}
          >
            Release date
          </li>
          <li className={s.selectButton__option}>Title</li>
        </ul>
      </button>
    </span>
  );
};

export default SelectButton;
