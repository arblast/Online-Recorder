import React from 'react';
import { hashHistory } from 'react-router';

class GuestLogin extends React.Component {

  componentDidUpdate() {
    if (this.props.loggedIn) {
      hashHistory.push('/home');
    }
  }

  render() {
    return <div className="loader"></div>;
  }
}

export default GuestLogin;
