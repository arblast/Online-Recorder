import { CREATE_RECORDING, UPDATE_RECORDING, DELETE_RECORDING, FETCH_RECORDING, FETCH_RECORDINGS, CREATE_COMMENT, CREATE_FAVORITE, DELETE_COMMENT, DELETE_FAVORITE, receiveRecording, receiveRecordings, receiveRecordingErrors} from '../actions/recordings_actions';
import { newRecording, updateRecording, deleteRecording, fetchRecordings, fetchRecording, createComment, deleteComment, createFavorite, deleteFavorite } from '../util/recordings_api_util';

const RecordingMiddleware = store => next => action => {
  let success = (data) => store.dispatch(receiveRecording(data));
  let error = (data) => store.dispatch(receiveRecordingErrors(data.responseJSON));
  switch (action.type) {
    case CREATE_RECORDING:
      newRecording(action.recordingParams, success, error);
      return next(action);
    case UPDATE_RECORDING:
      updateRecording(action.recordingParams, success, error);
      return next(action);
    case DELETE_RECORDING:
      success = (data) => store.dispatch(receiveRecordings(data));
      deleteRecording(action.recordingId, success);
      return next(action);
    case FETCH_RECORDING:
      fetchRecording(action.recordingId, success, error);
      return next(action);
    case FETCH_RECORDINGS:
      success = (data) => store.dispatch(receiveRecordings(data));
      fetchRecordings(action.requestParams, success);
      return next(action);
    case CREATE_COMMENT:
      createComment(action.commentParams, success, error);
      return next(action);
    case CREATE_FAVORITE:
      createFavorite(action.favoriteParams, success, error);
      return next(action);
    case DELETE_COMMENT:
      deleteComment(action.commentId, success, error);
      return next(action);
    case DELETE_FAVORITE:
      deleteFavorite(action.recordingId, success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default RecordingMiddleware;
