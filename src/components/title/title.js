import s from './title.scss';

const Title = ({ children }) => (<h1 className={s.primary}>{children}</h1>);

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
