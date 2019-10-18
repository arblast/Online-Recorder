import React from 'react';

import {checkLink, setPassword} from '../util/user_api_util';

class PasswordResetToken extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      password: '',
      passwordConfirm: ''
    }
  }

  componentDidMount() {
    checkLink(
      this.props.params.resetToken,
      this.displayMessage,
      this.displayMessage
    );
  }

  displayMessage(e) {
    console.log(e);
  }

  submit() {
    if(this.state.password === this.state.passwordConfirm) {
      setPassword(
        this.props.params.resetToken,
        this.state.password,
        this.displayMessage,
        this.displayMessage
      );
    }
  }

  render() {
    return (
      <div>
        <div>New Password:
          <input type='password' value={this.state.password}
                 onChange={(e) => this.setState({password: e.target.value})}/>
        </div>
        <div>Re-enter Password:
          <input type='password' value={this.state.passwordConfirm}
                 onChange={(e) => this.setState({passwordConfirm: e.target.value})}/>
        </div>
        <button onClick={() => this.submit()}>Submit</button>
      </div>
    );
  }
}

export default PasswordResetToken;
