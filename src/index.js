import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import styles from './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App styles={styles} />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root'),
);
