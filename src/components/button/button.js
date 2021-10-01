import classNames from 'classnames';
import s from './button.scss';

const Button = ({ theme, isWide, children }) => (
  <button
    type="button"
    className={classNames(s[theme], { [s.wide]: isWide, [s.normal]: !isWide })}
  >
    {children}
  </button>
);

Button.propTypes = {
  theme: PropTypes.string.isRequired,
  isWide: PropTypes.bool.isRequired,
  children: PropTypes.string,
};

Button.defaultProps = {
  children: '',
};

export default Button;
