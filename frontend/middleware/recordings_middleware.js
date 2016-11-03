import { CREATE_RECORDING, UPDATE_RECORDING, DELETE_RECORDING, FETCH_RECORDING, FETCH_RECORDINGS, receiveRecording, receiveRecordings} from '../actions/recordings_actions';
import { newRecording, updateRecording, deleteRecording, fetchRecordings, fetchRecording } from '../util/recordings_api_util';

const RecordingMiddleware = store => next => action => {
  let success;
  let error;
  switch (action.type) {
    case CREATE_RECORDING:
      success = (data) => store.dispatch(receiveRecording(data));
      newRecording(action.recordingParams, success, error);
      return next(action);
    case UPDATE_RECORDING:
      success = (data) => store.dispatch(receiveRecording(data));
      updateRecording(action.recordingParams, success, error);
      return next(action);
    case DELETE_RECORDING:
      success = () => next(action);
      deleteRecording(action.recordingId, success);
      break;
    case FETCH_RECORDING:
      success = (data) => store.dispatch(receiveRecording(data));
      fetchRecording(action.recordingId, success);
      return next(action);
    case FETCH_RECORDINGS:
      success = (data) => store.dispatch(receiveRecordings(data));
      fetchRecordings(action.requestParams, success);
      return next(action);
    default:
      return next(action);
  }
};

export default RecordingMiddleware;
