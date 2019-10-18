export const sendEmail = (email, type, success, error) => {
  $.ajax({
    type: 'POST',
    url: '/api/password_reset',
    data: {
      'password_reset': {
        email
      },
      type
    },
    success,
    error
  });
}

export const checkLink = (token, success, error) => {
  $.ajax({
    type: 'GET',
    url: `/api/password_reset/${token}/edit`,
    success,
    error
  });
}

export const setPassword = (token, password, success, error) => {
  $.ajax({
    type: 'PATCH',
    url: `/api/password_reset/${token}`,
    data: {
      user: {
        password
      }
    },
    success,
    error
  });
}
