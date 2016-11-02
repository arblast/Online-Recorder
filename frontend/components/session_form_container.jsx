import React from 'react';
import {login, signup} from '../actions/session_actions';
import {connect} from 'react-redux';
import SessionForm from './session_form'

const mapStateToProps = (state) => ({
  loggedIn: state.session.currentUser !== null,
  errors: state.session.errors
})

const mapDispatchToProps= (dispatch, ownProps) => {
  let formType = ownProps.location.pathname.slice(1);
  let processForm = formType === "signup" ? signup : login;
  return {
    formType,
    processForm: (user) => dispatch(processForm(user))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
