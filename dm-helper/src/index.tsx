import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';

import {StoreProvider} from "easy-peasy"
import store from './Store'
ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
      <StoreProvider store={store}>
        <App />
      </StoreProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


