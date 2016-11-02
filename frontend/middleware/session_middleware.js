import { LOGIN, LOGOUT, SIGNUP, GUEST_LOGIN , receiveCurrentUser, receiveErrors } from '../actions/session_actions';
import { signup, login, logout } from '../util/session_api_util';


const SessionMiddleware =  store => next => action => {
  const sessionSuccess = (data) => store.dispatch(receiveCurrentUser(data));
  const sessionError = (data) => store.dispatch(receiveErrors(data.responseJSON));
  switch (action.type) {
    case SIGNUP:
      signup(action.userParams, sessionSuccess, sessionError);
      return next(action);
    case LOGIN:
      login(action.userParams, sessionSuccess, sessionError);
      return next(action);
    case LOGOUT:
      logout(() => next(action));
    default:
      return next(action);
  }
}

export default SessionMiddleware;
