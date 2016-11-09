export const CREATE_RECORDING = "CREATE_RECORDING";
export const UPDATE_RECORDING = "UPDATE_RECORDING";
export const DELETE_RECORDING = "DELETE_RECORDING";
export const FETCH_RECORDING = "FETCH_RECORDING";
export const FETCH_RECORDINGS = "FETCH_RECORDINGS";
export const RECEIVE_RECORDING = "RECEIVE_RECORDING";
export const RECEIVE_RECORDINGS = "RECEIVE_RECORDINGS";
export const RECEIVE_RECORDING_ERRORS = "RECEIVE_RECORDING_ERRORS";

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
