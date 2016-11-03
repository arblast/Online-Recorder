import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { createRecording, updateRecording, deleteRecording, fetchRecording, fetchRecordings} from './actions/recordings_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
  const preloadedState = {session: {currentUser: window.currentUser, errors: []}};
  store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root store={store} />, root);
  window.store = store;
  window.createRecording = createRecording;
  window.updateRecording = updateRecording;
  window.deleteRecording = deleteRecording;
  window.fetchRecording = fetchRecording;
  window.fetchRecordings = fetchRecordings;
});
