import { RECEIVE_RECORDING, DELETE_RECORDING, RECEIVE_RECORDING_ERRORS, CLEAR_RECORDING_ERRORS } from '../actions/recordings_actions';
import { merge } from 'lodash';

const nullRecording = {
  title: "",
  category: "",
  publicity: "public",
  uploader: "",
  plays: "",
  errors: []
}

const RecordingDetailsReducer = (oldState=nullRecording, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_RECORDING:
      return merge({}, action.recording, { errors: []});
    case DELETE_RECORDING:
      return nullRecording;
    case RECEIVE_RECORDING_ERRORS:
      return merge({}, oldState, { errors: action.errors });
    case CLEAR_RECORDING_ERRORS:
      return merge({}, oldState, { errors: []});
    default:
      return oldState;
  }
};

export default RecordingDetailsReducer;
