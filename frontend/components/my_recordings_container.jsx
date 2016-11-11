import React from 'react';
import { connect } from 'react-redux';
import MyRecordings from './my_recordings';
import { deleteRecording } from '../actions/recordings_actions';

const mapStateToProps = (state) => {
  return {
    myRecordings: state.recordings
  }
;}

const mapDispatchToProps = (dispatch) => ({
  deleteRecording: (recordingId) => dispatch(deleteRecording(recordingId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyRecordings);
