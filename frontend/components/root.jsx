import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Welcome from './welcome';
import HomeContainer from './home_container';
import SessionFormContainer from './auth/session_form_container';
import { login } from '../actions/session_actions';

const Root = ({ store }) => {


  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/home')
    }
  }
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  }

  return(
    <Provider store={store}>
      <Router history={hashHistory}>
          <Route path="/" component={Welcome} onEnter={_redirectIfLoggedIn}>
            <Route path="/login" component={SessionFormContainer} onEnter = {_redirectIfLoggedIn}/>
            <Route path="/signup" component={SessionFormContainer} onEnter = {_redirectIfLoggedIn}/>
            <Route path="/guest" component={SessionFormContainer} onEnter = {_redirectIfLoggedIn}/>
          </Route>
          <Route path="/home" component={HomeContainer} onEnter={_ensureLoggedIn}>
          </Route>
      </Router>
    </Provider>
  );
};
export default Root;
