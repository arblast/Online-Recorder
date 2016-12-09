import React from 'react';
import { connect } from 'react-redux';
import Browse from './browse';

const mapStateToProps = (state) => {
  return {
    recordings: state.recordings
  }
;}

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Browse);
