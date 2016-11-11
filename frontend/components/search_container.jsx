import React from 'react';
import { connect } from 'react-redux';
import Search from './search';

const mapStateToProps = (state) => {
  return {
    searchRecordings: state.recordings
  }
;}

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
