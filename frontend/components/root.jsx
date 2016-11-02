import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Welcome from './welcome';
import HomeContainer from './home_container';
import SessionFormContainer from './session_form_container';
import GuestLoginContainer from './guest_login_container';

const Root = ({ store }) => {
  const currentUser = store.getState().session.currentUser;
  const _redirectIfLoggedIn = (nextState, replace) => {
    if (currentUser) {
      replace('/home')
    }
  }
  const _ensureLoggedIn = (nextState, replace) => {
    if (!currentUser) {
      replace('/');
    }
  };
  return(
    <Provider store={store}>
      <Router history={hashHistory}>
          <Route path="/" component={Welcome} >
            <Route path="/login" component={SessionFormContainer} onEnter = {_redirectIfLoggedIn}/>
            <Route path="/signup" component={SessionFormContainer} onEnter = {_redirectIfLoggedIn}/>
            <Route path="/guest-login" component={GuestLoginContainer} onEnter = {_redirectIfLoggedIn}/>
          </Route>
          <Route path="/home" component={HomeContainer} onEnter={_ensureLoggedIn}>
          </Route>
      </Router>
    </Provider>
  );
};
export default Root;
