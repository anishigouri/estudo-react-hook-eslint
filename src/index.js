import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import generateStore from './redux/store';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Provider store={generateStore()}>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
