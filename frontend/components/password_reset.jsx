import React from 'react';

import {sendEmail} from '../util/user_api_util';

class PasswordReset extends React.Component {

  constructor() {
    super();
    this.state = {
      email: '',
      type: 'password'
    }
  }

  submit() {
    sendEmail(this.state.email, this.state.type, this.displayMessage, this.displayMessage);
  }

  displayMessage(message) {
    console.log(message);
  }

  render() {
    return (
      <div>
        <div>Email: <input type='text' value={this.state.email}
                      onChange={(e) => this.setState({email: e.target.value})}
                      placeholder='example@email.com'/>
        </div>
        <div>
          <select value={this.state.type}
                  onChange={(e) => this.setState({type: e.target.value})}>
            <option value='password'>Reset Password</option>
            <option value='username'>Forgot username</option>
          </select>
        </div>
        <button onClick={() => this.submit()}>Submit</button>
      </div>
    );
  }
}

export default PasswordReset;
