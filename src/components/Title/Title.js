import React from 'react';
import PropTypes from 'prop-types';
import s from './Title.scss';

const Title = ({ children }) => (<h1 className={s.primary}>{children}</h1>);

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
