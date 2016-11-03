export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const GUEST_LOGIN = "GUEST_LOGIN";

export const signup = (userParams) => ({
  type: SIGNUP,
  userParams
});

export const login = (userParams) => ({
  type: LOGIN,
  userParams
});

export const guestLogin = () => ({
  type: GUEST_LOGIN
});

export const logout = () => ({
  type: LOGOUT
});

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});
