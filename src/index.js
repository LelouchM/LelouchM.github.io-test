import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Route } from 'react-router';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createHashHistory';

import reducer from './reducers/index';
import App from './App';
import Home from './Home';

const history = createHistory();

const store = (NODE_ENV === 'development')
  ? createStore(reducer, require('redux-devtools-extension').composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history))))
  : createStore(reducer, applyMiddleware(thunk, routerMiddleware(history)));


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/home" component={Home} />
      </div>
    </ConnectedRouter>
  </Provider>,
document.getElementById('app'));
