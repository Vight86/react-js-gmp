import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import styles from './index.scss';
import store from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <App styles={styles} />
      </ErrorBoundary>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root'),
);
