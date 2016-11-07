import { RECEIVE_RECORDING, DELETE_RECORDING } from '../actions/recordings_actions';
import { RECEIVE_ERRORS } from '../actions/session_actions';

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
      return action.recording;
    case DELETE_RECORDING:
      return {};
    case RECEIVE_ERRORS:
      return merge({}, state, { errors: action.errors });
    default:
      return oldState;
  }
};

export default RecordingDetailsReducer;
