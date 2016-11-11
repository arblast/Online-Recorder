import React from 'react';
import { Link, hashHistory } from 'react-router';

class Favorites extends React.Component {

  constructor(props) {
    super(props);
  }

  recordingDetail(recordingId) {
    return e => {
      hashHistory.push(`/recording/${recordingId}`);
    };
  }


  render() {
    return(
      <div className='my-recordings'>
        <h2>Favorite Recordings</h2>
        <table className='my-recordings-list'>
          <tbody>
            {this.props.myRecordings.map((recording, idx)=>(
              <tr key={idx} className='my-recordings-list-item'>
                  <td id="item-image" onClick={this.recordingDetail(recording.id)}><img className='recordings-list-image' src={recording.image_url}/></td>
                  <td id="item-button" className='recordings-list-button' onClick={this.recordingDetail(recording.id)}>{recording.title}</td>
                  <td><audio controls src={recording.recording_url}></audio></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Favorites;
