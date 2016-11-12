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
        image_url: null
      };
    } else {
      this.state = {
        username: "",
        password: "",
        time: 3
      };
    }
    this.imageUploaded = false;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.backToWelcome = this.backToWelcome.bind(this);
    this.openUpload = this.openUpload.bind(this);
  }

  componentDidUpdate() {
    if (this.props.loggedIn && this.props.formType !== 'guest') {
      hashHistory.push('/home');
    } else if (this.props.loggedIn && this.props.formType === 'guest' && this.state.time === 3){
      this.startCountdown = setInterval(() => {this.setState({time: this.state.time - 1});}, 1000);
    } else if (this.props.loggedIn && this.state.time === 0) {
      clearInterval(this.startCountdown);
      hashHistory.push('/home');
    }
  }

  componentDidMount() {
    if (this.props.formType ==='guest') {
      const user = {username:"guest", password: "password"};
      this.props.processForm({user});
    }
  }

  componentWillUnmount() {
    this.state.username = "";
    this.state.password = "";
    this.state.email = "";
    this.props.clearErrors();
  }

  backToWelcome(className) {
    if(this.props.formType !== 'guest'){
      return (e) => {
        if(e.target.className === className) {
          e.stopPropagation();
          hashHistory.push('/');
        }
      };
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  openUpload() {
    cloudinary.openUploadWidget({cloud_name: window.cloudinary_options.cloud_name, upload_preset: window.cloudinary_options.upload_preset},
    (error, result) => {
      if(!error){
        this.imageUploaded = true;
        this.setState({image_url: result[0].secure_url});
      }
    });
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }
  render() {
    let emailForm;
    let imageForm;
    let uploadItem = this.imageUploaded ? <img className='icon-preview' src={this.state.image_url}/> : <p>Upload Profile Picture</p>;
    if (this.props.formType === 'signup') {
      emailForm = <input type='text' onChange={this.update('email')} placeholder='Email'/>;
      imageForm = <div className="upload-picture" onClick={this.openUpload}>{uploadItem}</div>
    }
    let submit = <input className='submit-button' type='submit'value='Submit'/>;
    let userForm =
      <div>
        <input type='text'onChange={this.update('username')} placeholder='Username'/>
        <br/>
        <br/>
        <input type='password'onChange={this.update('password')} placeholder='Password'/>
      </div>;
      let timeLeft = <p>Redirecting in {this.state.time}s</p>;
      if (this.props.loggedIn === false) {
        timeLeft = null;
      }
      let closeButton = <span className="close" onClick={this.backToWelcome('close')}>x</span>;
      if (this.props.formType === 'guest') {
        userForm =
        <div>
          Logging in as guest...
          {timeLeft}
        </div>;
        submit = null;
        closeButton = null;
      }
    return (
      <div className='modal-background' onClick={this.backToWelcome('modal-background')}>
        <form className='session-form' onSubmit={this.handleSubmit}>
          {closeButton}
          <h2 className='session-form-label'>{this.props.formType}</h2>
          {userForm}
          <br/>
          {emailForm}
          <br/>
          {imageForm}
          <ul className= 'errorUL'>
            {this.props.errors.map( (error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          {submit}
        </form>
      </div>
    );
  }
}

export default SessionForm;
