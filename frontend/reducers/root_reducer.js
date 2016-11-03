import { combineReducers } from 'redux';
import SessionReducer from './session_reducer.js';
import RecordingsReducer from './recordings_reducer';
import RecordingDetailsReducer from './recording_details_reducer';


export default combineReducers({
  session: SessionReducer,
  recordings: RecordingsReducer,
  recordingDetail: RecordingDetailsReducer
});
