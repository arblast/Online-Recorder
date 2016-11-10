import React from 'react';
import Recording from './recording';
import { connect } from 'react-redux';
import { deleteRecording, updateRecording, clearRecordingErrors } from '../../actions/recordings_actions';


const mapStateToProps = (state) => ({
  ownRecording: state.recordingDetail.uploader === state.session.currentUser.username,
  recording: state.recordingDetail,
  errors: state.recordingDetail.errors
})

const mapDispatchToProps = (dispatch) => ({
  deleteRecording: (id) => dispatch(deleteRecording(id)),
  updateRecording: (recordingParams) => dispatch(updateRecording(recordingParams)),
  clearRecordingErrors: () => dispatch(clearRecordingErrors())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recording);
