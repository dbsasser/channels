import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import channelReducer from './reducers/channelReducer'
import {BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import loginForm from './components/loginForm'
import signupForm from './components/signupForm'
import ViewAllChannels from './containers/ViewAllChannels'
import Welcome from './containers/Welcome'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(channelReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
        <Router>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/login" component={loginForm} />
            <Route exact path="/signup" component={signupForm} />
            <Route exact path="/channels/all" component={ViewAllChannels} />
            <Route exact path="/channels/:id" component={App}  />
          </Switch>
        </Router>
      </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
