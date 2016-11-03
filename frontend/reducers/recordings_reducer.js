import { RECEIVE_RECORDINGS} from '../actions/recordings_actions.js';
import { merge } from 'lodash';


const RecordingReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_RECORDINGS:
      return action.recordings;
    default:
      return oldState;
  }
};

export default RecordingReducer;
