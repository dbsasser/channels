import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

let store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
