import React from 'react';
import { connect } from 'react-redux';
import NewRecording from './new_recording';
import { createRecording, fetchRecordings, clearRecordingErrors } from '../../actions/recordings_actions';

const mapStateToProps = ({recordingDetail}) => ({
  errors: recordingDetail.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createRecording: (recordingParams) => dispatch(createRecording(recordingParams)),
    fetchRecordings: () => dispatch(fetchRecordings({request: {type: 'uploaded'}})),
    clearRecordingErrors: () => dispatch(clearRecordingErrors())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewRecording);
