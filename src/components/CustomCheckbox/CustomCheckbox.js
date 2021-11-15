import { useState } from 'react';
import s from './CustomCheckbox.scss';

const CustomCheckbox = ({
  name, value, theme, label,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleClick = () => setIsChecked(!isChecked);

  return (
    <label className={s[theme]}>
      <input
        name={name}
        type="checkbox"
        value={value}
        checked={isChecked}
        onChange={handleClick}
      />
      <span className={s.label}>{label}</span>
    </label>
  );
};

CustomCheckbox.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  theme: PropTypes.string,
  label: PropTypes.string.isRequired,
};

CustomCheckbox.defaultProps = {
  name: '',
  value: '',
  theme: 'primary',
};

export default CustomCheckbox;
