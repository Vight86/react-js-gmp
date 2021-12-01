import PropTypes from 'prop-types';
import React from 'react';
import s from './PopupWrapper.scss';

const PopupWrapper = ({ children }) => (
  <div className={s.popupWrapper}>
    {children}
  </div>
);

PopupWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PopupWrapper;
