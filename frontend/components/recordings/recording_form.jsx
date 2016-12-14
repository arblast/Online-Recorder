import React from 'react';
import { hashHistory } from 'react-router';

class RecordingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.currentRecording.title,
      category_name: props.currentRecording.category_name,
      description: props.currentRecording.description,
      publicity: props.currentRecording.publicity,
      uploading: false,
      image_url: props.currentRecording.image_url,
      noTitleError: null
    };
    if (props.formType === 'new') {
      this.state.recording_url = "";
      this.imageUploaded = false;
    } else {
      this.imageUploaded = true;
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.disablePage = null;
    this.updateRadio = this.updateRadio.bind(this);
    this.openUpload = this.openUpload.bind(this);
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
          that.state.recording_url = data.secure_url;
          console.log("Upload complete!");
          const recording = that.state;
          that.props.processForm({recording});
          hashHistory.push('/my-recordings');
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
      if(this.props.formType === 'new') {
        this.uploadRecording(this.props.recording);
        this.setState({uploading: true});
      } else {
        let recording = this.state;
        recording.id = this.props.currentRecording.id;
        this.props.processForm({recording});
        this.props.closeForm({target: {className: "close"}, preventDefault: e.preventDefault});
      }
    }
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
    return e => {
      this.setState({[property]: e.target.value});
    }
  }

  updateRadio(value) {
    return (e) => {
      e.preventDefault;
      this.setState({publicity: value});
    }
  }

  render() {
    let uploadItem = this.imageUploaded ? <img className='icon-preview' src={this.state.image_url}/> : <p>Upload Cover Picture</p>;
    const imageForm = <div className="upload-picture" onClick={this.openUpload}>{uploadItem}</div>
    if(this.state.uploading) {
      this.disablePage = <div className="disable-page"><div className="loader"></div></div>;
    }
    let publicRadio = "radio-circle";
    let privateRadio = "radio-circle";
    if(this.state.publicity === "public") {
      publicRadio = "radio-circle filled";
    } else {
      privateRadio = "radio-circle filled";
    }
    return(
      <div className='modal-background' onClick={this.props.closeForm}>
        {this.disablePage}
        <form className='recording-form' >
          <span className="close" onClick={this.props.closeForm}>x</span>
          <h2 className='recording-form-label'>Recording Info</h2>
          <div>
            <input className = 'recording-form-text' value={this.state.title} type='text'onChange={this.update('title')} placeholder='Title'/>
            <br/><br/>
            <label>Category  <select value={this.state.category_name} onChange={this.update('category_name')}>
              <option value="Meeting">Meeting</option>
              <option value="Music">Music</option>
              <option value="Lecture">Lecture</option>
              <option value="Other">Other</option>
            </select></label>
            <br/><br/>
            <textarea className = 'recording-form-text' value={this.state.description} onChange={this.update('description')} placeholder='Description'></textarea>
            <br/><br/>
            <div className='radio-container' onClick={this.updateRadio("public")}><div className={publicRadio}></div><p>Public</p></div>
            <div className='radio-container' onClick={this.updateRadio("private")}><div className={privateRadio}></div><p>Private</p></div>
          </div>
          {imageForm}
          <br/>
          <ul className= 'errorUL'>
            {this.props.errors.map( (error, idx) => <li key={idx}>{error}</li>)}
            {this.state.noTitleError}
          </ul>
          <a className= 'submit-button' onClick={this.handleSubmit}>Submit</a>
        </form>
      </div>
    )
  }

}

export default RecordingForm;
