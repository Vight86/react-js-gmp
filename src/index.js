import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styles from './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App styles={styles} />
  </React.StrictMode>,
  document.getElementById('root'),
);
