import React from 'react';
import { Link, hashHistory } from 'react-router';

class Browse extends React.Component {
  constructor(props) {
    super(props);
    // this.MeetingStyle = {};
    // this.MusicStyle = {};
    // this.LectureStyle = {};
    // this.state = {
    //   MeetingScrolled: false,
    //   MusicScrolled: false,
    //   LectureScrolled: false
    // };
    this.top10Style = {};
    this.top20Style = {};
    this.state = {
      top10Scrolled: false,
      top20Scrolled: false
    }
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
    let description = e.currentTarget.nextSibling;
    let contentHeight = description.firstChild.clientHeight;
    let descriptionText = description.firstChild;
    let arrow = e.currentTarget.firstChild;
    if (description.style.height > "0px") {
      description.style.height = "0px";
      arrow.style.transform = "rotate(45deg)";
      descriptionText.style.opacity = "0";
    } else {
      description.style.height = description.clientHeight + contentHeight + "px";
      arrow.style.transform = "rotate(-135deg)";
      descriptionText.style.opacity = "1";
    }
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
    let recordings = {
      top10: this.props.recordings.slice(0, 10),
      top20: this.props.recordings.slice(10,20)
    }
    const arrowImg = "https://res.cloudinary.com/record-cloud/image/upload/v1481678021/arrow.svg";
    return (
      <div className="browse-container">
        {
          Object.keys(recordings).map((category) => {
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
            let title = category == 'top10' ? "1 - 10" : "11 - 20";
            return (
              <div className="slider-container" key={category}>
                <h2 className="top-recording-title">Most Recent Recordings ({title})</h2>
                <div className="browse-slider-wrapper">
                  <div className="browse-slider">
                    {arrowLeft}
                    {
                      recordings[category].map((recording, idx) => {
                        return (
                          <div key={idx} className="slider-item" style={this[`${category}Style`]} onClick={this.recordingDetail(recording.id)}>
                            <div className="thumbnail-container">
                              <div className="thumbnail" style={{backgroundImage: 'url(' + recording.image_url+ ')'}}></div>
                            </div>
                            <div className="recording-title-container">
                              <div className="recording-title">{recording.title}</div>
                              <div className="more-description" onClick={this.moreDescription}><div className="down-arrow"></div></div>
                              <div className="description-wrapper"><div className="recording-description">{recording.description}</div></div>
                            </div>
                          </div>
                        );
                      })
                    }
                    {arrowRight}
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Browse;
