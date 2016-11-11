import React from 'react';
import { connect } from 'react-redux';
import Favorites from './favorites';

const mapStateToProps = (state) => {
  return {
    favoriteRecordings: state.recordings
  }
;}

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
