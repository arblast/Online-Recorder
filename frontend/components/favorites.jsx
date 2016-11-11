import React from 'react';
import { Link, hashHistory } from 'react-router';
import AudioPlayer from 'react-responsive-audio-player';

class Favorites extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setTab('favorites');
  }

  recordingDetail(recordingId) {
    return e => {
      hashHistory.push(`/recording/${recordingId}`);
    };
  }


  render() {
    return (
      <div className='my-recordings'>
        {this.props.newRecordingButton}
        <h2>Favorites</h2>
        <table className='my-recordings-list'>
          <tbody>
            {this.props.favoriteRecordings.map((recording, idx)=>{
              return (
                <tr key={idx} className='my-recordings-list-item'>
                    <td id="item-image" onClick={this.recordingDetail(recording.id)}><img className='recordings-list-image' src={recording.image_url}/></td>
                    <td id="item-button" className='recordings-list-button' onClick={this.recordingDetail(recording.id)}>{recording.title}</td>
                    <td>
                      <AudioPlayer playlist={[{url: recording.recording_url, displayText: `Recorded by ${recording.uploader}`}]} hideBackSkip={true}/>
                    </td>
                </tr>
            )})}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Favorites;
