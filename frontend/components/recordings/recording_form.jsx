import React from 'react';
import { hashHistory } from 'react-router';

class RecordingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.currentRecording.title,
      category_name: props.currentRecording.categoryName,
      description: props.currentRecording.description,
      publicity: props.currentRecording.publicity,
      uploading: false,
      noTitleError: null
    };
    if (props.formType === 'new') {
      this.state.recording_url = "";
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.disablePage = null;
  }

  componentWillUnmount() {
    this.props.clearRecordingErrors();
  }

  uploadRecording(recordingBlob) {
    let fileReader = new FileReader();
    let that = this;
    fileReader.onload  = function(progressEvent) {
      const res = this.result;
      $.ajax({
        type: 'POST',
        url: 'https://api.cloudinary.com/v1_1/record-cloud/upload',
        data: {file: res, upload_preset: window.cloudinary_options.upload_preset},
        success: (data) => {
          that.state.recording_url = data.url;
          console.log("Upload complete!");
          const recording = that.state;
          that.props.processForm({recording});
          hashHistory.push('/home');
        },
        error: (e) => console.log(e)
      });
    }
    fileReader.readAsDataURL(recordingBlob);
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.title === '' )
    {
      this.setState({noTitleError: <li>Title can't be blank!</li>});
    } else {
      this.uploadRecording(this.props.recording);
      this.setState({uploading: true});
    }
  }

  closeModal(className) {
      return (e) => {
        if(e.target.className === className) {
          e.stopPropagation();
          hashHistory.push('/new');
        }
      };
  }

  update(property) {
    return e => {
      this.setState({[property]: e.target.value});
    }
  }

  render() {
    if(this.state.uploading) {
      this.disablePage = <div className="disable-page"><div className="loader"></div></div>;
    }
    return(
      <div className='modal-background' onClick={this.props.closeForm}>
        {this.disablePage}
        <form className='recording-form' >
          <span className="close" onClick={this.props.closeForm}>x</span>
          <h2 className='recording-form-label'>Recording Info</h2>
          <div>
            <input className = 'recording-form-text' type='text'onChange={this.update('title')} placeholder='Title'/>
            <br/><br/>
            <label>Category  <select value={this.state.category_name} onChange={this.update('category_name')}>
              <option value="Meeting">Meeting</option>
              <option value="Music">Music</option>
              <option value="Lecture">Lecture</option>
              <option value="Other">Other</option>
            </select></label>
            <br/><br/>
            <textarea className = 'recording-form-text' onChange={this.update('description')} placeholder='Description'></textarea>
            <br/><br/>
            <label>Public <input name='publicity' type='radio' checked={this.state.publicity === 'public'} onChange={this.update('publicity')} value='public' /></label>
            <br/>
            <label>Private <input name='publicity' type='radio' checked={this.state.publicity === 'private'} onChange={this.update('publicity')} value='private' /></label>
          </div>
          <br/>
          <ul className= 'errorUL'>
            {this.props.errors.map( (error, idx) => <li key={idx}>{error}</li>)}
            {this.state.noTitleError}
          </ul>
          <input onClick={this.handleSubmit} type='submit' value='Submit'/>
        </form>
      </div>
    )
  }

}

export default RecordingForm;
