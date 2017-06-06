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
      this[`${category}Style`] = {right: `83.8%`};
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
              let arrowLeft = <div onClick={this.scrollLeft(category)} className="arrow left"></div>;
              let arrowRight = <div onClick={this.scrollRight(category)} className="arrow right"></div>;
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
                  <div className="arrow-slider-container">
                    {arrowLeft}
                    <div className="browse-slider">
                      {
                        this.props.recordings[category].map((recording, idx) => {
                          let arrow = null;
                          if (idx === darkenIndex) {
                            arrow = arrowRight;
                          }
                          return (
                            <div key={idx} className="slider-item" style={this[`${category}Style`]} onClick={this.recordingDetail(recording.id)}>
                              <div className="thumbnail-container">
                                <div className={"thumbnail"} style={{backgroundImage: 'url(' + recording.image_url+ ')'}}/>
                                {arrow}
                              </div>
                            </div>
                          );
                        })
                      }
                    </div>
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
