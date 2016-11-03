import { RECEIVE_RECORDING, DELETE_RECORDING } from '../actions/recordings_actions';

const RecordingDetailsReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_RECORDING:
      return action.recording;
    case DELETE_RECORDING:
      return {};
    default:
      return oldState;
  }
};

export default RecordingDetailsReducer;
