import React, { Component } from 'react';
import s from './ErrorBoundary.scss';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error) {
    this.setState({
      error,
    });
  }

  render() {
    const { error } = this.state;
    if (error) {
      return (
        <div className={s.errorWrapper}>
          <h1 className={s.errorTitle}>Error</h1>
          <p className={s.errorText}>Please try to reload this page</p>
        </div>
      );
    }

    const { children } = this.props;

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
};
