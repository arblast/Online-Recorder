import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';
import Welcome from './welcome';
import HomeContainer from './home_container';
import SessionFormContainer from './auth/session_form_container';
import NewRecordingContainer from './recordings/new_recording_container';
import MyRecordingsContainer from './my_recordings_container';
import RecordingContainer from './recordings/recording_container';
import FavoritesContainer from './favorites_container';
import SearchContainer from './search_container';
import BrowseContainer from './browse_container';
import PasswordReset from './password_reset';
import PasswordResetToken from './password_reset_token';
import { fetchRecordings, fetchRecording, fetchPopular, fetchCategories  } from '../actions/recordings_actions';

const Root = ({ store }) => {


  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/home');
    }
  };
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    } else {
      store.dispatch(fetchCategories());
    }
  };

  const getRecordings = (nextState) => {
    store.dispatch(fetchRecordings({request: {type: 'uploaded'}}));
  }

  const getMain = (nextState) => {
    store.dispatch(fetchPopular({request: {type: 'popular'}}));
  }

  const getFavorites = (nextState) => {
    store.dispatch(fetchRecordings({request: {type: 'favorites'}}));
  }

  const getRecording = (nextState) => {
    store.dispatch(fetchRecording(nextState.params.recordingId));
  }

  const getSearchResults = (nextState) => {
    store.dispatch(fetchRecordings({request: {type: 'search', params: nextState.params.searchParams}}));
  }

  const getAllRecordings = () => {
    store.dispatch(fetchRecordings({request: {type: 'search', params: ""}}));
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
            <IndexRoute component={BrowseContainer} onEnter={getMain}/>
            <Route path="/favorites" component={FavoritesContainer} onEnter={getFavorites}/>
            <Route path="/new" component={NewRecordingContainer}/>
            <Route path="/my-recordings" component={MyRecordingsContainer} onEnter={getRecordings}/>
            <Route path="/recording/:recordingId" component={RecordingContainer} onEnter={getRecording}/>
            <Route path="/search/:searchParams" component={SearchContainer} onEnter={getSearchResults}/>
            <Route path="/search/" component={SearchContainer} onEnter={getAllRecordings}/>
          </Route>
          <Route path="/password_reset" component={PasswordReset}/>
          <Route path="/reset/:resetToken" component={PasswordResetToken}/>
      </Router>
    </Provider>
  );
};
export default Root;
