import React from 'react';
import { hashHistory } from 'react-router';
import RecordingForm from './recording_form';
import cloudinary from 'cloudinary-core';
import AudioPlayer from '../audio_player';

class Recording extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      commentContent: "",
      showConfirm: false
    }
    this.showForm = this.showForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.updateComment = this.updateComment.bind(this);
    this.postComment = this.postComment.bind(this);
    this.removeComment = this.removeComment.bind(this);
    const cloud = cloudinary.Cloudinary.new(window.cloudinary_options);
    this.favoriteUrl = cloud.image("favorite.jpg").src;
    this.unFavoriteUrl = cloud.image("unfavorite.png").src;
    this.addFavorite = this.addFavorite.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this);
    this.showConfirm = this.showConfirm.bind(this);
  }

  componentDidMount() {
    this.props.setTab('recording');
  }

  showForm(e) {
    e.preventDefault();
    this.setState({showForm: true});
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

  closeForm(e) {
    e.preventDefault();
    if(e.target.className === 'modal-background' || e.target.className === 'close'){
        this.setState({showForm: false});
    }
  }

  handleDelete() {
    this.props.deleteRecording(this.props.recording.id);
    hashHistory.push(`/home`);
  }

  updateComment(e) {
    e.preventDefault();
    this.setState({commentContent: e.target.value})
  }

  postComment(e) {
    e.preventDefault();
    this.props.createComment({comment: {content: this.state.commentContent, recording_id: this.props.recording.id}});
    this.setState({commentContent: ""});
  }

  removeComment(commentId) {
    return (e) => {
      e.preventDefault();
      this.props.deleteComment(commentId)
    }
  }

  showConfirm() {
    this.setState(showConfirm: true);
  }

  closeConfirm(e) {
    e.preventDefault();
    if(e.target.className === 'modal-background' || e.target.className === 'close' || e.target.className === 'cancel'){
        this.setState({showConfirm: false});
    }
  }

  addFavorite(e) {
    e.preventDefault();
    this.props.createFavorite({favorite: {recording_id: this.props.recording.id}});
  }

  removeFavorite(e) {
    e.preventDefault();
    this.props.deleteFavorite(this.props.recording.id);
  }

  render() {
    const recording = this.props.recording;
    const comments = recording.comments;
    const uploadDate = recording.upload_date;
    const that = this;
    let favorite;
    if (recording.is_favorite) {
      favorite = <img onClick={this.removeFavorite} className='favorite-icon-show' src={this.favoriteUrl}/>;
    } else {
      favorite = <img onClick={this.addFavorite} className='favorite-icon-show' src={this.unFavoriteUrl}/>;
    }
    let commentIds = [];
    if(comments){
      commentIds = Object.keys(comments);
    }
    let editForm = null;
    let form = null;
    if (this.props.ownRecording) {
      editForm = <div className="edit-buttons"><a onClick={this.showForm} >Edit Recording Details</a><a onClick={this.handleDelete} >Delete Recording</a></div>
    }
    if(this.state.showForm) {
      form = <RecordingForm formType={'edit'} categories={this.props.categories} currentRecording={recording} processForm={this.props.updateRecording} errors={this.props.errors} closeForm={this.closeForm} clearRecordingErrors={this.props.clearRecordingErrors}/>;
    }
    return(
      <div className="recording-detail">
        <h2>{recording.title} {favorite}</h2>
        <h3>Recorded by {recording.uploader}</h3>
        <br/>
        <img className='recording-detail-image' src={recording.image_url}></img>
        <div className='recording-detail-player'>
          <AudioPlayer recordingUrl={recording.recording_url} />
        </div>
        <div className='recording-info'>
          <div className='description'>
            <h4>Recorded on {uploadDate.month} {uploadDate.day}, {uploadDate.year}</h4>
            <p>{recording.description}</p>
            <h5>Category: {recording.category_name}</h5>
          </div>
          {editForm}
          {form}
          <div className='comments'>
            <h4>Comments</h4>
            <ul className='comments-list clearfix'>
              {commentIds.map( function(commentId) {
                const comment = comments[commentId];
                return(
                  <li className="single-comment" key={commentId}>
                    <div className="comment-author">
                      <img className="comment-author-image" src={comment.author_image}/>
                      <h5 className="comment-author-name">{comment.author_name}</h5>
                    </div>
                    <div className="comment-details">
                      <p className="comment-date">{comment.month} {comment.day}, {comment.year}</p>
                      <p className="comment-content">{comment.content}</p>
                    </div>
                    {that.props.currentUser === comment.author_name ? <a className="remove-comment" onClick={that.removeComment(commentId)}>Delete Comment</a> : <div></div>}
                  </li>
                )
              })}
            </ul>
            <br/>
            <form className='comments-form' onSubmit={this.postComment}>
              <textarea value={this.state.commentContent} onChange={this.updateComment} placeholder="Enter a comment"></textarea>
              <br/>
              <input className='submit-button' type='submit' value='Submit' disabled={this.state.commentContent === ""}></input>
            </form>
          </div>
        </div>
        {this.state.showConfirm ? this.confirmation() : null}
      </div>
    );
  }


}

export default Recording;
