import { useState } from 'react';
import s from './CustomCheckbox.scss';

const CustomCheckbox = ({ theme, label }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleClick = () => setIsChecked(!isChecked);

  return (
    <label className={s[theme]}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleClick}
      />
      <span className={s.label}>{label}</span>
    </label>
  );
};

CustomCheckbox.propTypes = {
  theme: PropTypes.string,
  label: PropTypes.string.isRequired,
};

CustomCheckbox.defaultProps = {
  theme: 'primary',
};

export default CustomCheckbox;
