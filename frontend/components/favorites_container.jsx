import React from 'react';
import { connect } from 'react-redux';
import Favorites from './favorites';
import { deleteRecording, fetchRecordings } from '../actions/recordings_actions';

const mapStateToProps = (state) => {
  return {
    myRecordings: state.recordings
  }
;}

const mapDispatchToProps = (dispatch) => ({
  fetchRecordings: () => dispatch(fetchRecordings({request: {type: 'favorites'}}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
