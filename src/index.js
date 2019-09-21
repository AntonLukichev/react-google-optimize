import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
