import React from 'react';
import { Link, hashHistory } from 'react-router';
import AudioPlayer from './audio_player';

class Search extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setTab('search');
  }

  recordingDetail(recordingId) {
    return e => {
      hashHistory.push(`/recording/${recordingId}`);
    };
  }


  render() {
    let searchParams;
    if (this.props.params.searchParams) {
      searchParams = `"${this.props.params.searchParams}"`;
    } else {
      searchParams = `""`;
    }
    return (
      <div className='my-recordings'>
        <h2 className='title'>Search results for {searchParams}</h2>
        <table className='my-recordings-list'>
          <tbody>
            {this.props.searchRecordings.map((recording, idx)=>{
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
        </table>
      </div>
    );
  }
}

export default Search;
