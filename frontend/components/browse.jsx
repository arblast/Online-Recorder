import React from 'react';
import { Link, hashHistory } from 'react-router';

class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.MeetingStyle = {};
    this.MusicStyle = {};
    this.LectureStyle = {};
    this.state = {
      MeetingScrolled: false,
      MusicScrolled: false,
      LectureScrolled: false
    };
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
  }

  componentDidMount() {
    this.props.setTab('browse');
  }

  recordingDetail(recordingId) {
    return e => {
      hashHistory.push(`/recording/${recordingId}`);
    };
  }

  moreDescription(e) {
    e.stopPropagation();
  }

  scrollLeft(category) {
    return () => {
      this[`${category}Style`] = {right: `0`};
      let state = {};
      state[`${category}Scrolled`] = false;
      this.setState(state);

    }
  }

  scrollRight(category) {
    return () => {
      this[`${category}Style`] = {right: `81.82%`};
      let state = {};
      state[`${category}Scrolled`] = true;
      this.setState(state);
    }
  }

  render() {
    const arrowImg = "https://res.cloudinary.com/record-cloud/image/upload/v1481678021/arrow.svg";
    return (
      <div className="browse-container">
        {
          Object.keys(this.props.recordings).map((category) => {
            if(category != 'Other') {
              let arrowLeft = <div onClick={this.scrollLeft(category)} className="arrow left"><div className="arrowline top"></div><div className="arrowline bot"></div></div>;
              let arrowRight = <div onClick={this.scrollRight(category)} className="arrow right"><div className="arrowline top"></div><div className="arrowline bot"></div></div>;
              let darkenIndex = null;
              if(this.state[`${category}Scrolled`]) {
                arrowRight = null;
                darkenIndex = 4;
              } else {
                arrowLeft = null;
                darkenIndex = 5;
              }
              return (
                <div className="slider-container" key={category}>
                  <h2 className="top-recording-title">Top Recordings for {category}</h2>
                  <div className="browse-slider">
                    {arrowLeft}
                    {
                      this.props.recordings[category].map((recording, idx) => {
                        return (
                          <div key={idx} className="slider-item" style={this[`${category}Style`]} onClick={this.recordingDetail(recording.id)}>
                            <div className="thumbnail-container">
                              <div className="thumbnail" style={{backgroundImage: 'url(' + recording.image_url+ ')'}}></div>
                            </div>
                            <div className="recording-title-container">
                              <div className="recording-title">{recording.title}</div>
                              <div className="more-description" onClick={this.moreDescription}><div className="description-arrow left-arrow"></div><div className="description-arrow right-arrow"></div></div>
                              <div className="recording-description">{recording.description}</div>
                            </div>
                          </div>
                        );
                      })
                    }
                    {arrowRight}
                  </div>
                </div>
              );
            }
          })
        }
      </div>
    );
  }
}

export default Browse;
