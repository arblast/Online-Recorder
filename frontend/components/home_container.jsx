import React from 'react';
import Home from './home';
import {connect} from 'react-redux';
import {logout} from '../actions/session_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  recordings: state.recordings
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  searchRecordings: (searchParams) => dispatch(fetchRecordings({request: {type: 'search', params: searchParams}}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
