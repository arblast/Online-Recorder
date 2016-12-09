import React from 'react';
import { Link, hashHistory } from 'react-router';
import AudioPlayer from './audio_player';

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
    let recordingsList;
    if (this.props.favoriteRecordings.length != 0) {
      recordingsList =
        <table className='my-recordings-list'>
          <tbody>
            {this.props.favoriteRecordings.map((recording, idx)=>{
              return (
                <tr key={idx} className='my-recordings-list-item'>
                    <td id="item-image" onClick={this.recordingDetail(recording.id)}><img className='recordings-list-image' src={recording.image_url}/></td>
                    <td id="item-button" className='recordings-list-button' onClick={this.recordingDetail(recording.id)}>{recording.title}</td>
                    <td>
                      <AudioPlayer recordingUrl={recording.recording_url} />
                    </td>
                </tr>
            )})}
          </tbody>
        </table>;
      } else {
        recordingsList =
        <div className="no-recordings">
          Looks like you haven't added any recordings to your favorites.
          <br/>
          To add a recording to favorites, click on the heart icon next to the recording title while on the recording page!
        </div>
      }
    return (
      <div className='my-recordings'>
        <h2 className='title'>Favorites</h2>
        {recordingsList}
      </div>
    );
  }
}

export default Favorites;
