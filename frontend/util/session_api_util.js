export const signup = (userParams, success, error) => {
  $.ajax({
    type: 'POST',
    url: '/api/users',
    data: userParams,
    success,
    error
  });
}

export const login = (userParams, success, error) => {
  $.ajax({
    type: 'POST',
    url: '/api/session',
    data: userParams,
    success,
    error
  });
}

export const logout = (success, error) => {
  $.ajax({
    type: 'DELETE',
    url: '/api/session',
    success,
    error
  });
}
