import s from './CustomTexArea.scss';

const CustomTextArea = ({ value, handleChange }) => (
  <label className={s.textAreaLabel}>
    Overview
    <textarea
      className={s.textArea}
      value={value}
      onChange={handleChange}
    />
  </label>
);

CustomTextArea.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CustomTextArea;
