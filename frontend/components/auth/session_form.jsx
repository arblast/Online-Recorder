import React from 'react';
import { Link, hashHistory} from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.formType === 'signup') {
        this.state = {
        username: "",
        password: "",
        email: "",
      };
    } else {
      this.state = {
        username: "",
        password: ""
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.backToWelcome = this.backToWelcome.bind(this);
  }

  componentDidUpdate() {
    if (this.props.loggedIn) {
      hashHistory.push('/home');
    }
  }

  backToWelcome(className) {
    return (e) => {
      if(e.target.className === className) {
        e.stopPropagation();
        hashHistory.push('/');
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }
  render() {
    let emailForm;
    if (this.props.formType === 'signup') {
      emailForm = <input type='text' onChange={this.update('email')} placeholder='Email'/>
    }
    return (
      <div className='session-form-background' onClick={this.backToWelcome('session-form-background')}>
        <form className='session-form' onSubmit={this.handleSubmit}>
          <span className="close" onClick={this.backToWelcome('close')}>x</span>
          <h2 className='session-form-label'>{this.props.formType}</h2>
          <input type='text'onChange={this.update('username')} placeholder='Username'/>
          <br/>
          <br/>
          <input type='password'onChange={this.update('password')} placeholder='Password'/>
          <br/>
          <br/>
          {emailForm}
          <ul>
            {this.props.errors.map( (error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <input type='submit'value='Submit'/>
        </form>
      </div>
    )
  }
}

export default SessionForm;
