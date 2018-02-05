import { combineReducers } from 'redux';
import SessionReducer from './session_reducer.js';
import RecordingsReducer from './recordings_reducer';
import RecordingDetailsReducer from './recording_details_reducer';
import PopularReducer from './popular_reducer';
import CategoriesReducer from './categories_reducer';


export default combineReducers({
  session: SessionReducer,
  recordings: RecordingsReducer,
  recordingDetail: RecordingDetailsReducer,
  popular: PopularReducer,
  categories: CategoriesReducer
});
