import React from 'react';
import { Link, hashHistory } from 'react-router';

class MyRecordings extends React.Component {

  constructor(props) {
    super(props);
    this.newRecordingButton = <Link className="new-recording-button" to="/new">New Recording</Link>;
    this.handleDelete = this.handleDelete.bind(this);
  }

  recordingDetail(recordingId) {
    return e => {
      hashHistory.push(`/recording/${recordingId}`);
    };
  }

  handleDelete(recordingId) {
    return e => {
      if(window.confirm("Are you sure you want to delete this recording?")) {
        this.props.deleteRecording(recordingId);
      }
    }
  }

  render() {
    return(
      <div className='my-recordings'>
        {this.newRecordingButton}
        <h2>My Recordings</h2>
        <table className='my-recordings-list'>
          <tbody>
            {this.props.myRecordings.map((recording, idx)=>(
              <tr key={idx} className='my-recordings-list-item'>
                  <td id="item-image" onClick={this.recordingDetail(recording.id)}><img className='recordings-list-image' src={recording.image_url}/></td>
                  <td id="item-button" className='recordings-list-button' onClick={this.recordingDetail(recording.id)}>{recording.title}</td>
                  <td><audio controls src={recording.recording_url}></audio></td>
                  <td><img src='http://res.cloudinary.com/record-cloud/image/upload/v1478740782/delete.jpg'className='recordings-list-delete' onClick={this.handleDelete(recording.id)}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MyRecordings;
