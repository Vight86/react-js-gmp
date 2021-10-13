import classNames from 'classnames';
import s from './Button.scss';

const Button = ({
  theme, isWide, children, onClick,
}) => (
  <button
    type="button"
    className={classNames(s[theme], { [s.wide]: isWide, [s.normal]: !isWide })}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  theme: PropTypes.string.isRequired,
  isWide: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string,
};

Button.defaultProps = {
  children: '',
};

export default Button;
