import React from 'react';
import { Link, hashHistory } from 'react-router';
import AudioPlayer from './audio_player';


class MyRecordings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {showConfirm: false, deleteId: null};
    this.handleDelete = this.handleDelete.bind(this);
    this.showConfirm = this.showConfirm.bind(this);
    this.closeConfirm = this.closeConfirm.bind(this);
    this.confirmation = this.confirmation.bind(this);
  }

  componentDidMount() {
    this.props.setTab('home');
  }

  recordingDetail(recordingId) {
    return e => {
      hashHistory.push(`/recording/${recordingId}`);
    };
  }

  confirmation() {
    return (
      <div className='modal-background' onClick={this.closeConfirm}>
        <div className='confirmation-window'>
          <span className="close" onClick={this.closeConfirm}>x</span>
          <h3>Are you sure you want to delete this recording?</h3>
          <button onClick={this.handleDelete}>Yes</button>
          <button className="cancel" onClick={this.closeConfirm}>No</button>
        </div>
      </div>
    )
  }



  showConfirm(recordingId) {
    return e => {
      e.preventDefault();
      this.setState({showConfirm: true, deleteId: recordingId});
    }
  }

  closeConfirm(e) {
    e.preventDefault();
    if(e.target.className === 'modal-background' || e.target.className === 'close' || e.target.className === 'cancel'){
        this.setState({showConfirm: false, deleteId: null});
    }
  }

  handleDelete() {
    this.props.deleteRecording(this.state.deleteId);
    this.setState({showConfirm: false, deleteId: null})
  }

  render() {
    let confirm = null;
    if (this.state.showConfirm) {
      confirm = this.confirmation();
    }
    return(
      <div className='my-recordings'>
        <h2 className='title'>My Recordings</h2>
        <table className='my-recordings-list'>
          <tbody>
            {this.props.myRecordings.map((recording, idx)=>{
              return (
                <tr key={idx} className='my-recordings-list-item'>
                    <td id="item-image" onClick={this.recordingDetail(recording.id)}><img className='recordings-list-image' src={recording.image_url}/></td>
                    <td id="item-button" className='recordings-list-button' onClick={this.recordingDetail(recording.id)}>{recording.title}</td>
                    <td>
                      <AudioPlayer recordingUrl={recording.recording_url} />
                    </td>
                    <td><img src='https://res.cloudinary.com/record-cloud/image/upload/v1478740782/delete.jpg'className='recordings-list-delete' onClick={this.showConfirm(recording.id)}/></td>
                </tr>
            )})}
          </tbody>
        </table>
        {confirm}
      </div>
    );
  }
}

export default MyRecordings;
