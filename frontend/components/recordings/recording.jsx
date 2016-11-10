import React from 'react';
import { hashHistory } from 'react-router';
import RecordingForm from './recording_form';

class Recording extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    }
    this.showForm = this.showForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  showForm(e) {
    e.preventDefault();
    this.setState({showForm: true});
  }

  closeForm(e) {
    e.preventDefault();
    if(e.target.className === 'modal-background' || e.target.className === 'close'){
        this.setState({showForm: false});
    }
  }

  handleDelete() {
    if(window.confirm("Are you sure you want to delete this recording?")) {
      this.props.deleteRecording(this.props.recording.id);
      hashHistory.push('/home');
    }
  }




  render() {
    const recording = this.props.recording;
    let editForm = null;
    let form = null;
    if (this.props.ownRecording) {
      editForm = <div className="edit-buttons"><button onClick={this.showForm} >Edit Recording Details</button><button onClick={this.handleDelete} >Delete Recording</button></div>
    }
    if(this.state.showForm) {
      form = <RecordingForm formType={'edit'} currentRecording={recording} processForm={this.props.updateRecording} errors={this.props.errors} closeForm={this.closeForm} clearRecordingErrors={this.props.clearRecordingErrors}/>;
    }
    return(
      <div className="recording-detail">
        <h2>{recording.title}</h2>
        <h3>Recorded by {recording.uploader}</h3>
        <br/>
        <img className='recording-detail-image' src={recording.image_url}></img>
        <audio controls src={recording.recording_url}></audio>
        <br/>
        <label className='description-label'>Description
          <p>{recording.description}</p>
        </label>
        <br/>
        <h5>Category: {recording.category_name}</h5>
        {editForm}
        {form}
        <h4>Comments</h4>
      </div>
    );
  }


}

export default Recording;
