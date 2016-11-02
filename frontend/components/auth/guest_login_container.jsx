import React from 'react';
import GuestLogin from './guest_login';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  loggedIn: state.session.currentUser !== null,
})

export default connect(
  mapStateToProps,
)(GuestLogin);
