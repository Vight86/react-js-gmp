import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App';

const app = express();

app.use('*', (req, res) => {
  fs.readFile(path.resolve('./dist/index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
    }

    return res.send(data.replace('<div id="root"></div>', `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`));
  });
});

app.use(express.static(path.resolve(__dirname, '../dist')));

app.listen(8001, () => console.log('Port is opened'));
