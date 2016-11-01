import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, LOGOUT } from '../actions/session_actions'
import { merge } from 'lodash'

const nullUser = {
  currentUser: null,
  errors: []
}

const SessionReducer = (state=nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.currentUser, errors: []};
    case RECEIVE_ERRORS:
      return merge({}, state, { errors: action.errors });
    case LOGOUT:
      return nullUser;
    default:
      return state;
  }
}


export default SessionReducer;
