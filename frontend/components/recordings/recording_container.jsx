import React from 'react';
import Recording from './recording';
import { connect } from 'react-redux';
import { deleteRecording, updateRecording, clearRecordingErrors, createComment, deleteComment, createFavorite, deleteFavorite } from '../../actions/recordings_actions';


const mapStateToProps = (state) => {
  let currentUser = state.session.currentUser;
  if(!currentUser) {
    currentUser = {username: ""};
  }
  return {
    ownRecording: state.recordingDetail.uploader === currentUser.username,
    recording: state.recordingDetail,
    currentUser: currentUser.username,
    errors: state.recordingDetail.errors,
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteRecording: (id) => dispatch(deleteRecording(id)),
  updateRecording: (recordingParams) => dispatch(updateRecording(recordingParams)),
  clearRecordingErrors: () => dispatch(clearRecordingErrors()),
  createComment: (commentParams) => dispatch(createComment(commentParams)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  createFavorite: (favoriteParams) => dispatch(createFavorite(favoriteParams)),
  deleteFavorite: (recordingId) => dispatch(deleteFavorite(recordingId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recording);
