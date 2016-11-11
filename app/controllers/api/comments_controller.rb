class Api::CommentsController < ApplicationController

  def create
   @comment = Comment.new(comment_params)
   @comment.author_id = current_user.id
   recording_id = @comment.recording_id
   if @comment.save
     @recording = Recording.includes(comments: [:author]).find(recording_id)
     render "/api/recordings/show", status: 200
   else
     render json: @comment.errors.full_messages, status: 422
   end
 end

 def destroy
   @comment = Comment.find(params[:id])
   recording_id = @comment.recording_id
   if @comment.author_id == current_user.id
     if @comment.destroy
       @recording = Recording.includes(comments: [:author]).find(recording_id)
       render "/api/recordings/show", status: 200
     else
       render json: @comment.errors.full_messages, status: 422
     end
   else
     render json: "You don't own the comment!", status: 422
   end
 end

 private
 def comment_params
   params.require(:comment).permit(:content, :recording_id)
 end

end
