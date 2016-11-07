import React from 'react';
import { connect } from 'react-redux';
import NewRecording from './new_recording';
import { createRecording } from '../../actions/recordings_actions';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createRecording: (recordingParams) => dispatch(createRecording(recordingParams))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewRecording);
