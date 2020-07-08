import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import channelReducer from './reducers/channelReducer'
import {BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import loginForm from './components/loginForm'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(channelReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
        <Router>
          <Switch>
            <Route exact path="/login" component={loginForm} />
            <Route exact path="/channels/:id" component={App}  />
          </Switch>
        </Router>
      </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
