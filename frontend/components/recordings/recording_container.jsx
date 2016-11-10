import React from 'react';
import Recording from './recording';
import { connect } from 'react-redux';
import { deleteRecording, updateRecording } from '../../actions/recordings_actions';


const mapStateToProps = (state) => ({
  recording: state.recordingDetail
})

const mapDispatchToProps = (dispatch) => ({
  deleteRecording: (id) => dispatch(deleteRecording(id)),
  updateRecording: (recordingParams) => dispatch(updateRecording(recordingParams))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recording);
