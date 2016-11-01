import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Home from './home';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={Home} >
        </Route>
    </Router>
  </Provider>
);

export default Root;
