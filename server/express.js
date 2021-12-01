import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from '../src/store/store';
import App from '../src/App';

const app = express();

app.use('*', (req, res) => {
  const location = req.url;
  const context = {};

  fs.readFile(path.resolve('./dist/index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
    }

    return res.send(data.replace(
      '<div id="root"></div>',
      `<div id="root">${ReactDOMServer.renderToString(
        <Provider store={store}>
          <StaticRouter
            context={context}
            location={location}
          >
            <App />
          </StaticRouter>
        </Provider>,
      )}</div>`,
    ));
  });
});

app.use(express.static(path.resolve(__dirname, '../dist')));

app.listen(8001, () => console.log('Port is opened'));
