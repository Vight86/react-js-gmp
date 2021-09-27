import s from './button.scss';

const Button = ({ theme, isWide, text }) => (
  <button
    type="button"
    className={`${s[theme]} ${isWide ? s.wide : s.normal}`}
  >
    {text}
  </button>
);

Button.propTypes = {
  theme: PropTypes.string.isRequired,
  isWide: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
