import React from 'react';
import { hashHistory } from 'react-router';

class RecordingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.currentRecording.title,
      category: props.currentRecording.category,
      description: props.currentRecording.description,
      publicity: props.currentRecording.publicity,
    };
    if (props.formType === '/new') {
      this.state.recording_url = props.recordingUrl
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const recording = this.state;
    this.props.processForm({recording});
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
    return e => this.setState({[property]: e.target.value});
  }

  render() {

    return(
      <div className='modal-background' onClick={this.props.closeForm}>
        <form className='recording-form' onSubmit={this.handleSubmit}>
          <span className="close" onClick={this.props.closeForm}>x</span>
          <h2 className='recording-form-label'>{this.props.formType}</h2>
          <div>
            <input type='text'onChange={this.update('title')} placeholder='Title'/>
            <br/><br/>
            <input type='text'onChange={this.update('category')} placeholder='Category'/>
            <br/><br/>
            <textarea onChange={this.update('description')} placeholder='Description'></textarea>
            <br/><br/>
            <input type='text'onChange={this.update('publicity')} placeholder='Publicity'/>
          </div>
          <br/>
          <ul className= 'errorUL'>
            {this.props.errors.map( (error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <input type='submit'value='Submit'/>
        </form>
      </div>
    )
  }

}

export default RecordingForm;
