import React from 'react';
import { Link, hashHistory } from 'react-router';
import AudioPlayer from 'react-responsive-audio-player';


class MyRecordings extends React.Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.setTab('home');
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
        {this.props.newRecordingButton}
        <h2>My Recordings</h2>
        <table className='my-recordings-list'>
          <tbody>
            {this.props.myRecordings.map((recording, idx)=>{
              return (
                <tr key={idx} className='my-recordings-list-item'>
                    <td id="item-image" onClick={this.recordingDetail(recording.id)}><img className='recordings-list-image' src={recording.image_url}/></td>
                    <td id="item-button" className='recordings-list-button' onClick={this.recordingDetail(recording.id)}>{recording.title}</td>
                    <td>
                      <AudioPlayer playlist={[{url: recording.recording_url, displayText: `Recorded by ${recording.uploader}`}]} hideBackSkip={true}/>
                    </td>
                    <td><img src='http://res.cloudinary.com/record-cloud/image/upload/v1478740782/delete.jpg'className='recordings-list-delete' onClick={this.handleDelete(recording.id)}/></td>
                </tr>
            )})}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MyRecordings;
