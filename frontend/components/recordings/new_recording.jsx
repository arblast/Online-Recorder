import React from 'react';
import { hashHistory } from 'react-router';
import RecordingForm from './recording_form';

class NewRecording extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRecording: "false",
      recordingComplete: "false",
      showForm: false
    }
    this.showForm = this.showForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  cancel(e) {
    e.preventDefault();
    hashHistory.push('/home');
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

  render() {
    let form = null;

    if(this.state.showForm) {
      form = <RecordingForm currentRecording={{}} processForm={this.props.createRecording} errors={[]} closeForm={this.closeForm}/>;
    }

    return(
      <div>
        <h2>New Recording</h2>
        <button onClick={this.showForm}>Save</button>
        <button onClick={this.cancel}>Cancel</button>
        {form}
      </div>
    )
  }
}

export default NewRecording;
