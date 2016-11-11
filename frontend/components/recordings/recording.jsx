import React from 'react';
import { hashHistory } from 'react-router';
import RecordingForm from './recording_form';
import cloudinary from 'cloudinary-core';

class Recording extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      commentContent: ""
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
  }

  showForm(e) {
    e.preventDefault();
    this.setState({showForm: true});
  }

  closeForm(e) {
    e.preventDefault();
    if(e.target.className === 'modal-background' || e.target.className === 'close'){
        this.setState({showForm: false});
    }
  }

  handleDelete() {
    if(window.confirm("Are you sure you want to delete this recording?")) {
      this.props.deleteRecording(this.props.recording.id);
      hashHistory.push('/home');
    }
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
      editForm = <div className="edit-buttons"><button onClick={this.showForm} >Edit Recording Details</button><button onClick={this.handleDelete} >Delete Recording</button></div>
    }
    if(this.state.showForm) {
      form = <RecordingForm formType={'edit'} currentRecording={recording} processForm={this.props.updateRecording} errors={this.props.errors} closeForm={this.closeForm} clearRecordingErrors={this.props.clearRecordingErrors}/>;
    }
    return(
      <div className="recording-detail">
        <h2>{recording.title} {favorite}</h2>
        <h3>Recorded by {recording.uploader}</h3>
        <br/>
        <img className='recording-detail-image' src={recording.image_url}></img>
        <br/>
        <audio controls src={recording.recording_url}></audio>
        <br/>
        <label className='description-label'>Description
          <p>{recording.description}</p>
        </label>
        <br/>
        <h5>Category: {recording.category_name}</h5>
        {editForm}
        {form}
        <div className='comments'>
          <h4>Comments</h4>
          <ul className='comments-list'>
            {commentIds.map( function(commentId) {
              const comment = comments[commentId];
              return(
                <li className="single-comment" key={commentId}>
                  {comment.author_name} - {comment.content}
                  {that.props.currentUser === comment.author_name ? <button className="remove-comment" onClick={that.removeComment(commentId)}>Delete</button> : <div></div>}
                </li>
              )
            })}
          </ul>
          <form className='comments-form' onSubmit={this.postComment}>
            <textarea value={this.state.commentContent} onChange={this.updateComment} placeholder="Enter a comment"></textarea>
            <br/>
            <input type='submit' value='Submit' disabled={this.state.commentContent === ""}></input>
          </form>
        </div>
      </div>
    );
  }


}

export default Recording;
