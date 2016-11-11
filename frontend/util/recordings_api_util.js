export const newRecording = (recordingParams, success, error) => {
  $.ajax({
    type: 'POST',
    url: '/api/recordings',
    data: recordingParams,
    success,
    error
  });
};

export const updateRecording = (recordingParams, success, error) => {
  $.ajax({
    type: 'PATCH',
    url: `/api/recordings/${recordingParams.recording.id}`,
    data: recordingParams,
    success,
    error
  });
};

export const deleteRecording = (recordingId, success, error) => {
  $.ajax({
    type: 'DELETE',
    url: `/api/recordings/${recordingId}`,
    success,
    error
  });
};

export const fetchRecordings = (requestParams, success, error) => {
  $.ajax({
    type: 'GET',
    url: '/api/recordings',
    data: requestParams,
    success,
    error
  });
};

export const fetchRecording = (recordingId, success, error) => {
  $.ajax({
    type: 'GET',
    url: `/api/recordings/${recordingId}`,
    success,
    error
  });
};

export const createComment = (commentParams, success, error) => {
  $.ajax({
    type: 'POST',
    url: '/api/comments',
    data: commentParams,
    success,
    error
  });
};

export const createFavorite = (favoriteParams, success, error) => {
  $.ajax({
    type: 'POST',
    url: '/api/favorites',
    data: favoriteParams,
    success,
    error
  });
};

export const deleteComment = (commentId, success, error) => {
  $.ajax({
    type: 'DELETE',
    url: `/api/comments/${commentId}`,
    success,
    error
  });
};

export const deleteFavorite = (recordingId, success, error) => {
  $.ajax({
    type: 'DELETE',
    url: `/api/favorites/${recordingId}`,
    success,
    error
  });
};

// export const uploadRecording = (file) => {
//   $.ajax({
//     type: 'POST',
//     url: 'https://api.cloudinary.com/v1_1/record-cloud/upload',
//     data: {file, upload_preset: window.cloudinary_options.upload_preset},
//     success: (e)=> console.log(e),
//     error: (e)=> console.log(e),
//   });
// };
