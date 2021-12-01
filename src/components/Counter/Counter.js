import PropTypes from 'prop-types';
import React from 'react';
import s from './Counter.scss';

const Counter = ({ number }) => {
  const text = number === 1 ? ' movie found' : ' movies found';

  return (
    <p className={s.counter}>
      <span className={s.bold}>{number}</span>
      {text}
    </p>
  );
};

Counter.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Counter;
