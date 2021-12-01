import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import styles from './index.scss';
import store from './store/store';

ReactDOM.hydrate(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <StaticRouter>
          <App styles={styles} />
        </StaticRouter>
      </ErrorBoundary>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root'),
);
