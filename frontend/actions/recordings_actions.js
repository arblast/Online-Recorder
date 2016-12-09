export const CREATE_RECORDING = "CREATE_RECORDING";
export const UPDATE_RECORDING = "UPDATE_RECORDING";
export const DELETE_RECORDING = "DELETE_RECORDING";
export const FETCH_RECORDING = "FETCH_RECORDING";
export const FETCH_RECORDINGS = "FETCH_RECORDINGS";
export const RECEIVE_RECORDING = "RECEIVE_RECORDING";
export const RECEIVE_RECORDINGS = "RECEIVE_RECORDINGS";
export const RECEIVE_RECORDING_ERRORS = "RECEIVE_RECORDING_ERRORS";
export const CLEAR_RECORDING_ERRORS = "CLEAR_RECORDING_ERRORS";
export const CREATE_COMMENT = "CREATE_COMMENT";
export const CREATE_FAVORITE = "CREATE_FAVORITE";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const FETCH_POPULAR = "FETCH_POPULAR";
export const RECEIVE_POPULAR = "RECEIVE_POPULAR";

export const createRecording = (recordingParams) => ({
  type: CREATE_RECORDING,
  recordingParams
});

export const updateRecording = (recordingParams) => ({
  type: UPDATE_RECORDING,
  recordingParams
});

export const deleteRecording = (recordingId) => ({
  type: DELETE_RECORDING,
  recordingId
});

export const fetchRecording = (recordingId) => ({
  type: FETCH_RECORDING,
  recordingId
});

export const fetchRecordings = (requestParams) => ({
  type: FETCH_RECORDINGS,
  requestParams
});

export const fetchPopular = (requestParams) => ({
  type: FETCH_POPULAR,
  requestParams
});

export const receiveRecordingErrors = (errors) => ({
  type: RECEIVE_RECORDING_ERRORS,
  errors
});

export const receiveRecording = (recording) => ({
  type: RECEIVE_RECORDING,
  recording
});

export const receiveRecordings = (recordings) => ({
  type: RECEIVE_RECORDINGS,
  recordings
});

export const receivePopular = (popular) => ({
  type: RECEIVE_POPULAR,
  popular
});

export const clearRecordingErrors = () => ({
  type: CLEAR_RECORDING_ERRORS
});

export const createComment = (commentParams) => ({
  type: CREATE_COMMENT,
  commentParams
});

export const createFavorite = (favoriteParams) => ({
  type: CREATE_FAVORITE,
  favoriteParams
});

export const deleteComment = (commentId) => ({
  type: DELETE_COMMENT,
  commentId
});

export const deleteFavorite = (recordingId) => ({
  type: DELETE_FAVORITE,
  recordingId
});
