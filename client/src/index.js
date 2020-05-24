import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import orders from './reducers/combReducers';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(orders, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
