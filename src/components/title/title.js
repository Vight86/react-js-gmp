import s from './title.scss';

const Title = ({ title }) => (<h1 className={s.primary}>{title}</h1>);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
