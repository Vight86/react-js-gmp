import { useState } from 'react';
import s from './textInput.scss';

const TextInput = ({ placeholder, theme }) => {
  const [value, setValue] = useState('');
  const handleChange = (e) => setValue(e.target.value);
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      className={s[theme]}
      onChange={handleChange}
    />
  );
};

TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};

export default TextInput;
